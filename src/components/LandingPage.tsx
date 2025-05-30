
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Wrench, Trophy, Clock, Shield, Zap } from "lucide-react";

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
              🔥 COMUNIDADE EXCLUSIVA PARA MECÂNICOS
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
              DOMINE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">MECÂNICA</span> DE MOTOS
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Entre para a comunidade que está revolucionando o mercado de mecânica de motos no Brasil
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button 
                onClick={scrollToOffers}
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                QUERO FAZER PARTE 🚀
              </Button>
              
              <div className="flex items-center gap-2 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white">+500 mecânicos aprovam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">+500</div>
              <div className="text-gray-300">Mecânicos Ativos</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">+1000</div>
              <div className="text-gray-300">Problemas Resolvidos</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            O Que Você Vai <span className="text-primary-400">CONSEGUIR</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8 text-primary-400" />,
                title: "Técnicas Avançadas",
                description: "Aprenda métodos profissionais que poucos conhecem"
              },
              {
                icon: <Users className="w-8 h-8 text-primary-400" />,
                title: "Rede de Contatos",
                description: "Conecte-se com os melhores mecânicos do país"
              },
              {
                icon: <Trophy className="w-8 h-8 text-primary-400" />,
                title: "Aumente sua Renda",
                description: "Técnicas para cobrar mais pelos seus serviços"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary-400" />,
                title: "Suporte 24/7",
                description: "Tire dúvidas a qualquer hora do dia"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary-400" />,
                title: "Conteúdo Exclusivo",
                description: "Material que você não encontra em lugar nenhum"
              },
              {
                icon: <Zap className="w-8 h-8 text-primary-400" />,
                title: "Resolução Rápida",
                description: "Solucione problemas complexos em minutos"
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
            O Que Dizem os <span className="text-primary-400">MECÂNICOS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Mecânico há 15 anos",
                content: "Nunca vi uma comunidade tão ativa e prestativa. Minha renda aumentou 40% em 3 meses!"
              },
              {
                name: "João Santos",
                role: "Dono de oficina",
                content: "As técnicas que aprendi aqui me fizeram economizar horas de trabalho. Vale cada centavo!"
              },
              {
                name: "Pedro Oliveira",
                role: "Mecânico especialista",
                content: "Finalmente encontrei um lugar onde posso trocar experiências com profissionais de verdade."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
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
          
          <p className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Duas opções incríveis para você fazer parte da maior comunidade de mecânicos do Brasil
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-gray-600 text-white">ACESSO BÁSICO</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">Plano Essencial</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-primary-400">R$17</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Acesso ao grupo exclusivo",
                    "Biblioteca de técnicas básicas",
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
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-2 border-primary-400 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold">
                MAIS POPULAR
              </div>
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-yellow-400 text-black">ACESSO PREMIUM</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">Plano Profissional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">R$47</span>
                  <span className="text-primary-200 ml-2">/mês</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Tudo do plano essencial",
                    "Masterclasses exclusivas",
                    "Mentoria individual",
                    "Certificado profissional",
                    "Suporte prioritário 24/7",
                    "Material de estudo avançado"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl">
                  QUERO SER PREMIUM
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">🔒 Pagamento 100% seguro • Cancele quando quiser</p>
            <p className="text-primary-400 font-semibold">⏰ Oferta por tempo limitado!</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Não Perca Essa <span className="text-primary-400">OPORTUNIDADE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se aos mecânicos que estão transformando suas carreiras e aumentando sua renda
          </p>
          
          <Button 
            onClick={scrollToOffers}
            size="lg" 
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            GARANTIR MINHA VAGA AGORA 🔥
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Vagas limitadas • Política de reembolso de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Moto Roxo Comunidade - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
