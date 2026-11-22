// Form values are plain strings so they map directly to inputs and, later, to JSON.
export type FormValues = Record<string, string>

export type FormErrors<T extends FormValues> = Partial<Record<keyof T & string, string>>

/** idle: nothing submitted. invalid: submit blocked by errors. prototype: entries are valid but nothing was sent. */
export type FormStatus = 'idle' | 'invalid' | 'prototype'

export interface SelectOption {
  value: string
  label: string
}

export interface FormErrorItem {
  name: string
  message: string
}
