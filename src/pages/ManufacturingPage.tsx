import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.tsx'
import CtaBand from '../components/ui/CtaBand.tsx'
import PageHero from '../components/ui/PageHero.tsx'
import { manufacturingContent } from '../data/manufacturingContent.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import { getFeaturedProducts } from '../services/productService.ts'
import './ManufacturingPage.css'

function ManufacturingPage() {
  useDocumentMeta(
    'Manufacturing & Quality | Shree Krishna Krashi Yantra',
    'How Shree Krishna Krashi Yantra builds agricultural implements in Tirla, Dhar: fabrication experience, our approach, and construction details from our catalogue.',
  )
  const { hero, foundation, approach, construction, gallery, cta } = manufacturingContent
  // Only products with supplied facts are listed, so nothing is invented.
  const detailedProducts = getFeaturedProducts().filter((product) => product.highlights.length > 0)

  return (
    <>
      <PageHero {...hero} />

      <section className="section manufacturing-page__foundation" aria-labelledby="foundation-title">
        <div className="container">
          <h2 id="foundation-title" className="manufacturing-page__heading">
            {foundation.title}
          </h2>
          <div className="manufacturing-page__text">
            {foundation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--offwhite" aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title" className="manufacturing-page__heading">
            {approach.title}
          </h2>
          <p className="manufacturing-page__lead">{approach.intro}</p>
          <ol className="manufacturing-page__steps">
            {approach.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="manufacturing-page__note">{approach.note}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="construction-title">
        <div className="container">
          <h2 id="construction-title" className="manufacturing-page__heading">
            {construction.title}
          </h2>
          <p className="manufacturing-page__lead">{construction.intro}</p>
          <ul className="manufacturing-page__products">
            {detailedProducts.map((product) => (
              <li key={product.slug} className="manufacturing-page__product">
                <h3>{product.name}</h3>
                {product.tagline ? <p className="manufacturing-page__tagline">{product.tagline}</p> : null}
                <ul className="manufacturing-page__facts">
                  {product.highlights.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
                <Link to={`/products/${product.slug}`}>
                  View {product.name} details
                </Link>
              </li>
            ))}
          </ul>
          <p className="manufacturing-page__note">{construction.note}</p>
        </div>
      </section>

      <section className="section section--offwhite" aria-labelledby="gallery-title">
        <div className="container">
          <h2 id="gallery-title" className="manufacturing-page__heading">
            {gallery.title}
          </h2>
          <ul className="manufacturing-page__gallery">
            {gallery.items.map((item) => (
              <li key={item.src}>
                <figure>
                  <img
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={cta.title} text={cta.text}>
        <Button to="/request-quote" variant="secondary">
          Request a Quote
        </Button>
        <Button to="/contact" variant="outline">
          Contact Us
        </Button>
      </CtaBand>
    </>
  )
}

export default ManufacturingPage
