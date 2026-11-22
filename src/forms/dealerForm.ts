import { indianStates } from '../data/states.ts'
import type { FormErrors } from '../types/forms.ts'
import {
  normaliseMobile,
  validateChoice,
  validateMobile,
  validateOptionalEmail,
  validateOptionalText,
  validateRequiredText,
} from '../utils/validation.ts'

export type DealerFormValues = {
  fullName: string
  mobile: string
  email: string
  businessName: string
  city: string
  district: string
  state: string
  businessDetails: string
  message: string
}

export const dealerFieldOrder: (keyof DealerFormValues)[] = [
  'fullName',
  'mobile',
  'email',
  'businessName',
  'city',
  'district',
  'state',
  'businessDetails',
  'message',
]

export const dealerInitialValues: DealerFormValues = {
  fullName: '',
  mobile: '',
  email: '',
  businessName: '',
  city: '',
  district: '',
  state: '',
  businessDetails: '',
  message: '',
}

export function validateDealer(values: DealerFormValues): FormErrors<DealerFormValues> {
  return {
    fullName: validateRequiredText(values.fullName, 'your name', { min: 2, max: 100 }),
    mobile: validateMobile(values.mobile),
    email: validateOptionalEmail(values.email),
    businessName: validateRequiredText(values.businessName, 'your business or shop name', { max: 120 }),
    city: validateRequiredText(values.city, 'your city or town', { max: 80 }),
    district: validateRequiredText(values.district, 'your district', { max: 80 }),
    state: validateChoice(values.state, indianStates, 'your state'),
    businessDetails: validateOptionalText(values.businessDetails, 'Existing business details', 1000),
    message: validateOptionalText(values.message, 'Message', 1000),
  }
}

/** Shape a future Django REST Framework endpoint could accept. Not sent anywhere yet. */
export function toDealerPayload(values: DealerFormValues) {
  return {
    full_name: values.fullName.trim(),
    mobile: normaliseMobile(values.mobile),
    email: values.email.trim() || null,
    business_name: values.businessName.trim(),
    city: values.city.trim(),
    district: values.district.trim(),
    state: values.state,
    business_details: values.businessDetails.trim(),
    message: values.message.trim(),
  }
}
