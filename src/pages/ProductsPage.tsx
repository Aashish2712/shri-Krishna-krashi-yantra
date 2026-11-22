import ProductCard from '../components/ui/ProductCard.tsx'
import { getFeaturedProducts } from '../services/productService.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './ProductsPage.css'

function ProductsPage() {
  const products = getFeaturedProducts()
  useDocumentMeta(
    'Agricultural Implements | Shree Krishna Krashi Yantra',
    'Explore agricultural implements from Shree Krishna Krashi Yantra. View available product information and request a quotation.',
  )

  return (
    <section className="products-page section">
        <div className="container">
          <div className="products-page__heading">
            <p className="products-page__eyebrow">Our Products</p>
            <h1>Implements built for the field</h1>
            <p className="products-page__intro">
              Prices depend on the model and your requirements. Open a product to see its
              details, then request a quotation.
            </p>
          </div>
          <div className="products-page__grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="products-page__note">
            Product information is provided as a guide. Please contact us to confirm the
            configuration suitable for your tractor and farming requirements.
          </p>
        </div>
    </section>
  )
}

export default ProductsPage
