import './PagePlaceholder.css'

interface PagePlaceholderProps {
  title: string
  route: string
  detail?: string
}

// Temporary structural placeholder shown by each route until the real page is built.
function PagePlaceholder({ title, route, detail }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder">
      <h1 className="page-placeholder__title">{title}</h1>
      <p className="page-placeholder__route">Route: {route}</p>
      {detail ? <p className="page-placeholder__detail">{detail}</p> : null}
      <p className="page-placeholder__note">Placeholder page. Content and design to be built in a later milestone.</p>
    </section>
  )
}

export default PagePlaceholder
