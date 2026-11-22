import { homeContent } from '../../data/homeContent.ts'
import SectionHeading from '../ui/SectionHeading.tsx'
import './MissionVisionSection.css'

function MissionVisionSection() {
  const { missionVision } = homeContent

  return (
    <section className="section mission" aria-labelledby="mission-title">
      <div className="container">
        <div id="mission-title">
          <SectionHeading eyebrow={missionVision.eyebrow} title={missionVision.title} />
        </div>

        <div className="mission__cards">
          <article className="mission__card">
            <h3>Our Mission</h3>
            <p>{missionVision.mission}</p>
          </article>
          <article className="mission__card">
            <h3>Our Vision</h3>
            <p>{missionVision.vision}</p>
          </article>
        </div>

        <div className="mission__beliefs">
          <h3 className="mission__beliefs-title">{missionVision.beliefsTitle}</h3>
          <ul className="mission__beliefs-list">
            {missionVision.beliefs.map((belief) => (
              <li key={belief}>{belief}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection
