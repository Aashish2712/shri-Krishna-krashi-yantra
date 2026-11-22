import type { ManufacturingContent } from '../types/pages.ts'

// Only information from the supplied profile and catalogue is used. No factory
// machinery, capacity, quality standards, inspection procedures or certifications
// were supplied, so none are described. The page states plainly that "Quality Check"
// is part of the company's stated approach, without inventing detail.
export const manufacturingContent: ManufacturingContent = {
  hero: {
    eyebrow: 'Manufacturing and quality',
    title: 'Manufacturing built on fabrication experience',
    intro:
      'Shree Krishna Krashi Yantra began as a welding workshop focused on precision fabrication and practical engineering. That experience shapes how we build agricultural implements today.',
  },
  foundation: {
    title: 'Fabrication and practical engineering',
    paragraphs: [
      'Our experience in fabrication and agricultural equipment has helped us understand the actual requirements of farmers and tractor users.',
      'We focus on manufacturing strong, reliable and practical machinery designed for Indian farming conditions.',
    ],
  },
  approach: {
    title: 'Our approach',
    intro: 'Our stated approach follows four steps, from manufacturing through to farmer satisfaction.',
    steps: ['Manufacture', 'Quality Check', 'Dealer Support', 'Farmer Satisfaction'],
    note: 'Quality Check is a step in our approach. If you would like to know more about how a particular implement is built or checked, please contact us.',
  },
  construction: {
    title: 'Construction details we can share',
    intro:
      'These details come from our product catalogue. Open a product for its full available information.',
    note: 'For more information about materials and quality, please contact us. Please also confirm the configuration suitable for your tractor.',
  },
  gallery: {
    title: 'Our implements',
    items: [
      {
        src: '/images/hero-cultivator-closeup.webp',
        alt: 'Close view of a grey and orange cultivator frame with black tynes, photographed outdoors',
        caption: 'Close view of a cultivator frame and tynes',
        width: 1400,
        height: 1273,
      },
      {
        src: '/images/manufacturing-chassis-detail.webp',
        alt: 'Painted cultivator frame with bolted joints and a yellow hitch, photographed outdoors',
        caption: 'Duck foot cultivator frame with bolted joints',
        width: 900,
        height: 1377,
      },
    ],
  },
  cta: {
    title: 'Questions about our implements?',
    text: 'Request a quotation or contact us to discuss the implement and configuration you need.',
  },
}
