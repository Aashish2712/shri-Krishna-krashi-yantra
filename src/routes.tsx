import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import ProductDetailPage from './pages/ProductDetailPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ManufacturingPage from './pages/ManufacturingPage.tsx'
import DealersPage from './pages/DealersPage.tsx'
import RequestQuotePage from './pages/RequestQuotePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:slug', element: <ProductDetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'manufacturing', element: <ManufacturingPage /> },
      { path: 'dealers', element: <DealersPage /> },
      { path: 'request-quote', element: <RequestQuotePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
