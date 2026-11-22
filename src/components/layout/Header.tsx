import { Link, NavLink } from 'react-router-dom'
import { company, logo } from '../../data/company.ts'
import { headerNav, quoteLink } from '../../data/navigation.ts'
import { useMobileNav } from '../../hooks/useMobileNav.ts'
import Button from '../ui/Button.tsx'
import './Header.css'

function Header() {
  const { isOpen, toggle, close, toggleRef } = useMobileNav()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={close}>
          {/* The original supplied logo, shown unmodified. The adjacent text names it. */}
          <img
            className="site-header__logo"
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt=""
          />
          <span className="site-header__name">{company.name}</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={toggle}
        >
          <span className="site-header__toggle-bars" aria-hidden="true" />
          <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <div
          id="site-navigation"
          className={isOpen ? 'site-header__panel site-header__panel--open' : 'site-header__panel'}
        >
          <nav aria-label="Main navigation">
            <ul className="site-header__list">
              {headerNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
                    }
                    onClick={close}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__cta">
            <Button to={quoteLink.to} variant="secondary" size="sm">
              {quoteLink.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
