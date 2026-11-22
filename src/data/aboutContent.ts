import type { AboutContent } from '../types/pages.ts'

// Wording follows the supplied company profile and catalogue. No establishment year,
// capacity, employee or customer numbers, awards or certifications were supplied,
// so none are stated.
export const aboutContent: AboutContent = {
  hero: {
    eyebrow: 'About us',
    title: 'About Shree Krishna Krashi Yantra',
    intro:
      'An agricultural machinery manufacturing enterprise based in Tirla, District Dhar, Madhya Pradesh.',
  },
  journey: {
    title: 'Our journey',
    paragraphs: [
      'Our journey began with Shree Krishna Welding Workshop, with a focus on fabrication and practical engineering solutions.',
      'Over the years, our experience in fabrication and agricultural equipment has helped us understand the actual requirements of farmers and tractor users.',
      'Today, we are developing this experience into a professional agricultural implements brand, focused on manufacturing strong, reliable and practical machinery for modern farming.',
    ],
    imageAlt: 'Grey and orange seven-tyne cultivator frame with black tynes, photographed outdoors',
  },
  commitment: {
    eyebrow: 'Our commitment',
    title: 'Machinery that delivers performance, durability and value',
    paragraphs: [
      'Our aim is simple: to provide farmers with machines that deliver better performance, durability and value for money.',
      'Our vision is to build a trusted agricultural implements brand with a strong dealer network across Madhya Pradesh and beyond.',
    ],
    productsLabel: 'Our product range',
  },
  cta: {
    title: 'See what we manufacture',
    text: 'Explore our implements, or get in touch to discuss your requirements.',
  },
}
