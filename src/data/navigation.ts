import type { NavItem } from '../types/company.ts'

export const headerNav: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Dealers', to: '/dealers' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Product Catalogue', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Manufacturing & Quality', to: '/manufacturing' },
  { label: 'Become a Dealer', to: '/dealers' },
  { label: 'Request a Quote', to: '/request-quote' },
  { label: 'Contact Us', to: '/contact' },
]

export const quoteLink: NavItem = { label: 'Request a Quote', to: '/request-quote' }
