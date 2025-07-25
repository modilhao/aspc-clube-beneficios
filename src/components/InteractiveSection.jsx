import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Calculator, Users, TrendingUp } from 'lucide-react'
import EconomySimulator from './EconomySimulator'
import PersonaQuiz from './PersonaQuiz'

const InteractiveSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-aspc-light to-aspc-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            Ferramentas Interativas
          </h2>
          <p className="text-xl text-aspc-dark/70 max-w-3xl mx-auto font-raleway">
            Use nossas ferramentas para descobrir seu perfil ideal e calcular sua economia personalizada
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="simulator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="simulator" className="flex items-center space-x-2 font-raleway">
              <Calculator className="h-4 w-4" />
              <span>Simulador de Economia</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center space-x-2 font-raleway">
              <Users className="h-4 w-4" />
              <span>Quiz de Perfil</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="simulator" className="space-y-6">
            <EconomySimulator />
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-aspc-white shadow-lg mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2 font-raleway">
                    <Users className="h-6 w-6 text-aspc-primary" />
                    <span>Descubra seu Perfil de Servidor</span>
                  </CardTitle>
                  <CardDescription className="font-raleway">
                    Responda algumas perguntas e descubra quais benefícios são mais adequados para você
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PersonaQuiz />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-6 w-6 text-aspc-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Economia Personalizada</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Calcule exatamente quanto você pode economizar com base no seu perfil e necessidades
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-aspc-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Perfil Inteligente</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Descubra qual categoria de servidor você é e receba recomendações personalizadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-aspc-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-aspc-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">ROI Garantido</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Veja o retorno sobre investimento da sua associação e tome uma decisão informada
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="bg-aspc-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-aspc-dark mb-4 font-raleway">
              Pronto para começar a economizar?
            </h3>
            <p className="text-aspc-dark/70 mb-6 font-raleway">
              Junte-se aos centenas de servidores que já estão aproveitando os benefícios da ASPC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white font-raleway font-semibold">
                Quero me Associar
              </Button>
              <Button size="lg" variant="outline" className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveSection

