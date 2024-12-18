import HeroSection from './components/hero-section'
import SubjectShowcase from './components/subject-showcase'
import FeatureHighlights from './components/feature-highlights'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <HeroSection />
      <SubjectShowcase />
      <FeatureHighlights />
    </div>
  )
}

