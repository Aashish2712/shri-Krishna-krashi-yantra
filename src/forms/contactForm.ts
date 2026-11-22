import type { FormErrors } from '../types/forms.ts'
import {
  normaliseMobile,
  validateMobile,
  validateOptionalEmail,
  validateRequiredText,
} from '../utils/validation.ts'

export type ContactFormValues = {
  fullName: string
  mobile: string
  email: string
  message: string
}

export const contactFieldOrder: (keyof ContactFormValues)[] = ['fullName', 'mobile', 'email', 'message']

export const contactInitialValues: ContactFormValues = {
  fullName: '',
  mobile: '',
  email: '',
  message: '',
}

export function validateContact(values: ContactFormValues): FormErrors<ContactFormValues> {
  return {
    fullName: validateRequiredText(values.fullName, 'your full name', { min: 2, max: 100 }),
    mobile: validateMobile(values.mobile),
    email: validateOptionalEmail(values.email),
    message: validateRequiredText(values.message, 'your message', { min: 10, max: 1000 }),
  }
}

/** Shape a future Django REST Framework endpoint could accept. Not sent anywhere yet. */
export function toContactPayload(values: ContactFormValues) {
  return {
    full_name: values.fullName.trim(),
    mobile: normaliseMobile(values.mobile),
    email: values.email.trim() || null,
    message: values.message.trim(),
  }
}
