import { useId } from 'react'
import { formContent } from '../../data/formContent.ts'
import { indianStates } from '../../data/states.ts'
import { dealerFieldOrder, dealerInitialValues, validateDealer } from '../../forms/dealerForm.ts'
import { useEnquiryForm } from '../../hooks/useEnquiryForm.ts'
import Button from '../ui/Button.tsx'
import FormField from './FormField.tsx'
import FormSummary from './FormSummary.tsx'
import PrototypeNotice from './PrototypeNotice.tsx'
import './Form.css'

const stateOptions = indianStates.map((state) => ({ value: state, label: state }))

function DealerForm() {
  const idPrefix = useId()
  const form = useEnquiryForm({
    initialValues: dealerInitialValues,
    validate: validateDealer,
    fieldOrder: dealerFieldOrder,
  })
  const field = (name: (typeof dealerFieldOrder)[number]) => ({
    idPrefix,
    name,
    value: form.values[name],
    error: form.errors[name],
    onChange: form.handleChange,
  })

  return (
    <form className="enquiry-form" onSubmit={form.handleSubmit} noValidate>
      <PrototypeNotice {...formContent.prototype.dealer} />
      <p className="enquiry-form__required">{formContent.requiredNote}</p>
      <FormSummary status={form.status} errors={form.errorItems} idPrefix={idPrefix} summaryRef={form.summaryRef} />

      <div className="enquiry-form__grid">
        <FormField {...field('fullName')} label="Your name" autoComplete="name" />
        <FormField {...field('mobile')} label="Mobile number" kind="tel" autoComplete="tel" placeholder="98765 43210" />
        <FormField {...field('email')} label="Email" kind="email" optional autoComplete="email" full />
        <FormField {...field('businessName')} label="Business or shop name" autoComplete="organization" full />
        <FormField {...field('city')} label="City or town" autoComplete="address-level2" />
        <FormField {...field('district')} label="District" />
        <FormField {...field('state')} label="State" kind="select" options={stateOptions} autoComplete="address-level1" full />
        <FormField
          {...field('businessDetails')}
          label="Existing business details"
          kind="textarea"
          optional
          hint="For example, what your business currently deals in."
          full
        />
        <FormField {...field('message')} label="Message" kind="textarea" optional full />
      </div>

      <div className="enquiry-form__actions">
        <Button type="submit" variant="secondary">
          Check my enquiry
        </Button>
        <Button variant="outline" onClick={form.reset}>
          Clear form
        </Button>
      </div>
    </form>
  )
}

export default DealerForm
