
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Wrench, Trophy, Clock, Shield, Zap, Target, DollarSign, BookOpen, Video, MessageCircle, Award } from "lucide-react";

const LandingPage = () => {
  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary-500 text-white px-4 py-2 text-sm font-semibold animate-pulse-slow">
              🔥 COMUNIDADE EXCLUSIVA - APENAS PARA MECÂNICOS PROFISSIONAIS
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
              SAIA DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">AMADORISMO</span> E VIRE UM MECÂNICO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">PROFISSIONAL</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              A única comunidade do Brasil que ensina mecânicos de moto a ganhar R$ 5.000+ por mês trabalhando com o que ama
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button 
                onClick={scrollToOffers}
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                QUERO MUDAR MINHA VIDA AGORA 🚀
              </Button>
              
              <div className="flex items-center gap-2 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white">+847 mecânicos transformados</span>
              </div>
            </div>

            {/* Video Testemunho */}
            <div className="mt-12 bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Video className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">▶️ Veja como João transformou sua oficina em 90 dias</p>
                  <p className="text-gray-400 text-sm">De R$ 1.200/mês para R$ 6.500/mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Você Está <span className="text-red-400">PERDENDO DINHEIRO</span> Todo Dia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cobrando Muito Barato",
                description: "Você aceita qualquer preço porque não sabe o real valor do seu trabalho"
              },
              {
                title: "Perdendo Clientes",
                description: "Não sabe como fidelizar e fazer o cliente voltar sempre"
              },
              {
                title: "Trabalhando Demais",
                description: "12 horas por dia e ganhando menos que um funcionário de loja"
              },
              {
                title: "Sem Conhecimento Técnico",
                description: "Fica na tentativa e erro, perdendo tempo e peças"
              },
              {
                title: "Concorrência Desleal",
                description: "Outros mecânicos levam seus clientes porque sabem mais"
              },
              {
                title: "Sem Perspectiva",
                description: "Não vê um futuro melhor na profissão que escolheu"
              }
            ].map((problem, index) => (
              <Card key={index} className="bg-red-900/20 border-red-500/30 hover:border-red-400 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-red-400 mb-3">{problem.title}</h3>
                  <p className="text-gray-300">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Agora Imagine Se Você <span className="text-green-400">SOUBESSE</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                "Como cobrar R$ 150 por uma revisão que antes cobrava R$ 50",
                "As técnicas que fazem o cliente te procurar, não o contrário",
                "Como diagnosticar qualquer problema em menos de 10 minutos",
                "Os segredos dos mecânicos que faturam R$ 15.000+ por mês",
                "Como ter uma agenda sempre lotada de clientes",
                "As ferramentas que todo profissional deveria ter"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-green-900/20 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Resultado Garantido:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-400" />
                  <span className="text-white">Aumento de 200-400% na renda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  <span className="text-white">Trabalhar menos horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-white">Confiança total nos diagnósticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-green-400" />
                  <span className="text-white">Reconhecimento profissional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Mais de <span className="text-primary-400">847 Mecânicos</span> Já Transformaram Suas Vidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">847+</div>
              <div className="text-gray-300">Mecânicos Ativos</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">R$ 5.200</div>
              <div className="text-gray-300">Renda Média Mensal</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">350%</div>
              <div className="text-gray-300">Aumento Médio</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            O Que Você Vai <span className="text-primary-400">RECEBER</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-primary-400" />,
                title: "Biblioteca Técnica Completa",
                description: "Mais de 200 manuais e esquemas elétricos das principais marcas"
              },
              {
                icon: <Video className="w-8 h-8 text-primary-400" />,
                title: "Videoaulas Exclusivas",
                description: "Step-by-step de reparos complexos que poucos dominam"
              },
              {
                icon: <Users className="w-8 h-8 text-primary-400" />,
                title: "Grupo VIP no WhatsApp",
                description: "Acesso direto aos melhores mecânicos do Brasil"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-primary-400" />,
                title: "Suporte Técnico 24/7",
                description: "Tire dúvidas a qualquer hora, tenha respostas em minutos"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-primary-400" />,
                title: "Tabela de Preços Atualizada",
                description: "Saiba exatamente quanto cobrar por cada serviço"
              },
              {
                icon: <Award className="w-8 h-8 text-primary-400" />,
                title: "Certificado de Especialista",
                description: "Comprove sua qualificação para os clientes"
              },
              {
                icon: <Wrench className="w-8 h-8 text-primary-400" />,
                title: "Kit de Ferramentas Especiais",
                description: "Lista completa das ferramentas profissionais"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary-400" />,
                title: "Garantia de 7 Dias",
                description: "Não gostou? Devolvemos 100% do seu dinheiro"
              },
              {
                icon: <Zap className="w-8 h-8 text-primary-400" />,
                title: "Atualizações Mensais",
                description: "Sempre com as novidades e técnicas mais recentes"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Veja o Que Dizem os <span className="text-primary-400">MECÂNICOS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Ex-funcionário, hoje dono de oficina",
                before: "R$ 1.400/mês",
                after: "R$ 7.200/mês",
                content: "Em 4 meses saí do emprego e abri minha própria oficina. Hoje tenho 3 funcionários e agenda lotada!"
              },
              {
                name: "João Santos",
                role: "Mecânico especialista em injeção",
                before: "R$ 2.100/mês",
                after: "R$ 8.500/mês",
                content: "Aprendi a trabalhar só com serviços de alto valor. Agora cobro R$ 300 por um diagnóstico de injeção."
              },
              {
                name: "Pedro Oliveira",
                role: "Mecânico há 15 anos",
                before: "R$ 1.800/mês",
                after: "R$ 6.800/mês",
                content: "Depois de 15 anos finalmente descobri como ser valorizado. Minha vida mudou completamente!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-primary-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-red-400 font-bold">Antes: {testimonial.before}</span>
                      <span className="text-green-400 font-bold">Depois: {testimonial.after}</span>
                    </div>
                    <div className="h-1 bg-gray-700 rounded">
                      <div className="h-1 bg-gradient-to-r from-red-400 to-green-400 rounded w-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-primary-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="py-20 bg-gradient-to-br from-primary-900 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
            Escolha Seu <span className="text-primary-400">PLANO</span>
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Duas opções para você sair do amadorismo e se tornar um mecânico profissional que ganha o que merece
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-gray-600 text-white">ACESSO BÁSICO</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">Plano Iniciante</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-primary-400">R$17</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
                
                <div className="text-gray-400 mb-6">
                  <p className="text-sm line-through">De R$ 97</p>
                  <p className="text-green-400 font-bold">ECONOMIA DE R$ 80!</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Acesso ao grupo VIP no WhatsApp",
                    "Biblioteca básica de manuais",
                    "Tabela de preços atualizada",
                    "10 videoaulas essenciais",
                    "Suporte da comunidade",
                    "Atualizações mensais"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl">
                  COMEÇAR AGORA
                </Button>
                <p className="text-xs text-gray-500 mt-2">Cancele quando quiser</p>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-2 border-yellow-400 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold">
                MAIS ESCOLHIDO
              </div>
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-yellow-400 text-black font-bold">ACESSO COMPLETO</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">Plano Profissional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">R$47</span>
                  <span className="text-primary-200 ml-2">/mês</span>
                </div>
                
                <div className="text-primary-200 mb-6">
                  <p className="text-sm line-through">De R$ 197</p>
                  <p className="text-yellow-400 font-bold">ECONOMIA DE R$ 150!</p>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "✅ Tudo do plano iniciante",
                    "📚 Biblioteca completa (200+ manuais)",
                    "🎥 Todas as videoaulas (50+ horas)",
                    "👨‍🏫 Mentoria individual mensal",
                    "🏆 Certificado profissional",
                    "⚡ Suporte prioritário 24/7",
                    "🛠️ Kit de ferramentas especiais",
                    "💰 Consultoria de precificação",
                    "📱 App exclusivo offline"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-white">
                      <span className="text-yellow-400 flex-shrink-0">{feature.split(' ')[0]}</span>
                      <span>{feature.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl text-lg">
                  QUERO SER PROFISSIONAL
                </Button>
                <p className="text-xs text-primary-200 mt-2">Garantia de 7 dias • Cancele quando quiser</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gray-800/50 rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm border border-gray-700">
              <p className="text-white mb-2">🔒 <strong>Pagamento 100% seguro</strong></p>
              <p className="text-gray-400 mb-4">Acesso liberado imediatamente após a confirmação</p>
              <p className="text-yellow-400 font-semibold">⏰ Promoção válida apenas hoje!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/40 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚠️ ATENÇÃO: Vagas Limitadas
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Para manter a qualidade do suporte, limitamos a <strong className="text-red-400">apenas 50 novos membros por mês</strong>. 
            Restam apenas <strong className="text-yellow-400">7 vagas</strong> para este mês.
          </p>
          
          <div className="bg-red-900/30 rounded-xl p-6 max-w-xl mx-auto border border-red-500/50">
            <p className="text-white font-bold mb-2">🚨 Não perca esta oportunidade!</p>
            <p className="text-gray-300">A próxima turma só abre em 30 dias e o preço volta ao normal (R$ 197)</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua Vida Pode Mudar <span className="text-primary-400">HOJE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Pare de trabalhar por migalhas. Você merece ser valorizado e bem pago pelo seu conhecimento.
          </p>
          
          <Button 
            onClick={scrollToOffers}
            size="lg" 
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            GARANTIR MINHA TRANSFORMAÇÃO AGORA 🔥
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Últimas vagas • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Moto Roxo Comunidade - Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-sm">
            Transformando mecânicos em profissionais valorizados desde 2020
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
