import { company } from '../../data/company.ts'
import { homeContent } from '../../data/homeContent.ts'
import Button from '../ui/Button.tsx'
import './DealerCtaSection.css'

function DealerCtaSection() {
  const { dealer } = homeContent

  return (
    <section className="dealer-cta" aria-labelledby="dealer-title">
      <div className="container dealer-cta__inner">
        <div className="dealer-cta__text">
          <h2 id="dealer-title" className="dealer-cta__title">
            {dealer.title}
          </h2>
          <p>{dealer.text}</p>
        </div>
        <div className="dealer-cta__actions">
          <Button to="/dealers" variant="light">
            Become a Dealer
          </Button>
          <Button href={company.whatsappHref} variant="outline-light">
            Message on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DealerCtaSection
