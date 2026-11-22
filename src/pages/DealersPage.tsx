import DealerForm from '../components/forms/DealerForm.tsx'
import FormCard from '../components/forms/FormCard.tsx'
import Button from '../components/ui/Button.tsx'
import PageHero from '../components/ui/PageHero.tsx'
import { company } from '../data/company.ts'
import { dealerContent } from '../data/dealerContent.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './DealersPage.css'

function DealersPage() {
  useDocumentMeta(
    'Become a Dealer | Shree Krishna Krashi Yantra',
    'Interested in dealing in agricultural implements from Shree Krishna Krashi Yantra, Tirla, Dhar? Send a dealer enquiry. Submitting does not guarantee a dealership.',
  )
  const { hero, why, focus, disclaimer, form } = dealerContent

  return (
    <>
      <PageHero {...hero} />

      <section className="section dealers-page">
        <div className="container dealers-page__grid">
          <div className="dealers-page__info">
            <h2 className="dealers-page__heading">{why.title}</h2>
            <ul className="dealers-page__cards">
              {why.cards.map((card) => (
                <li key={card.title} className="dealers-page__card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </li>
              ))}
            </ul>

            <h2 className="dealers-page__heading dealers-page__heading--spaced">{focus.title}</h2>
            <ul className="dealers-page__focus">
              {focus.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <aside className="dealers-page__disclaimer">
              <p className="dealers-page__disclaimer-title">{disclaimer.title}</p>
              <p>{disclaimer.text}</p>
            </aside>
          </div>

          <div className="dealers-page__form">
            <FormCard title={form.title} intro={form.intro}>
              <DealerForm />
            </FormCard>
            <div className="dealers-page__alt">
              <p>Prefer to talk first?</p>
              <Button href={company.whatsappHref} variant="outline" size="sm">
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DealersPage
