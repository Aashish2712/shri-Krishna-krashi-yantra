import { homeContent } from '../../data/homeContent.ts'
import Button from '../ui/Button.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import './AboutSection.css'

function AboutSection() {
  const { about } = homeContent

  return (
    <section className="section section--offwhite about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div id="about-title">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </div>
        <div className="about__text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about__action">
            <Button to="/about" variant="outline">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
