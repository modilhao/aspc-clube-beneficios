import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calculator, TrendingUp, DollarSign, Check } from 'lucide-react'

const EconomySimulator = () => {
  const [selectedServices, setSelectedServices] = useState({})
  const [result, setResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const scrollToAssociation = () => {
    const associationSection = document.getElementById('como-associar')
    if (associationSection) {
      associationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Base de dados dos parceiros reais
  const servicesData = {
    lazer: {
      icon: '🎢',
      title: 'LAZER',
      services: [
        { id: 'cinema', name: 'Cinema (2x/mês)', yearlyEconomy: 288, description: 'Grupocine - R$ 12/ingresso' },
        { id: 'parques', name: 'Parques (4x/ano)', yearlyEconomy: 200, description: 'Hello Park, Hopi Hari, Parque da Mônica' },
        { id: 'viagens', name: 'Viagens (2x/ano)', yearlyEconomy: 360, description: 'Club de Férias, Tour Jundiahy, WL Viagem' },
        { id: 'eventos', name: 'Eventos (4x/ano)', yearlyEconomy: 200, description: 'Alê Algodão Doce - 10% desconto' },
        { id: 'aquario', name: 'Aquário (6x/ano)', yearlyEconomy: 90, description: 'Aquário de São Paulo - 10% desconto' }
      ]
    },
    saude: {
      icon: '🏥',
      title: 'SAÚDE',
      services: [
        { id: 'farmacia', name: 'Farmácia (mensal)', yearlyEconomy: 360, description: 'Farma Ponunduva - 20-40% genéricos' },
        { id: 'consultas', name: 'Consultas (trimestral)', yearlyEconomy: 180, description: 'Cindy Psicologia - 10% desconto' },
        { id: 'checkup', name: 'Check-up odontológico', yearlyEconomy: 200, description: 'Hospital Odontológico - gratuito' },
        { id: 'pilates', name: 'Pilates (mensal)', yearlyEconomy: 300, description: 'Madah Pilates - 5% desconto' }
      ]
    },
    educacao: {
      icon: '🎓',
      title: 'EDUCAÇÃO',
      services: [
        { id: 'idiomas', name: 'Curso de idiomas', yearlyEconomy: 1440, description: 'Fisk - 30% desconto mensalidades' },
        { id: 'graduacao', name: 'Graduação/Pós', yearlyEconomy: 2400, description: 'Unianchieta, EPD - até 40% desconto' }
      ]
    },
    fitness: {
      icon: '🏋️',
      title: 'ATIVIDADES FÍSICAS',
      services: [
        { id: 'academia', name: 'Academia', yearlyEconomy: 960, description: 'Power Live - 40% desconto' },
        { id: 'crossfit', name: 'Crossfit', yearlyEconomy: 540, description: 'Crossfit Cajamar - 15% desconto' },
        { id: 'yoga', name: 'Yoga', yearlyEconomy: 540, description: 'Naioma Yoga - 15% desconto' }
      ]
    },
    compras: {
      icon: '🛒',
      title: 'COMPRAS',
      services: [
        { id: 'farmacia_compras', name: 'Farmácia', yearlyEconomy: 480, description: 'Ultrafarma - 15% similares + 35% genéricos' },
        { id: 'otica', name: 'Ótica', yearlyEconomy: 160, description: 'Ótica Portal - 25% desconto lentes' },
        { id: 'calcados', name: 'Calçados (6x/ano)', yearlyEconomy: 90, description: 'Calçados Sérgio - 10% desconto' }
      ]
    },
    beleza: {
      icon: '💄',
      title: 'BELEZA',
      services: [
        { id: 'estetica', name: 'Estética (6x/ano)', yearlyEconomy: 300, description: 'Ana Beatriz, Luana Sampaio - 15% desconto' },
        { id: 'barbearia', name: 'Barbearia (12x/ano)', yearlyEconomy: 96, description: 'Chiquinho Barbearia - 10% desconto' }
      ]
    },
    automotivo: {
      icon: '🚗',
      title: 'AUTOMOTIVO',
      services: [
        { id: 'lavagem', name: 'Lavagem (12x/ano)', yearlyEconomy: 240, description: 'Marycar, M&D Serviços' },
        { id: 'manutencao', name: 'Manutenção (4x/ano)', yearlyEconomy: 200, description: 'M&D Serviços - diversos descontos' }
      ]
    },
    outros: {
      icon: '🔧',
      title: 'OUTROS',
      services: [
        { id: 'seguros', name: 'Seguros', yearlyEconomy: 350, description: 'Seguralta - 20% residencial, 10% auto' },
        { id: 'informatica', name: 'Informática (4x/ano)', yearlyEconomy: 200, description: 'Microtec - 20% serviços' },
        { id: 'ar_condicionado', name: 'Ar condicionado (2x/ano)', yearlyEconomy: 200, description: 'WF Ar Condicionado - 20% desconto' },
        { id: 'declaracao_ir', name: 'Declaração IR', yearlyEconomy: 20, description: 'DR Consultoria - 10% desconto' }
      ]
    }
  }

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }))
  }

  const calculateEconomy = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      let totalYearlyEconomy = 0
      const detailedEconomy = []

      // Calcular economia baseada nos serviços selecionados
      Object.values(servicesData).forEach(category => {
        category.services.forEach(service => {
          if (selectedServices[service.id]) {
            totalYearlyEconomy += service.yearlyEconomy
            detailedEconomy.push({
              name: service.name,
              yearlyEconomy: service.yearlyEconomy,
              monthlyEconomy: service.yearlyEconomy / 12,
              description: service.description
            })
          }
        })
      })
      
      const associationFee = 182.16 // Taxa anual da associação (R$ 15,18/mês)
      const netYearlyEconomy = totalYearlyEconomy - associationFee
      const monthlyFee = 15.18

      setResult({
        totalYearlyEconomy,
        netYearlyEconomy,
        associationFee,
        monthlyFee,
        roi: totalYearlyEconomy > 0 ? ((netYearlyEconomy / associationFee) * 100) : 0,
        detailedEconomy,
        paybackMonths: totalYearlyEconomy > 0 ? (associationFee / (totalYearlyEconomy / 12)) : 0
      })
      
      setIsCalculating(false)
    }, 1000)
  }

  const handleCalculate = () => {
    const hasSelectedServices = Object.values(selectedServices).some(selected => selected)
    if (hasSelectedServices) {
      calculateEconomy()
      
      // Navegar suavemente para o resultado após o cálculo
      setTimeout(() => {
        const resultElement = document.getElementById('resultado-economia')
        if (resultElement) {
          resultElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 1100)
    }
  }

  const resetSimulator = () => {
    setSelectedServices({})
    setResult(null)
  }

  const getSelectedCount = () => {
    return Object.values(selectedServices).filter(selected => selected).length
  }

  return (
    <section className="py-20 bg-aspc-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            💰 DESCUBRA QUANTO VOCÊ VAI ECONOMIZAR
          </h2>
          <p className="text-lg sm:text-xl text-aspc-dark/70 font-raleway">
            Selecione os serviços que você usa regularmente:
          </p>
        </div>

        <Card className="bg-aspc-white shadow-lg">
          <CardContent className="p-6">
            {!result ? (
              <div className="space-y-8">
                {/* Categorias de Serviços */}
                <div className="grid gap-6">
                  {Object.entries(servicesData).map(([categoryKey, category]) => (
                    <div key={categoryKey} className="space-y-4">
                      <h3 className="text-lg font-bold text-aspc-dark font-raleway flex items-center space-x-2">
                        <span className="text-2xl">{category.icon}</span>
                        <span>{category.title}</span>
                      </h3>
                      <div className="grid gap-3">
                        {category.services.map((service) => (
                          <div 
                            key={service.id} 
                            className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedServices[service.id] 
                                ? 'border-aspc-primary bg-aspc-primary/5' 
                                : 'border-gray-200 hover:border-aspc-primary/50'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                selectedServices[service.id] 
                                  ? 'border-aspc-primary bg-aspc-primary' 
                                  : 'border-gray-300'
                              }`}>
                                {selectedServices[service.id] && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <div>
                                <div className="font-medium text-aspc-dark font-raleway">{service.name}</div>
                                <div className="text-sm text-aspc-dark/60 font-raleway">{service.description}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-aspc-secondary font-raleway">
                                R$ {service.yearlyEconomy.toLocaleString('pt-BR')}/ano
                              </div>
                              <div className="text-sm text-aspc-dark/60 font-raleway">
                                R$ {(service.yearlyEconomy / 12).toFixed(0)}/mês
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botão de Calcular */}
                <div className="text-center">
                  <Button 
                    onClick={handleCalculate}
                    className="bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white py-3 px-8 text-lg font-raleway font-semibold"
                    disabled={getSelectedCount() === 0 || isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculando...
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2 h-5 w-5" />
                        Calcular Economia ({getSelectedCount()} serviços selecionados)
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div id="resultado-economia" className="space-y-6">
                {/* Resultado Principal */}
                <div className="bg-gradient-to-r from-aspc-secondary to-aspc-secondary/90 text-aspc-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-raleway">📊 RESULTADO PERSONALIZADO</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm opacity-90">✅ Economia anual:</div>
                      <div className="text-3xl font-bold">
                        R$ {result.totalYearlyEconomy.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-90">💳 Investimento ASPC:</div>
                      <div className="text-lg">
                        R$ {result.associationFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano (R$ {result.monthlyFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês)
                      </div>
                    </div>
                    <div className="border-t border-white/20 pt-3">
                      <div className="text-sm opacity-90">🎯 SEU LUCRO LÍQUIDO:</div>
                      <div className="text-4xl font-bold text-yellow-300">
                        R$ {result.netYearlyEconomy.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano
                      </div>
                    </div>
                  </div>
                  {result.paybackMonths < 12 && (
                    <div className="mt-4 p-3 bg-white/10 rounded-lg">
                      <p className="text-lg font-semibold">
                        "Você economiza mais em {Math.ceil(result.paybackMonths)} {Math.ceil(result.paybackMonths) === 1 ? 'mês' : 'meses'} do que paga o ano todo!"
                      </p>
                    </div>
                  )}
                </div>

                {/* Detalhes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="h-8 w-8 text-aspc-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-aspc-primary font-raleway">
                        {result.roi.toFixed(0)}%
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">ROI anual</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-8 w-8 text-aspc-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-aspc-secondary font-raleway">
                        R$ {(result.totalYearlyEconomy / 12).toFixed(0)}
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">Economia/mês</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <Calculator className="h-8 w-8 text-aspc-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-aspc-primary font-raleway">
                        {getSelectedCount()}
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">Serviços selecionados</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Breakdown por serviços selecionados */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 font-raleway">Serviços selecionados e suas economias:</h4>
                  <div className="space-y-3">
                    {result.detailedEconomy.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-aspc-light rounded-lg">
                        <div>
                          <div className="font-medium font-raleway">{item.name}</div>
                          <div className="text-sm text-aspc-dark/70 font-raleway">{item.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-aspc-secondary font-raleway">
                            R$ {item.yearlyEconomy.toLocaleString('pt-BR')}/ano
                          </div>
                          <div className="text-sm text-aspc-dark/70 font-raleway">
                            R$ {item.monthlyEconomy.toFixed(0)}/mês
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button onClick={resetSimulator} variant="outline" className="flex-1 border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-aspc-white font-raleway font-semibold">
                    Nova Simulação
                  </Button>
                  <Button 
                    variant="gradient" 
                    className="flex-1 font-raleway font-semibold"
                    onClick={scrollToAssociation}
                  >
                    Quero me Associar
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default EconomySimulator

