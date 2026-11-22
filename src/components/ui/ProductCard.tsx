import type { Product } from '../../types/product.ts'
import Button from './Button.tsx'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { image } = product

  return (
    <article className="product-card">
      <div className="product-card__media">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="product-card__placeholder">
            <span>Photograph to be supplied</span>
          </div>
        )}
      </div>
      <div className="product-card__body">
        {product.tagline ? <p className="product-card__tagline">{product.tagline}</p> : null}
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__summary">
          {product.summary ?? 'Product details to be added.'}
        </p>
        {product.highlights.length > 0 ? (
          <ul className="product-card__highlights">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="product-card__action">
          <Button to={`/products/${product.slug}`} variant="outline" size="sm">
            View Details<span className="visually-hidden">: {product.name}</span>
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
