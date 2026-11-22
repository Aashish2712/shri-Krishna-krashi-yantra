import { useId } from 'react'
import { formContent } from '../../data/formContent.ts'
import { contactFieldOrder, contactInitialValues, validateContact } from '../../forms/contactForm.ts'
import { useEnquiryForm } from '../../hooks/useEnquiryForm.ts'
import Button from '../ui/Button.tsx'
import FormField from './FormField.tsx'
import FormSummary from './FormSummary.tsx'
import PrototypeNotice from './PrototypeNotice.tsx'
import './Form.css'

function ContactForm() {
  const idPrefix = useId()
  const form = useEnquiryForm({
    initialValues: contactInitialValues,
    validate: validateContact,
    fieldOrder: contactFieldOrder,
  })
  const field = (name: (typeof contactFieldOrder)[number]) => ({
    idPrefix,
    name,
    value: form.values[name],
    error: form.errors[name],
    onChange: form.handleChange,
  })

  return (
    <form className="enquiry-form" onSubmit={form.handleSubmit} noValidate>
      <PrototypeNotice {...formContent.prototype.contact} />
      <p className="enquiry-form__required">{formContent.requiredNote}</p>
      <FormSummary status={form.status} errors={form.errorItems} idPrefix={idPrefix} summaryRef={form.summaryRef} />

      <div className="enquiry-form__grid">
        <FormField {...field('fullName')} label="Full name" autoComplete="name" />
        <FormField {...field('mobile')} label="Mobile number" kind="tel" autoComplete="tel" placeholder="98765 43210" />
        <FormField {...field('email')} label="Email" kind="email" optional autoComplete="email" full />
        <FormField {...field('message')} label="Your message" kind="textarea" rows={5} full />
      </div>

      <div className="enquiry-form__actions">
        <Button type="submit" variant="secondary">
          Check my message
        </Button>
        <Button variant="outline" onClick={form.reset}>
          Clear form
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
