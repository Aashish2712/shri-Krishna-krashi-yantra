import HeroSection from '../components/home/HeroSection.tsx'
import ProductShowcase from '../components/home/ProductShowcase.tsx'
import AboutSection from '../components/home/AboutSection.tsx'
import MissionVisionSection from '../components/home/MissionVisionSection.tsx'
import ManufacturingSection from '../components/home/ManufacturingSection.tsx'
import DealerCtaSection from '../components/home/DealerCtaSection.tsx'
import QuoteCtaSection from '../components/home/QuoteCtaSection.tsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'

const PAGE_TITLE = 'Shree Krishna Krashi Yantra | Agricultural Implements, Tirla, Dhar'
const PAGE_DESCRIPTION =
  'Shree Krishna Krashi Yantra manufactures agricultural implements in Tirla, District Dhar, Madhya Pradesh. Explore the Seed Drill, Cultivator and Duck Foot, and request a quotation.'

function HomePage() {
  useDocumentMeta(PAGE_TITLE, PAGE_DESCRIPTION)

  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <MissionVisionSection />
      <ManufacturingSection />
      <DealerCtaSection />
      <QuoteCtaSection />
    </>
  )
}

export default HomePage
