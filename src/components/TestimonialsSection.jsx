import { Card, CardContent } from '@/components/ui/card.jsx'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Professora PEB II',
      avatar: '👩‍🏫',
      content: 'A ASPC tem sido fundamental para minha família. Com os descontos em farmácias e supermercados, consegui economizar mais de R$ 150 por mês. Recomendo para todos os colegas!',
      savings: 'R$ 1.800/ano',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Enfermeiro',
      avatar: '👨‍⚕️',
      content: 'Os benefícios de saúde são excelentes. Consegui um plano odontológico com 40% de desconto para toda família. O atendimento da associação é sempre muito atencioso.',
      savings: 'R$ 2.200/ano',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Coordenadora Pedagógica',
      avatar: '👩‍💼',
      content: 'Além dos descontos, os workshops de educação financeira me ajudaram muito a organizar minhas finanças. A ASPC realmente se preocupa com o bem-estar dos associados.',
      savings: 'R$ 2.500/ano',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-aspc-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            O que nossos associados dizem
          </h2>
          <p className="text-xl text-aspc-dark/70 max-w-3xl mx-auto font-raleway">
            Histórias reais de servidores que transformaram suas vidas com os benefícios da ASPC
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-aspc-primary/20 hover:shadow-lg transition-shadow duration-300 bg-aspc-white">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-aspc-primary opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-aspc-secondary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-aspc-dark/80 mb-6 leading-relaxed font-raleway">
                  "{testimonial.content}"
                </p>

                {/* Savings Highlight */}
                <div className="bg-aspc-secondary/10 border border-aspc-secondary/30 rounded-lg p-3 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-aspc-secondary font-medium font-raleway">Economia anual</div>
                    <div className="text-2xl font-bold text-aspc-secondary font-raleway">{testimonial.savings}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-aspc-dark font-raleway">{testimonial.name}</div>
                    <div className="text-sm text-aspc-dark/60 font-raleway">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-aspc-dark/70 mb-4 font-raleway">
            Junte-se a centenas de servidores que já estão economizando
          </p>
          <div className="text-3xl font-bold text-aspc-secondary mb-6 font-raleway">
            Mais de R$ 432.000 economizados pelos nossos associados
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

