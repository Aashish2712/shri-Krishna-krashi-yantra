import type { ReactNode } from 'react'
import './FormCard.css'

interface FormCardProps {
  title: string
  intro?: string
  children: ReactNode
}

// Bordered panel that holds a form, with its own H2.
function FormCard({ title, intro, children }: FormCardProps) {
  return (
    <section className="form-card">
      <h2 className="form-card__title">{title}</h2>
      {intro ? <p className="form-card__intro">{intro}</p> : null}
      {children}
    </section>
  )
}

export default FormCard
