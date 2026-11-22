export interface PageIntro {
  eyebrow: string
  title: string
  intro: string
}

export interface TextCard {
  title: string
  text: string
}

export interface AboutContent {
  hero: PageIntro
  journey: { title: string; paragraphs: string[]; imageAlt: string }
  commitment: { eyebrow: string; title: string; paragraphs: string[]; productsLabel: string }
  cta: { title: string; text: string }
}

export interface ManufacturingContent {
  hero: PageIntro
  foundation: { title: string; paragraphs: string[] }
  approach: { title: string; intro: string; steps: string[]; note: string }
  construction: { title: string; intro: string; note: string }
  gallery: { title: string; items: { src: string; alt: string; caption: string; width: number; height: number }[] }
  cta: { title: string; text: string }
}

export interface DealerContent {
  hero: PageIntro
  why: { title: string; cards: TextCard[] }
  focus: { title: string; items: string[] }
  disclaimer: { title: string; text: string }
  form: { title: string; intro: string }
}

export interface QuoteContent {
  hero: PageIntro
  form: { title: string; intro: string }
  aside: { title: string; points: string[] }
}

export interface ContactContent {
  hero: PageIntro
  details: { title: string; locationNote: string }
  form: { title: string; intro: string }
}
