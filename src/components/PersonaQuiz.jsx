import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react'

const PersonaQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const questions = [
    {
      id: 'cargo',
      question: 'Qual é sua área de atuação?',
      options: [
        { value: 'educacao', label: 'Educação (Professor, Monitor, Diretor)', points: { essencial: 3, estavel: 2, lider: 1 } },
        { value: 'saude', label: 'Saúde (Enfermeiro, Médico, Agente)', points: { essencial: 2, estavel: 3, lider: 2 } },
        { value: 'seguranca', label: 'Segurança (Guarda, Defesa Civil)', points: { essencial: 2, estavel: 2, lider: 2 } },
        { value: 'administrativo', label: 'Administrativo (Analista, Fiscal)', points: { essencial: 1, estavel: 2, lider: 3 } }
      ]
    },
    {
      id: 'tempo_servico',
      question: 'Há quanto tempo você trabalha no serviço público?',
      options: [
        { value: 'menos_2', label: 'Menos de 2 anos', points: { essencial: 3, estavel: 1, lider: 0 } },
        { value: '2_5', label: '2 a 5 anos', points: { essencial: 2, estavel: 2, lider: 1 } },
        { value: '5_10', label: '5 a 10 anos', points: { essencial: 1, estavel: 3, lider: 2 } },
        { value: 'mais_10', label: 'Mais de 10 anos', points: { essencial: 0, estavel: 2, lider: 3 } }
      ]
    },
    {
      id: 'salario',
      question: 'Qual sua faixa salarial atual?',
      options: [
        { value: 'ate_3000', label: 'Até R$ 3.000', points: { essencial: 3, estavel: 1, lider: 0 } },
        { value: '3001_6500', label: 'R$ 3.001 a R$ 6.500', points: { essencial: 1, estavel: 3, lider: 1 } },
        { value: 'acima_6500', label: 'Acima de R$ 6.500', points: { essencial: 0, estavel: 1, lider: 3 } }
      ]
    },
    {
      id: 'prioridade',
      question: 'Qual é sua principal prioridade financeira?',
      options: [
        { value: 'economia_diaria', label: 'Economizar no dia a dia', points: { essencial: 3, estavel: 1, lider: 0 } },
        { value: 'planejamento', label: 'Planejamento familiar e educação', points: { essencial: 1, estavel: 3, lider: 1 } },
        { value: 'investimentos', label: 'Investimentos e crescimento patrimonial', points: { essencial: 0, estavel: 1, lider: 3 } },
        { value: 'seguranca', label: 'Segurança e estabilidade', points: { essencial: 2, estavel: 2, lider: 2 } }
      ]
    },
    {
      id: 'beneficios',
      question: 'Que tipo de benefício mais te interessa?',
      options: [
        { value: 'descontos_basicos', label: 'Descontos em farmácias e supermercados', points: { essencial: 3, estavel: 2, lider: 0 } },
        { value: 'saude_educacao', label: 'Planos de saúde e cursos', points: { essencial: 1, estavel: 3, lider: 1 } },
        { value: 'experiencias', label: 'Experiências exclusivas e networking', points: { essencial: 0, estavel: 1, lider: 3 } },
        { value: 'consultoria', label: 'Consultoria financeira e investimentos', points: { essencial: 0, estavel: 2, lider: 3 } }
      ]
    }
  ]

  const personas = {
    essencial: {
      title: 'Servidor Econômico',
      subtitle: 'Foco em economia essencial',
      description: 'Você busca economia no dia a dia e benefícios básicos essenciais. Nossos descontos fundamentais são perfeitos para você!',
      benefits: [
        'Descontos de até 25% em farmácias',
        'Economia de até 15% em supermercados',
        'Cursos de qualificação com desconto',
        'Parcerias com papelarias e livrarias'
      ],
      color: 'primary',
      bgColor: 'bg-aspc-primary/10',
      textColor: 'text-aspc-primary'
    },
    estavel: {
      title: 'Servidor Familiar',
      subtitle: 'Planejamento familiar e crescimento',
      description: 'Você tem estabilidade na carreira e foca no planejamento familiar. Nossos benefícios intermediários atendem suas necessidades!',
      benefits: [
        'Planos de saúde com desconto especial',
        'Educação continuada e pós-graduação',
        'Lazer em família e viagens',
        'Consultoria financeira gratuita'
      ],
      color: 'secondary',
      bgColor: 'bg-aspc-secondary/10',
      textColor: 'text-aspc-secondary'
    },
    lider: {
      title: 'Servidor Premium',
      subtitle: 'Benefícios premium e exclusivos',
      description: 'Você está em posição de liderança e busca benefícios diferenciados. Nossos serviços premium são ideais para você!',
      benefits: [
        'Experiências VIP e eventos exclusivos',
        'Consultoria de investimentos personalizada',
        'Seguros com condições especiais',
        'Networking e desenvolvimento executivo'
      ],
      color: 'primary',
      bgColor: 'bg-aspc-primary/20',
      textColor: 'text-aspc-primary'
    }
  }

  const handleAnswer = (optionValue) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: optionValue }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers) => {
    const scores = { essencial: 0, estavel: 0, lider: 0 }

    questions.forEach(question => {
      const answer = finalAnswers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      if (option) {
        Object.keys(option.points).forEach(persona => {
          scores[persona] += option.points[persona]
        })
      }
    })

    const winnerPersona = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    )

    setResult({
      persona: winnerPersona,
      scores,
      details: personas[winnerPersona]
    })
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!isVisible) {
    return (
      <div className="text-center py-8">
        <Button 
          onClick={() => setIsVisible(true)}
          variant="outline" 
          size="lg" 
          className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold"
        >
          Descobrir meu perfil
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-aspc-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-raleway">Quiz de Perfil ASPC</CardTitle>
          <CardDescription className="text-center font-raleway">
            {result ? 'Seu resultado:' : `Pergunta ${currentQuestion + 1} de ${questions.length}`}
          </CardDescription>
          {!result && (
            <Progress value={progress} className="w-full mt-4" />
          )}
        </CardHeader>
        <CardContent>
          {!result ? (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center font-raleway">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-4 hover:bg-aspc-primary/10 hover:border-aspc-primary/30 font-raleway"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <div>
                      <div className="font-medium">{option.label}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Resultado */}
              <div className={`${result.details.bgColor} rounded-lg p-6 text-center`}>
                <h3 className={`text-2xl font-bold ${result.details.textColor} mb-2 font-raleway`}>
                  {result.details.title}
                </h3>
                <p className={`text-lg ${result.details.textColor} mb-4 font-raleway`}>
                  {result.details.subtitle}
                </p>
                <p className="text-aspc-dark/70 font-raleway">
                  {result.details.description}
                </p>
              </div>

              {/* Benefícios */}
              <div>
                <h4 className="text-lg font-semibold mb-4 font-raleway">Benefícios recomendados para você:</h4>
                <div className="space-y-3">
                  {result.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${result.details.textColor}`} />
                      <span className="text-aspc-dark font-raleway">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pontuações */}
              <div className="bg-aspc-light rounded-lg p-4">
                <h4 className="text-sm font-medium text-aspc-dark/70 mb-3 font-raleway">Suas pontuações:</h4>
                <div className="space-y-2">
                  {Object.entries(result.scores).map(([persona, score]) => (
                    <div key={persona} className="flex justify-between items-center">
                      <span className="text-sm capitalize font-raleway">{personas[persona].title}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-aspc-white rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${persona === result.persona ? 'bg-aspc-primary' : 'bg-aspc-dark/30'}`}
                            style={{ width: `${(score / 15) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium font-raleway">{score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ações */}
              <div className="flex space-x-4">
                <Button onClick={resetQuiz} variant="outline" className="flex-1 border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Refazer Quiz
                </Button>
                <Button className={`flex-1 bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white font-raleway font-semibold`}>
                  Ver Benefícios Completos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default PersonaQuiz

