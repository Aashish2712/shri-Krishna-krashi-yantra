import { company } from './company.ts'
import type { ContactContent } from '../types/pages.ts'

export const contactContent: ContactContent = {
  hero: {
    eyebrow: 'Contact us',
    title: 'Contact Shree Krishna Krashi Yantra',
    intro: 'Reach us by WhatsApp, phone, email or Instagram, or send a message using the form.',
  },
  details: {
    title: 'Contact details',
    locationNote: 'A full street address will be added once confirmed by the company.',
  },
  form: {
    title: 'Send us a message',
    intro: 'Share your question and your mobile number.',
  },
}

export interface ContactMethod {
  label: string
  value: string
  href: string
  external: boolean
}

// Built from the central company data so contact details live in one place.
export function getContactMethods(): ContactMethod[] {
  return [
    {
      label: 'WhatsApp',
      value: company.phoneDisplay,
      href: company.whatsappHref,
      external: true,
    },
    { label: 'Phone', value: company.phoneDisplay, href: company.phoneHref, external: false },
    { label: 'Email', value: company.email, href: `mailto:${company.email}`, external: false },
    {
      label: 'Instagram',
      value: company.instagramHandle,
      href: company.instagramHref,
      external: true,
    },
  ]
}
