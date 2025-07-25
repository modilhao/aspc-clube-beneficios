import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Calculator } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-aspc-primary via-aspc-primary/90 to-aspc-primary/80 text-aspc-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-raleway">
                Mais benefícios para quem serve{' '}
                <span className="text-aspc-secondary">Cajamar</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-aspc-white/80 leading-relaxed font-raleway">
                Descubra como a ASPC pode transformar sua qualidade de vida com descontos exclusivos e vantagens especiais
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold font-raleway"
              >
                Quero me associar
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-aspc-white text-aspc-white hover:bg-aspc-white hover:text-aspc-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold font-raleway"
              >
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Simular economia
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-aspc-white/30">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-aspc-secondary font-raleway">3200+</div>
                <div className="text-aspc-white/80 text-xs sm:text-sm lg:text-base font-raleway">Servidores</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-aspc-secondary font-raleway">180+</div>
                <div className="text-aspc-white/80 text-xs sm:text-sm lg:text-base font-raleway">Associados</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-aspc-secondary font-raleway">50+</div>
                <div className="text-aspc-white/80 text-xs sm:text-sm lg:text-base font-raleway">Parceiros</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-aspc-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-aspc-white/20">
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-center font-raleway">Economize até</h3>
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-aspc-secondary font-raleway">R$ 2.400</span>
                  <span className="text-lg sm:text-xl text-aspc-white/80 block font-raleway">por ano</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-aspc-white/80 font-raleway text-sm sm:text-base">Farmácias</span>
                    <span className="font-semibold font-raleway text-sm sm:text-base">até 25% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-aspc-white/80 font-raleway text-sm sm:text-base">Supermercados</span>
                    <span className="font-semibold font-raleway text-sm sm:text-base">até 15% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-aspc-white/80 font-raleway text-sm sm:text-base">Educação</span>
                    <span className="font-semibold font-raleway text-sm sm:text-base">até 30% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-aspc-white/80 font-raleway text-sm sm:text-base">Saúde</span>
                    <span className="font-semibold font-raleway text-sm sm:text-base">até 20% off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

