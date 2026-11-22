import { useSearchParams } from 'react-router-dom'
import FormCard from '../components/forms/FormCard.tsx'
import QuoteForm from '../components/forms/QuoteForm.tsx'
import Button from '../components/ui/Button.tsx'
import PageHero from '../components/ui/PageHero.tsx'
import { company } from '../data/company.ts'
import { quoteContent } from '../data/quoteContent.ts'
import { resolveProductParam } from '../forms/quoteForm.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './RequestQuotePage.css'

function RequestQuotePage() {
  useDocumentMeta(
    'Request a Quote | Shree Krishna Krashi Yantra',
    'Request a quotation for agricultural implements from Shree Krishna Krashi Yantra, Tirla, Dhar. Choose a product and tell us your requirement.',
  )
  const [searchParams] = useSearchParams()
  // Linked from a product page as /request-quote?product=<slug>. Unknown slugs are ignored.
  const initialProduct = resolveProductParam(searchParams.get('product'))
  const { hero, form, aside } = quoteContent

  return (
    <>
      <PageHero {...hero} />

      <section className="section quote-page">
        <div className="container quote-page__grid">
          <div className="quote-page__form">
            {/* The key resets the form if the preselected product changes. */}
            <FormCard title={form.title} intro={form.intro}>
              <QuoteForm key={initialProduct} initialProduct={initialProduct} />
            </FormCard>
          </div>

          <aside className="quote-page__aside" aria-labelledby="quote-aside-title">
            <h2 id="quote-aside-title" className="quote-page__aside-title">
              {aside.title}
            </h2>
            <ul className="quote-page__points">
              {aside.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="quote-page__alt">Prefer to ask directly?</p>
            <div className="quote-page__actions">
              <Button href={company.whatsappHref} variant="primary" size="sm">
                Message on WhatsApp
              </Button>
              <Button to="/contact" variant="outline" size="sm">
                Contact details
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default RequestQuotePage
