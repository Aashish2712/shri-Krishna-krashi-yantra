import type { Product } from '../types/product.ts'

// Only information from the supplied catalogue is used here.
// Seed Drill: no photograph or specifications were supplied yet.
export const products: Product[] = [
  {
    slug: 'seed-drill',
    name: 'Seed Drill',
    summary: null,
    highlights: [],
    image: null,
  },
  {
    slug: 'cultivator',
    name: 'Cultivator',
    tagline: '7 tynes, 2-in-1 convertible',
    summary:
      'Built as a 2-in-1 convertible system that changes between a standard cultivator and a duck foot implement.',
    highlights: ['35 mm thick tynes', 'Tractors 35 HP and above', 'Approx. 350 kg'],
    image: {
      src: '/images/product-cultivator-7-tynes.webp',
      alt: 'Grey and orange seven-tyne cultivator frame with black tynes, photographed outdoors',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'duck-foot',
    name: 'Duck Foot',
    summary:
      'Commonly used in row crops, horticultural farming and general field preparation, with a simple design and low maintenance requirements.',
    highlights: ['35 mm thick tynes', 'Tractors 30 HP and above', 'Approx. 310 kg'],
    image: {
      src: '/images/product-duck-foot.webp',
      alt: 'Blue-grey and yellow duck foot cultivator with flat triangular points, photographed outdoors',
      width: 1200,
      height: 800,
    },
  },
]
