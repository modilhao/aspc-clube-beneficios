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
      id: 'familia',
      question: 'Qual é a composição da sua família?',
      options: [
        { value: 'solteiro', label: 'Solteiro(a) sem dependentes', economy: 800 },
        { value: 'casal', label: 'Casal sem filhos', economy: 1200 },
        { value: 'familia_pequena', label: 'Família com 1-2 filhos', economy: 1800 },
        { value: 'familia_grande', label: 'Família com 3+ filhos', economy: 2500 }
      ]
    },
    {
      id: 'idade',
      question: 'Qual sua faixa etária?',
      options: [
        { value: '20_30', label: '20 a 30 anos', economy: 600 },
        { value: '31_40', label: '31 a 40 anos', economy: 900 },
        { value: '41_50', label: '41 a 50 anos', economy: 1200 },
        { value: '51_mais', label: '51 anos ou mais', economy: 800 }
      ]
    },
    {
      id: 'saude_habitos',
      question: 'Com que frequência você usa farmácias e serviços de saúde?',
      options: [
        { value: 'raramente', label: 'Raramente (1-2x por ano)', economy: 200 },
        { value: 'ocasionalmente', label: 'Ocasionalmente (3-6x por ano)', economy: 400 },
        { value: 'regularmente', label: 'Regularmente (mensalmente)', economy: 600 },
        { value: 'frequentemente', label: 'Frequentemente (várias vezes por mês)', economy: 900 }
      ]
    },
    {
      id: 'lazer_habitos',
      question: 'Quanto você gasta com lazer e entretenimento por mês?',
      options: [
        { value: 'pouco', label: 'Até R$ 200/mês', economy: 300 },
        { value: 'moderado', label: 'R$ 200 a R$ 500/mês', economy: 600 },
        { value: 'alto', label: 'R$ 500 a R$ 1000/mês', economy: 1000 },
        { value: 'muito_alto', label: 'Mais de R$ 1000/mês', economy: 1500 }
      ]
    },
    {
      id: 'educacao_interesse',
      question: 'Você tem interesse em cursos, graduação ou pós-graduação?',
      options: [
        { value: 'nenhum', label: 'Não tenho interesse no momento', economy: 0 },
        { value: 'cursos_livres', label: 'Cursos livres e idiomas', economy: 800 },
        { value: 'graduacao', label: 'Graduação ou segunda graduação', economy: 1500 },
        { value: 'pos_graduacao', label: 'Pós-graduação ou mestrado', economy: 2000 }
      ]
    },
    {
      id: 'atividade_fisica',
      question: 'Você pratica atividades físicas regularmente?',
      options: [
        { value: 'nao_pratica', label: 'Não pratico atividades físicas', economy: 0 },
        { value: 'casa_parque', label: 'Pratico em casa ou parques públicos', economy: 200 },
        { value: 'academia_eventual', label: 'Academia ou estúdio eventualmente', economy: 500 },
        { value: 'academia_regular', label: 'Academia, pilates ou crossfit regularmente', economy: 800 }
      ]
    },
    {
      id: 'consumo_geral',
      question: 'Como você descreveria seus hábitos de consumo?',
      options: [
        { value: 'economico', label: 'Muito econômico, compro apenas o essencial', economy: 400 },
        { value: 'moderado', label: 'Moderado, compro o necessário com alguns extras', economy: 700 },
        { value: 'confortavel', label: 'Confortável, gosto de qualidade e conveniência', economy: 1000 },
        { value: 'premium', label: 'Premium, valorizo experiências e produtos de qualidade', economy: 1300 }
      ]
    }
  ]

  const getProfileByEconomy = (totalEconomy) => {
    if (totalEconomy <= 3000) {
      return {
        title: 'Perfil Econômico',
        subtitle: 'Economia focada no essencial',
        description: 'Baseado no seu perfil, você pode economizar focando em benefícios essenciais do dia a dia.',
        benefits: [
          'Descontos em farmácias e supermercados',
          'Economia em serviços básicos de saúde',
          'Parcerias para necessidades cotidianas',
          'Benefícios em transporte e combustível'
        ],
        color: 'primary',
        bgColor: 'bg-aspc-primary/10',
        textColor: 'text-aspc-primary'
      }
    } else if (totalEconomy <= 6000) {
      return {
        title: 'Perfil Equilibrado',
        subtitle: 'Economia com qualidade de vida',
        description: 'Seu perfil indica um bom potencial de economia balanceando necessidades e qualidade de vida.',
        benefits: [
          'Descontos significativos em saúde e educação',
          'Benefícios em lazer e entretenimento familiar',
          'Parcerias em atividades físicas e bem-estar',
          'Economia em serviços especializados'
        ],
        color: 'secondary',
        bgColor: 'bg-aspc-secondary/10',
        textColor: 'text-aspc-secondary'
      }
    } else {
      return {
        title: 'Perfil Premium',
        subtitle: 'Máxima economia e benefícios',
        description: 'Seu perfil de consumo permite aproveitar ao máximo todos os benefícios da ASPC!',
        benefits: [
          'Economia substancial em educação e cursos',
          'Benefícios premium em saúde e bem-estar',
          'Descontos exclusivos em lazer e viagens',
          'Acesso a parcerias especiais e experiências VIP'
        ],
        color: 'primary',
        bgColor: 'bg-aspc-primary/20',
        textColor: 'text-aspc-primary'
      }
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
    let totalEconomy = 0
    const economyBreakdown = []

    questions.forEach(question => {
      const answer = finalAnswers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      if (option && option.economy > 0) {
        totalEconomy += option.economy
        economyBreakdown.push({
          category: question.question,
          choice: option.label,
          economy: option.economy
        })
      }
    })

    const associationFee = 182.16 // R$ 15,18/mês * 12 meses
    const netEconomy = totalEconomy - associationFee
    const roi = ((netEconomy / associationFee) * 100)
    const profile = getProfileByEconomy(totalEconomy)

    setResult({
      totalEconomy,
      netEconomy,
      associationFee,
      roi,
      economyBreakdown,
      profile
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
              {/* Resumo da Economia */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 font-raleway">
                    R$ {result.totalEconomy.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-sm text-green-700 font-raleway">Economia Anual Estimada</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 font-raleway">
                    R$ {result.netEconomy.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-sm text-blue-700 font-raleway">Lucro Líquido Anual</div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 font-raleway">
                    {result.roi.toFixed(0)}%
                  </div>
                  <div className="text-sm text-purple-700 font-raleway">Retorno do Investimento</div>
                </div>
              </div>

              {/* Resultado */}
              <div className={`${result.profile.bgColor} rounded-lg p-6 text-center`}>
                <h3 className={`text-2xl font-bold ${result.profile.textColor} mb-2 font-raleway`}>
                  {result.profile.title}
                </h3>
                <p className={`text-lg ${result.profile.textColor} mb-4 font-raleway`}>
                  {result.profile.subtitle}
                </p>
                <p className="text-aspc-dark/70 font-raleway">
                  {result.profile.description}
                </p>
              </div>

              {/* Benefícios */}
              <div>
                <h4 className="text-lg font-semibold mb-4 font-raleway">Benefícios do seu perfil:</h4>
                <div className="space-y-3">
                  {result.profile.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${result.profile.textColor}`} />
                      <span className="text-aspc-dark font-raleway">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detalhamento da Economia */}
              <div className="bg-aspc-light rounded-lg p-4">
                <h4 className="text-sm font-medium text-aspc-dark/70 mb-3 font-raleway">Detalhamento da economia:</h4>
                <div className="space-y-2">
                  {result.economyBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-aspc-dark/70 font-raleway">{item.choice}</span>
                      <span className="font-medium text-green-600 font-raleway">
                        +R$ {item.economy.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-aspc-dark/70 font-raleway">Taxa Associativa Anual</span>
                      <span className="font-medium text-red-600 font-raleway">
                        -R$ {result.associationFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
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

