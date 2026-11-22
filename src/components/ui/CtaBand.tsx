import type { ReactNode } from 'react'
import './CtaBand.css'

interface CtaBandProps {
  title: string
  text: string
  /** Buttons or links. */
  children: ReactNode
}

// Closing call to action used at the bottom of content pages.
function CtaBand({ title, text, children }: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <h2 id="cta-band-title" className="cta-band__title">
            {title}
          </h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">{children}</div>
      </div>
    </section>
  )
}

export default CtaBand
