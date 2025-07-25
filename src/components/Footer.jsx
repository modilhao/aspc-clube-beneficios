import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-aspc-dark text-aspc-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/Logo - ASPC.png" 
                alt="ASPC Logo" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold font-raleway">ASPC</span>
            </div>
            <p className="text-aspc-white/70 text-sm leading-relaxed font-raleway">
              Associação de Servidores Públicos de Cajamar. Mais benefícios para quem serve nossa cidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors font-raleway">Início</a></li>
              <li><a href="#beneficios" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors font-raleway">Benefícios</a></li>
              <li><a href="#como-associar" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors font-raleway">Como Associar-se</a></li>
              <li><a href="#parceiros" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors font-raleway">Parceiros</a></li>
              <li><a href="#contato" className="text-aspc-white/70 hover:text-aspc-secondary transition-colors font-raleway">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-aspc-white/70" />
                <span className="text-aspc-white/70 text-sm font-raleway">(11) 4447-8000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-aspc-white/70" />
                <span className="text-aspc-white/70 text-sm font-raleway">contato@aspc.org.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-aspc-white/70 mt-1" />
                <span className="text-aspc-white/70 text-sm font-raleway">
                  Rua das Palmeiras, 123<br />
                  Centro - Cajamar/SP<br />
                  CEP: 07700-000
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway">Newsletter</h3>
            <p className="text-aspc-white/70 text-sm mb-4 font-raleway">
              Receba novidades sobre novos parceiros e benefícios exclusivos.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-aspc-dark/50 border-aspc-white/20 text-aspc-white placeholder-aspc-white/50 font-raleway"
              />
              <Button className="w-full bg-aspc-primary hover:bg-aspc-primary/90 font-raleway font-semibold">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aspc-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-aspc-white/70 text-sm font-raleway">
              © 2025 ASPC - Associação de Servidores Públicos de Cajamar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-aspc-white/70 hover:text-aspc-secondary text-sm transition-colors font-raleway">
                Política de Privacidade
              </a>
              <a href="#" className="text-aspc-white/70 hover:text-aspc-secondary text-sm transition-colors font-raleway">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

