import './SectionHeading.css'

interface SectionHeadingProps {
  title: string
  eyebrow?: string
  intro?: string
  align?: 'left' | 'center'
}

function SectionHeading({ title, eyebrow, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </div>
  )
}

export default SectionHeading
