import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import './PublicLayout.css'

function PublicLayout() {
  return (
    <div className="public-layout">
      <a className="public-layout__skip" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="public-layout__main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default PublicLayout
