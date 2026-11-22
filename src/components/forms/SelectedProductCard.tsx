import { Link } from 'react-router-dom'
import { getProductBySlug } from '../../services/productService.ts'
import './SelectedProductCard.css'

interface SelectedProductCardProps {
  slug: string
}

// Shows the chosen product from the product data. Renders nothing for "other" or empty.
function SelectedProductCard({ slug }: SelectedProductCardProps) {
  const product = getProductBySlug(slug)
  if (!product) return null

  return (
    <div className="selected-product">
      {product.image ? (
        <img src={product.image.src} alt="" width={product.image.width} height={product.image.height} />
      ) : (
        <div className="selected-product__placeholder" aria-hidden="true" />
      )}
      <div className="selected-product__body">
        <p className="selected-product__label">Selected product</p>
        <p className="selected-product__name">
          {product.name}
          {product.tagline ? <span> ({product.tagline})</span> : null}
        </p>
        {product.highlights.length > 0 ? (
          <p className="selected-product__facts">{product.highlights.join(' · ')}</p>
        ) : null}
        <Link to={`/products/${product.slug}`}>View product details</Link>
      </div>
    </div>
  )
}

export default SelectedProductCard
