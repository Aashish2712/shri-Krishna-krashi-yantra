import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button.tsx'
import { getProductBySlug } from '../services/productService.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import NotFoundPage from './NotFoundPage.tsx'
import './ProductDetailPage.css'

function ProductDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug)

  useDocumentMeta(
    product ? `${product.name} | Shree Krishna Krashi Yantra` : 'Product Not Found | Shree Krishna Krashi Yantra',
    product?.summary ?? 'Explore agricultural implements from Shree Krishna Krashi Yantra.',
  )

  if (!product) return <NotFoundPage />

  return (
    <section className="product-detail section">
        <div className="container">
          <nav className="product-detail__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="product-detail__layout">
            <div className="product-detail__media">
              {product.image ? (
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                />
              ) : (
                <div className="product-detail__placeholder">
                  <span>Product photograph to be supplied</span>
                </div>
              )}
            </div>

            <div className="product-detail__content">
              <p className="product-detail__eyebrow">Shree Krishna Krashi Yantra</p>
              {product.tagline ? <p className="product-detail__tagline">{product.tagline}</p> : null}
              <h1>{product.name}</h1>
              <p className="product-detail__summary">
                {product.summary ?? 'Product description and specifications will be added after confirmation.'}
              </p>

              {product.highlights.length > 0 ? (
                <div className="product-detail__specs">
                  <h2>Available product information</h2>
                  <ul>
                    {product.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ) : (
                <p className="product-detail__pending">
                  Detailed specifications and a product photograph are not yet available. Please
                  contact us for current information.
                </p>
              )}

              <p className="product-detail__price-note">
                Pricing is quotation-based and depends on the model and your requirements.
              </p>
              <div className="product-detail__actions">
                <Button to={`/request-quote?product=${product.slug}`} variant="secondary">Request a Quote</Button>
                <Button to="/contact" variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductDetailPage
