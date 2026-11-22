import { company } from '../../data/company.ts'
import { homeContent } from '../../data/homeContent.ts'
import Button from '../ui/Button.tsx'
import './HeroSection.css'

function HeroSection() {
  const { hero } = homeContent

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__tagline">{company.tagline}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.headline}
          </h1>
          <p className="hero__supporting">{hero.supporting}</p>
          <div className="hero__actions">
            <Button to="/products" variant="primary">
              Explore Products
            </Button>
            <Button to="/request-quote" variant="secondary">
              Request a Quote
            </Button>
          </div>
        </div>
        <div className="hero__media">
          <img
            src="/images/hero-cultivator-closeup.webp"
            width={1400}
            height={1273}
            alt="Grey and orange cultivator frame with black tynes, photographed outdoors"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="hero__facts">
        <dl className="container hero__facts-list">
          {hero.facts.map((fact) => (
            <div key={fact.label} className="hero__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default HeroSection
