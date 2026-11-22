import './PageHero.css'

interface PageHeroProps {
  eyebrow: string
  title: string
  intro?: string
}

// Page banner with the page's single H1.
function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {intro ? <p className="page-hero__intro">{intro}</p> : null}
      </div>
    </section>
  )
}

export default PageHero
