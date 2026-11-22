import type { ChangeEvent } from 'react'
import type { SelectOption } from '../../types/forms.ts'
import { fieldId } from '../../utils/fieldId.ts'
import './FormField.css'

type FieldKind = 'text' | 'tel' | 'email' | 'number' | 'select' | 'textarea'

interface FormFieldProps {
  /** Shared prefix so ids are unique when a page has more than one form. */
  idPrefix: string
  name: string
  label: string
  value: string
  kind?: FieldKind
  error?: string
  hint?: string
  optional?: boolean
  options?: SelectOption[]
  placeholder?: string
  autoComplete?: string
  rows?: number
  /** Span both columns of the form grid. */
  full?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

function FormField({
  idPrefix,
  name,
  label,
  value,
  kind = 'text',
  error,
  hint,
  optional = false,
  options = [],
  placeholder,
  autoComplete,
  rows = 4,
  full = false,
  onChange,
}: FormFieldProps) {
  const id = fieldId(idPrefix, name)
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined

  const shared = {
    id,
    name,
    value,
    onChange,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': optional ? undefined : true,
  } as const

  let control
  if (kind === 'select') {
    control = (
      <select {...shared} autoComplete={autoComplete}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  } else if (kind === 'textarea') {
    control = <textarea {...shared} rows={rows} placeholder={placeholder} />
  } else {
    // Numbers use a text input with a numeric keypad, avoiding browser spinners and
    // locale quirks; the value is validated as a whole number in code.
    control = (
      <input
        {...shared}
        type={kind === 'number' ? 'text' : kind}
        inputMode={kind === 'number' ? 'numeric' : kind === 'tel' ? 'tel' : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    )
  }

  const className = ['form-field', full ? 'form-field--full' : '', error ? 'form-field--invalid' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      <label className="form-field__label" htmlFor={id}>
        {label}
        {optional ? <span className="form-field__optional"> (optional)</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="form-field__hint">
          {hint}
        </p>
      ) : null}
      {control}
      {error ? (
        <p id={errorId} className="form-field__error">
          <span className="visually-hidden">Error: </span>
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default FormField
