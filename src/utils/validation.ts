// Pure validation helpers. Each returns an error message, or undefined when valid.
// Messages are collected here so they can be reviewed and translated in one place.

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

export const messages = {
  required: (label: string) => `Enter ${label}.`,
  select: (label: string) => `Select ${label}.`,
  tooShort: (label: string, min: number) => `${capitalise(label)} must be at least ${min} characters.`,
  tooLong: (label: string, max: number) => `${capitalise(label)} must be ${max} characters or fewer.`,
  mobile: 'Enter a valid 10-digit Indian mobile number, for example 98765 43210.',
  email: 'Enter a valid email address, for example name@example.com.',
  wholeNumber: (label: string, min: number, max: number) =>
    `${label} must be a whole number from ${min} to ${max}.`,
  invalidChoice: (label: string) => `Choose one of the listed options for ${label}.`,
}

const isBlank = (value: string) => value.trim() === ''

export function validateRequiredText(
  value: string,
  label: string,
  { min = 1, max = 120 }: { min?: number; max?: number } = {},
): string | undefined {
  const text = value.trim()
  if (text === '') return messages.required(label)
  if (text.length < min) return messages.tooShort(label, min)
  if (text.length > max) return messages.tooLong(label, max)
  return undefined
}

export function validateOptionalText(value: string, label: string, max: number): string | undefined {
  if (isBlank(value)) return undefined
  return value.trim().length > max ? messages.tooLong(label, max) : undefined
}

/** Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6-9. */
export function normaliseMobile(value: string): string {
  const digits = value.replace(/[\s\-().]/g, '')
  return digits.replace(/^(\+91|91|0)(?=\d{10}$)/, '')
}

export function validateMobile(value: string): string | undefined {
  if (isBlank(value)) return messages.required('your mobile number')
  return /^[6-9]\d{9}$/.test(normaliseMobile(value)) ? undefined : messages.mobile
}

export function validateOptionalEmail(value: string): string | undefined {
  if (isBlank(value)) return undefined
  const email = value.trim()
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? undefined : messages.email
}

export function validateChoice(
  value: string,
  allowed: readonly string[],
  label: string,
): string | undefined {
  if (isBlank(value)) return messages.select(label)
  return allowed.includes(value) ? undefined : messages.invalidChoice(label)
}

export function validateWholeNumber(
  value: string,
  label: string,
  { min, max, required }: { min: number; max: number; required: boolean },
): string | undefined {
  if (isBlank(value)) return required ? messages.required(`the ${label.toLowerCase()}`) : undefined
  const text = value.trim()
  const number = Number(text)
  return /^\d+$/.test(text) && number >= min && number <= max
    ? undefined
    : messages.wholeNumber(label, min, max)
}

export function hasErrors(errors: object): boolean {
  return Object.values(errors).some(Boolean)
}
