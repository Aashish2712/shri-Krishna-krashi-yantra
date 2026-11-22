import type { HomeContent } from '../types/home.ts'

// Homepage copy, kept out of the components so it can be translated and
// client-approved separately. Wording follows the supplied company profile
// and catalogue.
export const homeContent: HomeContent = {
  hero: {
    headline: 'Agricultural implements engineered for Indian farming conditions',
    supporting:
      'Manufactured in Tirla, District Dhar, Madhya Pradesh, with a focus on precision fabrication and practical engineering.',
    facts: [
      { label: 'Manufactured in', value: 'Tirla, District Dhar' },
      { label: 'Product range', value: 'Seed Drill, Cultivator, Duck Foot' },
      { label: 'Pricing', value: 'Quotation on request' },
    ],
  },
  about: {
    eyebrow: 'About the company',
    title: 'From a welding workshop to an agricultural machinery manufacturer',
    paragraphs: [
      'Shree Krishna Krashi Yantra is an agricultural machinery manufacturing enterprise based in Tirla, District Dhar, Madhya Pradesh.',
      'We began as Shree Krishna Welding Workshop, with a strong focus on precision fabrication and practical engineering. That experience helps us understand the real-world challenges faced by farmers and tractor operators.',
      'Today we are developing it into a professional agricultural implements brand, focused on manufacturing strong, reliable and practical machinery for modern farming.',
    ],
  },
  missionVision: {
    eyebrow: 'Mission and vision',
    title: 'What guides our work',
    mission:
      'To engineer robust, reliable, and high-performance agricultural implements designed specifically for Indian farming conditions, delivering durability and value for money.',
    vision:
      'To be a trusted name in agricultural innovation, empowering farmers with modern machinery designed for efficient farming operations.',
    beliefsTitle: 'We believe agricultural machinery should be',
    beliefs: [
      'Strong and durable',
      'Easy to operate',
      'Suitable for Indian farming conditions',
      'Efficient in field performance',
      'Easy to maintain',
      'Value for money',
    ],
  },
  manufacturing: {
    eyebrow: 'Manufacturing and quality',
    title: 'Fabrication experience, applied to farm machinery',
    paragraphs: [
      'Our experience in fabrication and agricultural equipment has helped us understand the actual requirements of farmers and tractor users.',
      'Our aim is simple: to provide farmers with machines that deliver better performance, durability and value for money.',
    ],
    stepsTitle: 'Our approach',
    steps: ['Manufacture', 'Quality Check', 'Dealer Support', 'Farmer Satisfaction'],
  },
  dealer: {
    title: 'Interested in becoming a dealer?',
    text: 'We are building our dealer network with a long-term approach, aiming for a trusted brand with a strong dealer network across Madhya Pradesh and beyond. Get in touch to start the conversation.',
  },
  quote: {
    title: 'Looking for the right implement?',
    text: 'Prices depend on the model and your requirements, so we work on quotations. Tell us what you need and request a quotation.',
  },
}
