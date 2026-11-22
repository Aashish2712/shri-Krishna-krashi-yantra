import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'outline' | 'light' | 'outline-light'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: 'md' | 'sm'
  /** Internal route. Renders a router Link. */
  to?: string
  /** External URL. Renders a plain anchor. */
  href?: string
  onClick?: () => void
}

function Button({ children, variant = 'primary', size = 'md', to, href, onClick }: ButtonProps) {
  const className = `btn btn--${variant} btn--${size}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isWeb = href.startsWith('http')
    return (
      <a
        href={href}
        className={className}
        {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
