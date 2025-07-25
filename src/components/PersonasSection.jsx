import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { DollarSign, Users, Crown, Check } from 'lucide-react'

const PersonasSection = () => {
  const personas = [
    {
      id: 'economico',
      title: 'Servidor Econômico',
      description: 'Foco em economia no dia a dia e benefícios básicos essenciais',
      bgColor: 'bg-aspc-primary/10',
      icon: DollarSign,
      iconColor: 'text-aspc-primary',
      buttonColor: 'bg-aspc-primary hover:bg-aspc-primary/90'
    },
    {
      id: 'familiar',
      title: 'Servidor Familiar',
      description: 'Benefícios voltados para toda a família, incluindo dependentes',
      benefits: [
        'Descontos em farmácias e supermercados',
        'Planos de saúde com cobertura familiar',
        'Educação e cursos para filhos',
        'Lazer e entretenimento em família',
        'Seguros residenciais e veiculares',
        'Programas de férias e viagens'
      ],
      bgColor: 'bg-aspc-secondary/10',
      icon: Users,
      iconColor: 'text-aspc-secondary',
      buttonColor: 'bg-aspc-secondary hover:bg-aspc-secondary/90'
    },
    {
      id: 'premium',
      title: 'Servidor Premium',
      description: 'Benefícios exclusivos e serviços diferenciados de alta qualidade',
      benefits: [
        'Consultoria financeira personalizada',
        'Seguros premium com cobertura ampla',
        'Experiências VIP e eventos exclusivos',
        'Consultoria de investimentos',
        'Seguros com condições especiais',
        'Networking e desenvolvimento executivo'
      ],
      bgColor: 'bg-aspc-primary/20',
      icon: Crown,
      iconColor: 'text-aspc-primary',
      buttonColor: 'bg-aspc-primary hover:bg-aspc-primary/90'
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-aspc-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            Escolha seu Perfil de Benefícios
          </h2>
          <p className="text-xl text-aspc-dark/70 max-w-3xl mx-auto font-raleway">
            Cada servidor tem necessidades únicas. Descubra qual perfil combina mais com você e sua família.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {personas.map((persona) => (
            <Card key={persona.id} className={`${persona.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${persona.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <persona.icon className={`h-8 w-8 ${persona.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-aspc-dark font-raleway">
                  {persona.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-aspc-dark/70 text-sm mt-2 mb-6 font-raleway">
                  {persona.description}
                </p>
                
                {persona.benefits && (
                  <div className="text-left mb-6">
                    <h4 className="font-semibold text-aspc-dark mb-3 font-raleway">Principais benefícios:</h4>
                    <ul className="space-y-2">
                      {persona.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-aspc-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-aspc-dark text-sm font-raleway">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-aspc-secondary mb-1 font-raleway">R$ 5/mês</div>
                    <p className="text-aspc-dark/70 mb-6 font-raleway">
                      Investimento que se paga sozinho
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
                    Escolher Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-aspc-dark/70 mb-6 font-raleway">
            Não tem certeza qual perfil se encaixa melhor com você?
          </p>
          <Button variant="outline" size="lg" className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
            Fazer quiz de perfil
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PersonasSection

