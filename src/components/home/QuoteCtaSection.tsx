import { company } from '../../data/company.ts'
import { homeContent } from '../../data/homeContent.ts'
import Button from '../ui/Button.tsx'
import './QuoteCtaSection.css'

function QuoteCtaSection() {
  const { quote } = homeContent

  return (
    <section className="section quote-cta" aria-labelledby="quote-title">
      <div className="container quote-cta__inner">
        <h2 id="quote-title" className="quote-cta__title">
          {quote.title}
        </h2>
        <p className="quote-cta__text">{quote.text}</p>
        <div className="quote-cta__actions">
          <Button to="/request-quote" variant="secondary">
            Request a Quote
          </Button>
          <Button href={company.whatsappHref} variant="outline">
            Message on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

export default QuoteCtaSection
