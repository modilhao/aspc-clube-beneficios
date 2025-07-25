import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import PersonasSection from './components/PersonasSection.jsx'
import InteractiveSection from './components/InteractiveSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PersonasSection />
        <InteractiveSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

