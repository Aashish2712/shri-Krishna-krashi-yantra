import { getFeaturedProducts } from '../../services/productService.ts'
import ProductCard from '../ui/ProductCard.tsx'
import SectionHeading from '../ui/SectionHeading.tsx'
import Button from '../ui/Button.tsx'
import './ProductShowcase.css'

function ProductShowcase() {
  const products = getFeaturedProducts()

  return (
    <section className="section product-showcase" aria-labelledby="products-title">
      <div className="container">
        <div id="products-title">
          <SectionHeading
            eyebrow="Our products"
            title="Implements built for the field"
            intro="Prices depend on the model and your requirements. Open a product to see its details, then request a quotation."
          />
        </div>
        <ul className="product-showcase__grid">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <div className="product-showcase__more">
          <Button to="/products" variant="primary">
            View Full Catalogue
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
