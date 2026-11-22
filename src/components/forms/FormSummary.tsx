import type { RefObject } from 'react'
import { company } from '../../data/company.ts'
import { formContent } from '../../data/formContent.ts'
import type { FormErrorItem, FormStatus } from '../../types/forms.ts'
import { fieldId } from '../../utils/fieldId.ts'
import './FormSummary.css'

interface FormSummaryProps {
  status: FormStatus
  errors: FormErrorItem[]
  idPrefix: string
  summaryRef: RefObject<HTMLDivElement | null>
}

// Result of a submit attempt. Errors link to their fields; a valid prototype submit
// says clearly that nothing was sent and offers real ways to get in touch.
function FormSummary({ status, errors, idPrefix, summaryRef }: FormSummaryProps) {
  if (status === 'invalid') {
    const focusField = (name: string) => document.getElementById(fieldId(idPrefix, name))?.focus()
    return (
      <div ref={summaryRef} tabIndex={-1} role="alert" className="form-summary form-summary--error">
        <p className="form-summary__title">{formContent.error.title(errors.length)}</p>
        <ul>
          {errors.map((item) => (
            <li key={item.name}>
              <a
                href={`#${fieldId(idPrefix, item.name)}`}
                onClick={(event) => {
                  event.preventDefault()
                  focusField(item.name)
                }}
              >
                {item.message}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (status === 'prototype') {
    return (
      <div ref={summaryRef} tabIndex={-1} role="status" className="form-summary form-summary--prototype">
        <p className="form-summary__title">{formContent.success.title}</p>
        <p>{formContent.success.text}</p>
        <ul className="form-summary__contacts">
          <li>
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {company.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={company.phoneHref}>Call {company.phoneDisplay}</a>
          </li>
          <li>
            <a href={`mailto:${company.email}`}>Email {company.email}</a>
          </li>
        </ul>
      </div>
    )
  }

  return null
}

export default FormSummary
