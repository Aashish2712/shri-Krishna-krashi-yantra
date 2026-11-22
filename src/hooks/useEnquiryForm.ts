import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { FormErrorItem, FormErrors, FormStatus, FormValues } from '../types/forms.ts'
import { hasErrors } from '../utils/validation.ts'

interface UseEnquiryFormOptions<T extends FormValues> {
  initialValues: T
  validate: (values: T) => FormErrors<T>
  /** Field order, used to list errors top to bottom. */
  fieldOrder: (keyof T & string)[]
}

// Form state and validation, separate from presentation.
//
// Backend integration point: when the API exists, call it from handleSubmit after
// validation passes (the *Form.ts modules already provide a payload mapper) and add
// real "sending / sent / failed" statuses. Today a valid submit only sets the
// 'prototype' status. Nothing is sent, stored or faked.
export function useEnquiryForm<T extends FormValues>({
  initialValues,
  validate,
  fieldOrder,
}: UseEnquiryFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitCount, setSubmitCount] = useState(0)
  const summaryRef = useRef<HTMLDivElement>(null)

  // Move focus to the summary after each submit attempt so keyboard and
  // screen-reader users hear the result.
  useEffect(() => {
    if (submitCount > 0) summaryRef.current?.focus()
  }, [submitCount])

  const setValue = (name: keyof T & string, value: string) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (status === 'prototype') setStatus('idle')
    // Errors appear on submit only (showing them on blur shifts the layout and can swallow
    // the click on the submit button). Once a field shows an error it is re-checked as the
    // user types, so the message clears as soon as the entry is fixed.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValue(event.target.name as keyof T & string, event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(values)
    setSubmitCount((count) => count + 1)
    if (hasErrors(found)) {
      setErrors(found)
      setStatus('invalid')
      return
    }
    setErrors({})
    setStatus('prototype')
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  const errorItems: FormErrorItem[] = fieldOrder.flatMap((name) => {
    const message = errors[name]
    return message ? [{ name, message }] : []
  })

  return { values, errors, errorItems, status, summaryRef, handleChange, handleSubmit, reset }
}
