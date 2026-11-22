import { useId } from 'react'
import { formContent } from '../../data/formContent.ts'
import { indianStates } from '../../data/states.ts'
import {
  getProductOptions,
  getQuoteInitialValues,
  quoteFieldOrder,
  validateQuote,
} from '../../forms/quoteForm.ts'
import { useEnquiryForm } from '../../hooks/useEnquiryForm.ts'
import Button from '../ui/Button.tsx'
import FormField from './FormField.tsx'
import FormSummary from './FormSummary.tsx'
import PrototypeNotice from './PrototypeNotice.tsx'
import SelectedProductCard from './SelectedProductCard.tsx'
import './Form.css'

interface QuoteFormProps {
  /** Product slug to preselect (from the product page link), or empty. */
  initialProduct: string
}

const stateOptions = indianStates.map((state) => ({ value: state, label: state }))

function QuoteForm({ initialProduct }: QuoteFormProps) {
  const idPrefix = useId()
  const form = useEnquiryForm({
    initialValues: getQuoteInitialValues(initialProduct),
    validate: validateQuote,
    fieldOrder: quoteFieldOrder,
  })
  const field = (name: (typeof quoteFieldOrder)[number]) => ({
    idPrefix,
    name,
    value: form.values[name],
    error: form.errors[name],
    onChange: form.handleChange,
  })

  return (
    <form className="enquiry-form" onSubmit={form.handleSubmit} noValidate>
      <PrototypeNotice {...formContent.prototype.quote} />
      <p className="enquiry-form__required">{formContent.requiredNote}</p>
      <FormSummary status={form.status} errors={form.errorItems} idPrefix={idPrefix} summaryRef={form.summaryRef} />

      <div className="enquiry-form__grid">
        <FormField {...field('fullName')} label="Full name" autoComplete="name" />
        <FormField {...field('mobile')} label="Mobile number" kind="tel" autoComplete="tel" placeholder="98765 43210" />
        <FormField {...field('email')} label="Email" kind="email" optional autoComplete="email" full />
        <FormField {...field('state')} label="State" kind="select" options={stateOptions} autoComplete="address-level1" />
        <FormField {...field('district')} label="District" autoComplete="address-level2" />
        <FormField {...field('product')} label="Product" kind="select" options={getProductOptions()} full />
        {form.values.product ? (
          <div className="form-field--full">
            <SelectedProductCard slug={form.values.product} />
          </div>
        ) : null}
        <FormField {...field('quantity')} label="Quantity" kind="number" placeholder="For example 1" />
        <FormField
          {...field('tractorHp')}
          label="Tractor HP"
          kind="number"
          optional
          hint="Helps us confirm the right configuration."
        />
        <FormField
          {...field('message')}
          label="Additional requirements or message"
          kind="textarea"
          optional
          full
        />
      </div>

      <div className="enquiry-form__actions">
        <Button type="submit" variant="secondary">
          Check my request
        </Button>
        <Button variant="outline" onClick={form.reset}>
          Clear form
        </Button>
      </div>
    </form>
  )
}

export default QuoteForm
