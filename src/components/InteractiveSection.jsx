import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Shield, Heart, GraduationCap, Car, Scissors, Dumbbell, ShoppingBag, MoreHorizontal } from 'lucide-react'

const InteractiveSection = ({ onNavigateToPartners }) => {
  const categories = [
    {
      icon: Heart,
      title: 'Saúde',
      description: 'Farmácias, clínicas e laboratórios',
      partners: 8,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: ShoppingBag,
      title: 'Compras',
      description: 'Supermercados e lojas online',
      partners: 6,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Cursos e capacitação profissional',
      partners: 5,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Dumbbell,
      title: 'Atividades Físicas',
      description: 'Academias e esportes',
      partners: 4,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Car,
      title: 'Automotivo',
      description: 'Seguros e manutenção',
      partners: 3,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Scissors,
      title: 'Beleza',
      description: 'Salões e estética',
      partners: 4,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Shield,
      title: 'Lazer',
      description: 'Entretenimento e viagens',
      partners: 3,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: MoreHorizontal,
      title: 'Outros',
      description: 'Diversos serviços',
      partners: 2,
      color: 'text-gray-500',
      bgColor: 'bg-gray-50'
    }
  ]

  return (
    <section className="py-20 bg-aspc-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            Nossos Parceiros por Categoria
          </h2>
          <p className="text-xl text-aspc-dark/70 max-w-3xl mx-auto font-raleway">
            Mais de 35 parceiros em 8 categorias diferentes para atender todas as suas necessidades
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className={`${category.bgColor} border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">
                  {category.title}
                </h3>
                <p className="text-aspc-dark/70 text-sm mb-3 font-raleway">
                  {category.description}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${category.color} ${category.bgColor} border`}>
                  {category.partners} parceiros
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-aspc-primary/5 border-aspc-primary/20 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-aspc-primary mb-2 font-raleway">35+</div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Parceiros Ativos</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Rede em constante expansão com novos parceiros mensalmente
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-secondary/5 border-aspc-secondary/20 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-aspc-secondary mb-2 font-raleway">8</div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Categorias</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Cobertura completa para todas as áreas da sua vida
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aspc-primary/10 border-aspc-primary/30 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-aspc-primary mb-2 font-raleway">R$ 2.500+</div>
              <h3 className="text-lg font-semibold text-aspc-dark mb-2 font-raleway">Economia Média</h3>
              <p className="text-aspc-dark/70 text-sm font-raleway">
                Economia anual média dos nossos associados
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-aspc-primary/10 to-aspc-secondary/10 rounded-lg border border-aspc-primary/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-aspc-dark mb-4 font-raleway">
              Explore Todos os Benefícios
            </h3>
            <p className="text-aspc-dark/70 mb-6 font-raleway">
              Conheça em detalhes todos os nossos parceiros e os descontos exclusivos disponíveis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="gradient" 
                className="font-raleway font-semibold"
                onClick={onNavigateToPartners}
              >
                Ver Catálogo Completo
              </Button>
              <Button size="lg" variant="outline" className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
                Baixar Lista de Parceiros
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveSection

