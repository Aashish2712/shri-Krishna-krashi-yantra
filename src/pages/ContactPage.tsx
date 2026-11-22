import ContactForm from '../components/forms/ContactForm.tsx'
import FormCard from '../components/forms/FormCard.tsx'
import Button from '../components/ui/Button.tsx'
import CtaBand from '../components/ui/CtaBand.tsx'
import PageHero from '../components/ui/PageHero.tsx'
import { company } from '../data/company.ts'
import { contactContent, getContactMethods } from '../data/contactContent.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './ContactPage.css'

function ContactPage() {
  useDocumentMeta(
    'Contact Us | Shree Krishna Krashi Yantra',
    'Contact Shree Krishna Krashi Yantra, Tirla, District Dhar, Madhya Pradesh, by WhatsApp, phone, email or Instagram, or send a message.',
  )
  const { hero, details, form } = contactContent
  const methods = getContactMethods()

  return (
    <>
      <PageHero {...hero} />

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div className="contact-page__details">
            <h2 className="contact-page__heading">{details.title}</h2>
            <ul className="contact-page__methods">
              {methods.map((method) => (
                <li key={method.label} className="contact-page__method">
                  <span className="contact-page__label">{method.label}</span>
                  <a
                    href={method.href}
                    {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {method.value}
                  </a>
                </li>
              ))}
              <li className="contact-page__method">
                <span className="contact-page__label">Manufacturing unit</span>
                <span>{company.location}</span>
                <span className="contact-page__note">{details.locationNote}</span>
              </li>
            </ul>
            <div className="contact-page__cta">
              <Button href={company.whatsappHref} variant="primary">
                Message on WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-page__form">
            <FormCard title={form.title} intro={form.intro}>
              <ContactForm />
            </FormCard>
          </div>
        </div>
      </section>

      <CtaBand title="Looking for a quotation?" text="Choose an implement and tell us your requirement.">
        <Button to="/request-quote" variant="secondary">
          Request a Quote
        </Button>
        <Button to="/products" variant="outline">
          Explore Products
        </Button>
      </CtaBand>
    </>
  )
}

export default ContactPage
