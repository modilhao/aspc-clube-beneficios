import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { FileText, MessageCircle, Mail, ArrowRight } from 'lucide-react'

const AssociationSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511915175471&text&type=phone_number&app_absent=0"
  const email = "contato@aspcajamar.org.br"
  const fichaLink = "https://drive.google.com/file/d/1tJJH62nD0bAHkr6G8br_PIgFTs4sapli/view?usp=sharing"

  return (
    <section id="como-associar" className="py-20 bg-gradient-to-br from-aspc-primary/5 to-aspc-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aspc-dark mb-4 font-raleway">
            🤝 Como se Associar
          </h2>
          <p className="text-lg sm:text-xl text-aspc-dark/70 font-raleway max-w-2xl mx-auto">
            Faça parte da nossa associação e comece a economizar hoje mesmo! O processo é simples e rápido.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Passo 1 */}
          <Card className="bg-aspc-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-aspc-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-aspc-primary" />
              </div>
              <h3 className="text-xl font-bold text-aspc-dark mb-3 font-raleway">
                1. Preencha a Ficha
              </h3>
              <p className="text-aspc-dark/70 font-raleway">
                Acesse o link e preencha a ficha de inscrição com seus dados pessoais
              </p>
            </CardContent>
          </Card>

          {/* Passo 2 */}
          <Card className="bg-aspc-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-aspc-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-aspc-secondary" />
              </div>
              <h3 className="text-xl font-bold text-aspc-dark mb-3 font-raleway">
                2. Envie pelo WhatsApp
              </h3>
              <p className="text-aspc-dark/70 font-raleway">
                Envie a ficha preenchida pelo WhatsApp (11) 91517-5471
              </p>
            </CardContent>
          </Card>

          {/* Passo 3 */}
          <Card className="bg-aspc-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-aspc-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-aspc-primary" />
              </div>
              <h3 className="text-xl font-bold text-aspc-dark mb-3 font-raleway">
                3. Ou envie por E-mail
              </h3>
              <p className="text-aspc-dark/70 font-raleway">
                Alternativamente, envie para contato@aspcajamar.org.br
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Botões de Ação */}
        <div className="bg-aspc-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-aspc-dark mb-2 font-raleway">
              Pronto para começar a economizar?
            </h3>
            <p className="text-aspc-dark/70 font-raleway">
              Escolha a forma mais conveniente para você se associar
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient" 
              className="font-raleway font-semibold text-lg px-8 py-3"
              onClick={() => window.open(fichaLink, '_blank')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Preencher Ficha Online
            </Button>
            
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-raleway font-semibold text-lg px-8 py-3"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              className="border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-white font-raleway font-semibold text-lg px-8 py-3"
              onClick={() => window.open(`mailto:${email}`, '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar E-mail
            </Button>
          </div>

          <div className="mt-6 p-4 bg-aspc-light/50 rounded-lg">
            <div className="flex items-center justify-center text-aspc-dark/70 font-raleway">
              <ArrowRight className="mr-2 h-4 w-4" />
              <span className="text-sm">
                <strong>WhatsApp:</strong> (11) 91517-5471 | 
                <strong className="ml-2">E-mail:</strong> contato@aspcajamar.org.br
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AssociationSection