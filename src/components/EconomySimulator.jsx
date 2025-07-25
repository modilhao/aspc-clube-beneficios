import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calculator, TrendingUp, DollarSign } from 'lucide-react'

const EconomySimulator = () => {
  const [formData, setFormData] = useState({
    cargo: '',
    salario: '',
    familia: ''
  })
  const [result, setResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Mapeamento de valores para labels
  const cargoLabels = {
    'professor': 'Professor/Educação',
    'saude': 'Saúde/Enfermagem',
    'seguranca': 'Segurança Pública',
    'administrativo': 'Administrativo'
  }

  const salarioLabels = {
    'ate_3000': 'Até R$ 3.000',
    '3001_6500': 'R$ 3.001 a R$ 6.500',
    'acima_6500': 'Acima de R$ 6.500'
  }

  const familiaLabels = {
    'solteiro': 'Solteiro(a)',
    'casal': 'Casal sem filhos',
    'familia_pequena': 'Família com 1-2 filhos',
    'familia_grande': 'Família com 3+ filhos'
  }

  const benefitsByProfile = {
    'professor': {
      farmacia: 0.25,
      supermercado: 0.15,
      educacao: 0.30,
      saude: 0.20,
      transporte: 0.10,
      papelaria: 0.20
    },
    'saude': {
      farmacia: 0.30,
      supermercado: 0.15,
      saude: 0.25,
      academia: 0.20,
      plano_saude: 0.15
    },
    'seguranca': {
      farmacia: 0.25,
      supermercado: 0.15,
      seguros: 0.20,
      academia: 0.25,
      combustivel: 0.10
    },
    'administrativo': {
      farmacia: 0.20,
      supermercado: 0.15,
      educacao: 0.25,
      investimentos: 0.10,
      seguros: 0.15
    }
  }

  const monthlyExpensesByProfile = {
    'professor': { farmacia: 200, supermercado: 800, educacao: 300, saude: 150, transporte: 200, papelaria: 100 },
    'saude': { farmacia: 250, supermercado: 900, saude: 200, academia: 150, plano_saude: 300 },
    'seguranca': { farmacia: 200, supermercado: 850, seguros: 200, academia: 180, combustivel: 400 },
    'administrativo': { farmacia: 180, supermercado: 750, educacao: 400, investimentos: 500, seguros: 250 }
  }

  const calculateEconomy = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const profile = formData.cargo
      const benefits = benefitsByProfile[profile] || benefitsByProfile['administrativo']
      const expenses = monthlyExpensesByProfile[profile] || monthlyExpensesByProfile['administrativo']
      
      let totalMonthlyEconomy = 0
      const detailedEconomy = []

      Object.keys(benefits).forEach(category => {
        const monthlyExpense = expenses[category] || 0
        const discount = benefits[category]
        const monthlyEconomy = monthlyExpense * discount
        totalMonthlyEconomy += monthlyEconomy
        
        if (monthlyEconomy > 0) {
          detailedEconomy.push({
            category: category.replace('_', ' '),
            monthlyExpense,
            discount: discount * 100,
            monthlyEconomy,
            yearlyEconomy: monthlyEconomy * 12
          })
        }
      })

      // Ajuste baseado na composição familiar
      const familyMultiplier = {
        'solteiro': 1,
        'casal': 1.3,
        'familia_pequena': 1.6,
        'familia_grande': 2
      }

      const multiplier = familyMultiplier[formData.familia] || 1
      totalMonthlyEconomy *= multiplier
      
      const yearlyEconomy = totalMonthlyEconomy * 12
      const associationFee = 60 // Taxa anual da associação
      const netYearlyEconomy = yearlyEconomy - associationFee

      setResult({
        monthlyEconomy: totalMonthlyEconomy,
        yearlyEconomy,
        netYearlyEconomy,
        associationFee,
        roi: ((netYearlyEconomy / associationFee) * 100),
        detailedEconomy: detailedEconomy.map(item => ({
          ...item,
          monthlyEconomy: item.monthlyEconomy * multiplier,
          yearlyEconomy: item.yearlyEconomy * multiplier
        }))
      })
      
      setIsCalculating(false)
    }, 1500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.cargo && formData.salario && formData.familia) {
      calculateEconomy()
    }
  }

  const resetSimulator = () => {
    setFormData({ cargo: '', salario: '', familia: '' })
    setResult(null)
  }

  return (
    <section className="py-20 bg-aspc-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aspc-dark mb-4 font-raleway">
            Simulador de Economia
          </h2>
          <p className="text-lg sm:text-xl text-aspc-dark/70 font-raleway">
            Descubra quanto você pode economizar sendo associado da ASPC
          </p>
        </div>

        <Card className="bg-aspc-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-raleway">
              <Calculator className="h-6 w-6 text-aspc-primary" />
              <span>Calcule sua economia personalizada</span>
            </CardTitle>
            <CardDescription className="font-raleway">
              Preencha os dados abaixo para ver uma estimativa dos seus benefícios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cargo" className="font-raleway">Cargo/Função</Label>
                    <Select value={formData.cargo} onValueChange={(value) => setFormData({...formData, cargo: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu cargo" value={cargoLabels[formData.cargo]} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professor">Professor/Educação</SelectItem>
                        <SelectItem value="saude">Saúde/Enfermagem</SelectItem>
                        <SelectItem value="seguranca">Segurança Pública</SelectItem>
                        <SelectItem value="administrativo">Administrativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salario" className="font-raleway">Faixa Salarial</Label>
                    <Select value={formData.salario} onValueChange={(value) => setFormData({...formData, salario: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione sua faixa" value={salarioLabels[formData.salario]} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ate_3000">Até R$ 3.000</SelectItem>
                        <SelectItem value="3001_6500">R$ 3.001 a R$ 6.500</SelectItem>
                        <SelectItem value="acima_6500">Acima de R$ 6.500</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familia" className="font-raleway">Composição Familiar</Label>
                    <Select value={formData.familia} onValueChange={(value) => setFormData({...formData, familia: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" value={familiaLabels[formData.familia]} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                        <SelectItem value="casal">Casal sem filhos</SelectItem>
                        <SelectItem value="familia_pequena">Família com 1-2 filhos</SelectItem>
                        <SelectItem value="familia_grande">Família com 3+ filhos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-aspc-secondary hover:bg-aspc-secondary/90 text-aspc-white py-3 text-lg font-raleway font-semibold"
                  disabled={!formData.cargo || !formData.salario || !formData.familia || isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Calculator className="mr-2 h-5 w-5" />
                      Calcular Economia
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                {/* Resultado Principal */}
                <div className="bg-gradient-to-r from-aspc-secondary to-aspc-secondary/90 text-aspc-white rounded-lg p-4 sm:p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-raleway">Sua Economia Anual</h3>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-raleway">
                    R$ {result.netYearlyEconomy.toFixed(2).replace('.', ',')}
                  </div>
                  <p className="text-aspc-white/80 font-raleway text-sm sm:text-base">
                    Economia líquida (já descontada a taxa de associação)
                  </p>
                </div>

                {/* Detalhes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-aspc-secondary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-aspc-secondary font-raleway">
                        R$ {result.monthlyEconomy.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">Por mês</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-aspc-primary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-aspc-primary font-raleway">
                        {result.roi.toFixed(0)}%
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">ROI anual</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-aspc-primary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-aspc-primary font-raleway">
                        R$ {result.associationFee}
                      </div>
                      <div className="text-sm text-aspc-dark/70 font-raleway">Taxa anual</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Breakdown por categoria */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-4 font-raleway">Economia por categoria:</h4>
                  <div className="space-y-3">
                    {result.detailedEconomy.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-aspc-light rounded-lg space-y-2 sm:space-y-0">
                        <div>
                          <span className="font-medium capitalize font-raleway text-sm sm:text-base">{item.category}</span>
                          <span className="text-xs sm:text-sm text-aspc-dark/70 ml-0 sm:ml-2 font-raleway block sm:inline">({item.discount}% off)</span>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="font-semibold text-aspc-secondary font-raleway text-sm sm:text-base">
                            R$ {item.yearlyEconomy.toFixed(2).replace('.', ',')}/ano
                          </div>
                          <div className="text-xs sm:text-sm text-aspc-dark/70 font-raleway">
                            R$ {item.monthlyEconomy.toFixed(2).replace('.', ',')}/mês
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
                  <Button className="flex-1 bg-aspc-primary hover:bg-aspc-primary/90 text-aspc-white font-raleway font-semibold">
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

