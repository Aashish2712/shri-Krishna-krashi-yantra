import { Link } from 'react-router-dom'
import MissionVisionSection from '../components/home/MissionVisionSection.tsx'
import Button from '../components/ui/Button.tsx'
import CtaBand from '../components/ui/CtaBand.tsx'
import PageHero from '../components/ui/PageHero.tsx'
import SectionHeading from '../components/ui/SectionHeading.tsx'
import { aboutContent } from '../data/aboutContent.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import { getFeaturedProducts } from '../services/productService.ts'
import './AboutPage.css'

function AboutPage() {
  useDocumentMeta(
    'About Us | Shree Krishna Krashi Yantra',
    'Shree Krishna Krashi Yantra is an agricultural machinery manufacturer in Tirla, District Dhar, Madhya Pradesh, growing from Shree Krishna Welding Workshop.',
  )
  const { hero, journey, commitment, cta } = aboutContent
  const products = getFeaturedProducts()

  return (
    <>
      <PageHero {...hero} />

      <section className="section about-page__journey" aria-labelledby="journey-title">
        <div className="container about-page__journey-grid">
          <div>
            <h2 id="journey-title" className="about-page__heading">
              {journey.title}
            </h2>
            <div className="about-page__text">
              {journey.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="about-page__media">
            <img
              src="/images/product-cultivator-7-tynes.webp"
              width={1200}
              height={800}
              alt={journey.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <MissionVisionSection />

      <section className="section section--offwhite about-page__commitment" aria-labelledby="commitment-title">
        <div className="container">
          <div id="commitment-title">
            <SectionHeading eyebrow={commitment.eyebrow} title={commitment.title} />
          </div>
          <div className="about-page__text about-page__text--narrow">
            {commitment.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="about-page__subheading">{commitment.productsLabel}</h3>
          <ul className="about-page__products">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={cta.title} text={cta.text}>
        <Button to="/products" variant="primary">
          Explore Products
        </Button>
        <Button to="/contact" variant="outline">
          Contact Us
        </Button>
      </CtaBand>
    </>
  )
}

export default AboutPage
