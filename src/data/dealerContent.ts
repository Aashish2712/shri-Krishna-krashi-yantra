import type { DealerContent } from '../types/pages.ts'

// Deliberately limited to supported statements. The catalogue's dealer page also lists
// "marketing support" and "product information & support"; those are not repeated
// here because this page must not imply guaranteed support. No approval, exclusivity,
// profit or margin claims are made.
export const dealerContent: DealerContent = {
  hero: {
    eyebrow: 'Become a dealer',
    title: 'Dealer enquiries',
    intro:
      'We are building our dealer network with a long-term approach. If you are interested in dealing in our agricultural implements, tell us about your business.',
  },
  why: {
    title: 'Why contact us about dealership',
    cards: [
      {
        title: 'A manufacturer in Tirla',
        text: 'Shree Krishna Krashi Yantra manufactures its implements in Tirla, District Dhar, Madhya Pradesh.',
      },
      {
        title: 'A growing product range',
        text: 'Our range includes the Seed Drill, Cultivator and Duck Foot, with other approved implements and customized solutions.',
      },
      {
        title: 'A long-term approach',
        text: 'Our vision is a trusted agricultural implements brand with a strong dealer network across Madhya Pradesh and beyond.',
      },
    ],
  },
  focus: {
    title: 'What we focus on',
    items: [
      'Quality-focused products',
      'Practical and farmer-friendly designs',
      'Reliable manufacturing',
      'A growing product portfolio',
      'Long-term dealer relationships',
    ],
  },
  disclaimer: {
    title: 'Please note',
    text: 'An enquiry is only a first step. It does not guarantee a dealership, and any terms are discussed directly with the company.',
  },
  form: {
    title: 'Dealer enquiry form',
    intro: 'Tell us a little about you and your business.',
  },
}
