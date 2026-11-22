export interface CompanyInfo {
  name: string
  tagline: string
  location: string
  phoneDisplay: string
  phoneHref: string
  whatsappHref: string
  email: string
  instagramHandle: string
  instagramHref: string
}

export interface NavItem {
  label: string
  to: string
  end?: boolean
}
