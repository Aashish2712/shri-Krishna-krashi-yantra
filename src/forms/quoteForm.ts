import { indianStates } from '../data/states.ts'
import { getFeaturedProducts } from '../services/productService.ts'
import type { FormErrors } from '../types/forms.ts'
import {
  normaliseMobile,
  validateChoice,
  validateMobile,
  validateOptionalEmail,
  validateOptionalText,
  validateRequiredText,
  validateWholeNumber,
} from '../utils/validation.ts'

export const OTHER_PRODUCT = 'other'

export type QuoteFormValues = {
  fullName: string
  mobile: string
  email: string
  state: string
  district: string
  product: string
  quantity: string
  tractorHp: string
  message: string
}

export const quoteFieldOrder: (keyof QuoteFormValues)[] = [
  'fullName',
  'mobile',
  'email',
  'state',
  'district',
  'product',
  'quantity',
  'tractorHp',
  'message',
]

/** Product options come from the product data, plus a neutral "other" choice. */
export function getProductOptions() {
  return [
    ...getFeaturedProducts().map((product) => ({ value: product.slug, label: product.name })),
    { value: OTHER_PRODUCT, label: 'Other or not sure (describe in the message)' },
  ]
}

/** Returns the product slug from the URL only if it is a real product. */
export function resolveProductParam(param: string | null): string {
  if (!param) return ''
  return getFeaturedProducts().some((product) => product.slug === param) ? param : ''
}

export function getQuoteInitialValues(productSlug: string): QuoteFormValues {
  return {
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    product: productSlug,
    quantity: '',
    tractorHp: '',
    message: '',
  }
}

export function validateQuote(values: QuoteFormValues): FormErrors<QuoteFormValues> {
  return {
    fullName: validateRequiredText(values.fullName, 'your full name', { min: 2, max: 100 }),
    mobile: validateMobile(values.mobile),
    email: validateOptionalEmail(values.email),
    state: validateChoice(values.state, indianStates, 'your state'),
    district: validateRequiredText(values.district, 'your district', { max: 80 }),
    product: validateChoice(
      values.product,
      getProductOptions().map((option) => option.value),
      'a product',
    ),
    quantity: validateWholeNumber(values.quantity, 'Quantity', { min: 1, max: 500, required: true }),
    tractorHp: validateWholeNumber(values.tractorHp, 'Tractor HP', { min: 1, max: 300, required: false }),
    message: validateOptionalText(values.message, 'Message', 1000),
  }
}

/** Shape a future Django REST Framework endpoint could accept. Not sent anywhere yet. */
export function toQuotePayload(values: QuoteFormValues) {
  return {
    full_name: values.fullName.trim(),
    mobile: normaliseMobile(values.mobile),
    email: values.email.trim() || null,
    state: values.state,
    district: values.district.trim(),
    product: values.product,
    quantity: Number(values.quantity),
    tractor_hp: values.tractorHp.trim() ? Number(values.tractorHp) : null,
    message: values.message.trim(),
  }
}
