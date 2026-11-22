import { Link } from 'react-router-dom'
import './NotFoundPage.css'

// Shown for any URL that does not match a planned route.
// Temporary English-only wording; final copy and Hindi translation to follow.
function NotFoundPage() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__link">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFoundPage
