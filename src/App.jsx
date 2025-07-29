import React, { useState } from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import PersonasSection from './components/PersonasSection.jsx'
import InteractiveSection from './components/InteractiveSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import AssociationSection from './components/AssociationSection.jsx'
import Footer from './components/Footer.jsx'
import Parceiros from './pages/Parceiros.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToPartners = () => {
    setCurrentPage('partners')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'partners') {
    return <Parceiros onBack={navigateToHome} />
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToPartners={navigateToPartners} />
      <main>
        <HeroSection />
        <PersonasSection onNavigateToPartners={navigateToPartners} />
        <InteractiveSection onNavigateToPartners={navigateToPartners} />
        <TestimonialsSection />
        <AssociationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

