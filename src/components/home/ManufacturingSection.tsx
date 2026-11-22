import { homeContent } from '../../data/homeContent.ts'
import Button from '../ui/Button.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import './ManufacturingSection.css'

function ManufacturingSection() {
  const { manufacturing } = homeContent

  return (
    <section className="section manufacturing" aria-labelledby="manufacturing-title">
      <div className="container manufacturing__grid">
        <div className="manufacturing__media">
          <img
            src="/images/manufacturing-chassis-detail.webp"
            width={900}
            height={1377}
            alt="Painted steel cultivator frame with bolted joints and a yellow hitch, photographed outdoors"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="manufacturing__content">
          <div id="manufacturing-title">
            <SectionHeading eyebrow={manufacturing.eyebrow} title={manufacturing.title} />
          </div>
          <div className="manufacturing__text">
            {manufacturing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="manufacturing__steps-title">{manufacturing.stepsTitle}</h3>
          <ol className="manufacturing__steps">
            {manufacturing.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div className="manufacturing__action">
            <Button to="/manufacturing" variant="outline">
              Manufacturing &amp; Quality
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManufacturingSection
