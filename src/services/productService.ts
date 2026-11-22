import { products } from '../data/products.ts'
import type { Product } from '../types/product.ts'

// Data access for products. Today this reads local typed data; it is the one
// place to swap for a Django REST Framework call later, so components never
// need to change.
export function getFeaturedProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
