import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'

const Header = ({ onNavigateToPartners }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToBeneficios = () => {
    const beneficiosSection = document.getElementById('beneficios')
    if (beneficiosSection) {
      beneficiosSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Fechar menu após clique
  }

  const scrollToAssociation = () => {
    const associationSection = document.getElementById('como-associar')
    if (associationSection) {
      associationSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Fechar menu após clique
  }

  const handlePartnersClick = () => {
    if (onNavigateToPartners) {
      onNavigateToPartners()
    }
    setIsMenuOpen(false) // Fechar menu mobile após clique
  }

  return (
    <header className="bg-aspc-white shadow-sm border-b border-aspc-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/Logo - ASPC.png" 
                alt="Associação dos Servidores Públicos de Cajamar" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-sm sm:text-base lg:text-xl font-bold text-aspc-primary font-raleway hidden sm:inline">Associação dos Servidores Públicos de Cajamar</span>
              <span className="text-sm font-bold text-aspc-primary font-raleway sm:hidden">ASPC</span>
            </div>
          </div>

          {/* Desktop CTA Button and Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - sempre visível */}
            <Button 
              variant="gradient" 
              className="font-raleway font-semibold"
              onClick={scrollToAssociation}
            >
              Associe-se Agora
            </Button>
            
            {/* Menu button - agora também no desktop */}
            <button
              onClick={toggleMenu}
              className="text-aspc-dark hover:text-aspc-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Navigation - agora funciona tanto no mobile quanto no desktop */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-aspc-white shadow-lg border-t border-aspc-light z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-4 space-y-2">
                <button 
                  onClick={handlePartnersClick}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-aspc-dark hover:text-aspc-primary hover:bg-aspc-light/50 rounded-lg transition-colors font-raleway"
                >
                  Nossos Parceiros
                </button>
                <button 
                  onClick={scrollToBeneficios}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-aspc-dark hover:text-aspc-primary hover:bg-aspc-light/50 rounded-lg transition-colors font-raleway"
                >
                  Veja os benefícios
                </button>
                {/* Botão adicional no menu mobile */}
                 <div className="px-3 py-2 md:hidden">
                   <Button 
                     className="w-full bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white font-raleway font-semibold"
                     onClick={scrollToAssociation}
                   >
                     Associe-se Agora
                   </Button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

