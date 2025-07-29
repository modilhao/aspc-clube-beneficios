import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-aspc-dark hover:text-aspc-primary px-3 py-2 text-sm font-medium transition-colors font-raleway">
              Início
            </a>
            <a href="#beneficios" className="text-aspc-dark hover:text-aspc-primary px-3 py-2 text-sm font-medium transition-colors font-raleway">
              Benefícios
            </a>
            <a href="#como-associar" className="text-aspc-dark hover:text-aspc-primary px-3 py-2 text-sm font-medium transition-colors font-raleway">
              Como Associar-se
            </a>
            <a href="#contato" className="text-aspc-dark hover:text-aspc-primary px-3 py-2 text-sm font-medium transition-colors font-raleway">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="gradient" className="font-raleway font-semibold">
              Associe-se Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-aspc-dark hover:text-aspc-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-aspc-white border-t border-aspc-light">
              <a href="#inicio" className="block px-3 py-2 text-base font-medium text-aspc-dark hover:text-aspc-primary font-raleway">
                Início
              </a>
              <a href="#beneficios" className="block px-3 py-2 text-base font-medium text-aspc-dark hover:text-aspc-primary font-raleway">
                Benefícios
              </a>
              <a href="#como-associar" className="block px-3 py-2 text-base font-medium text-aspc-dark hover:text-aspc-primary font-raleway">
                Como Associar-se
              </a>
              <a href="#contato" className="block px-3 py-2 text-base font-medium text-aspc-dark hover:text-aspc-primary font-raleway">
                Contato
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white font-raleway font-semibold">
                  Associe-se Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

