import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calculator, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import PersonaQuiz from './PersonaQuiz'
import EconomySimulator from './EconomySimulator'

const PersonasSection = ({ onNavigateToPartners }) => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511915175471&text&type=phone_number&app_absent=0"
  
  const scrollToAssociation = () => {
    const associationSection = document.getElementById('como-associar')
    if (associationSection) {
      associationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-aspc-light to-aspc-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            Descubra Seu Perfil de Economia
          </h2>
          <p className="text-xl text-aspc-dark/70 max-w-3xl mx-auto font-raleway">
            Responda nosso quiz inteligente e descubra exatamente quanto você pode economizar com a ASPC
          </p>
        </div>

        {/* Quiz Principal */}
        <div className="mb-20">
          <Card className="bg-aspc-white shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-aspc-primary to-aspc-secondary text-aspc-white text-center py-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="h-8 w-8" />
                <CardTitle className="text-2xl lg:text-3xl font-bold font-raleway">
                  Quiz de Perfil Inteligente
                </CardTitle>
                <Sparkles className="h-8 w-8" />
              </div>
              <CardDescription className="text-aspc-white/90 text-lg font-raleway">
                7 perguntas rápidas para descobrir sua economia personalizada
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <PersonaQuiz />
            </CardContent>
          </Card>
        </div>

        {/* Seção de Transição */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-aspc-primary/30 flex-1"></div>
            <div className="bg-aspc-white rounded-full p-3 shadow-md">
              <ArrowRight className="h-6 w-6 text-aspc-primary" />
            </div>
            <div className="h-px bg-aspc-primary/30 flex-1"></div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-aspc-dark mb-4 font-raleway">
            Quer Calcular com Mais Detalhes?
          </h3>
          <p className="text-lg text-aspc-dark/70 max-w-2xl mx-auto font-raleway">
            Use nossa calculadora avançada para simular cenários específicos e validar sua economia
          </p>
        </div>

        {/* Calculadora Detalhada */}
        <div className="mb-16">
          <Card className="bg-aspc-white shadow-lg border-0">
            <CardHeader className="text-center py-6">
              <CardTitle className="flex items-center justify-center space-x-2 text-xl font-raleway">
                <Calculator className="h-6 w-6 text-aspc-primary" />
                <span>Calculadora Avançada de Economia</span>
              </CardTitle>
              <CardDescription className="font-raleway">
                Selecione os serviços que mais utiliza e veja sua economia detalhada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EconomySimulator />
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-aspc-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Quiz Inteligente</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Algoritmo que analisa seus hábitos e calcula sua economia personalizada em minutos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-6 w-6 text-aspc-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Cálculo Preciso</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Baseado em dados reais de mais de 35 parceiros com descontos comprovados
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-aspc-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">ROI Garantido</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Veja o retorno sobre investimento da sua associação e o tempo de payback
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-aspc-primary to-aspc-secondary rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-aspc-white">
            <h3 className="text-2xl font-bold mb-4 font-raleway">
              Pronto para Começar a Economizar?
            </h3>
            <p className="mb-6 font-raleway opacity-90">
              Junte-se aos centenas de servidores que já estão aproveitando os benefícios da ASPC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="gradient" 
                className="font-raleway font-semibold"
                onClick={scrollToAssociation}
              >
                Quero me Associar
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-aspc-white text-aspc-white hover:bg-aspc-white hover:text-aspc-primary font-raleway font-semibold"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonasSection

