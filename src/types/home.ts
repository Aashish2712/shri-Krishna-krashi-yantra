export interface Fact {
  label: string
  value: string
}

export interface HomeContent {
  hero: {
    headline: string
    supporting: string
    facts: Fact[]
  }
  about: { eyebrow: string; title: string; paragraphs: string[] }
  missionVision: {
    eyebrow: string
    title: string
    mission: string
    vision: string
    beliefsTitle: string
    beliefs: string[]
  }
  manufacturing: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stepsTitle: string
    steps: string[]
  }
  dealer: { title: string; text: string }
  quote: { title: string; text: string }
}
