export interface ProductImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Product {
  slug: string
  name: string
  /** Optional short qualifier shown above the name, e.g. a variant. */
  tagline?: string
  /** Source-supported description, or null when none has been supplied yet. */
  summary: string | null
  /** Source-supported facts only. */
  highlights: string[]
  /** Genuine product photograph, or null when none has been supplied yet. */
  image: ProductImage | null
}
