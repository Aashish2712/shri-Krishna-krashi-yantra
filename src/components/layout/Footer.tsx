import { Link } from 'react-router-dom'
import { company, logo } from '../../data/company.ts'
import { footerNav } from '../../data/navigation.ts'
import { getFeaturedProducts } from '../../services/productService.ts'
import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  const products = getFeaturedProducts()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${company.name} logo`}
            loading="lazy"
          />
          <p className="site-footer__name">{company.name}</p>
          <p className="site-footer__tagline">{company.tagline}</p>
          <p className="site-footer__location">{company.location}</p>
        </div>

        <nav className="site-footer__col" aria-label="Footer navigation">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Product links">
          <h2 className="site-footer__heading">Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Contact</h2>
          <ul>
            <li>
              <span className="site-footer__label">WhatsApp / Helpline</span>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="site-footer__label">Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="site-footer__label">Instagram</span>
              <a href={company.instagramHref} target="_blank" rel="noopener noreferrer">
                {company.instagramHandle}
              </a>
            </li>
            <li>
              <span className="site-footer__label">Manufacturing unit</span>
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container">
          <p>
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
