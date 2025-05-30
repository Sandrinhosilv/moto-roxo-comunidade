import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Wrench, Trophy, Clock, Shield, Zap, Target, DollarSign, BookOpen, Video, MessageCircle, Award } from "lucide-react";
import { useEffect } from "react";

const LandingPage = () => {
  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pixel de rastreamento
  useEffect(() => {
    // Facebook Pixel
    const fbPixel = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    
    const script = document.createElement('script');
    script.innerHTML = fbPixel;
    document.head.appendChild(script);

    // Google Analytics
    const gtag = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_ID');
    `;
    
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = gtag;
    document.head.appendChild(gtagScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(gtagScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-600 text-white px-4 py-2 text-sm font-semibold animate-pulse">
              🔥 ÚLTIMAS 7 VAGAS COM CUPOM - 75% DESCONTO APLICADO
            </Badge>
            
            <Badge className="mb-6 bg-yellow-600 text-black px-4 py-2 text-sm font-bold">
              ⏰ VÁLIDO ATÉ 29/05/2025
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
              NÃO PERCA MAIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">SERVIÇOS</span> POR FALTA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">CONHECIMENTO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Fature até <strong className="text-primary-400">R$ 5.000 por mês</strong> com conhecimento técnico especializado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button 
                onClick={scrollToOffers}
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                QUERO APROVEITAR 🚀
              </Button>
            </div>

            {/* VSL - Video Sales Letter da página original */}
            <div className="mt-12 bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://gestionmech.ct.ws/pv2"
                  title="Gestion MECH - Apresentação"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              <p className="text-white font-semibold mt-4 text-center">
                ▶️ Veja os resultados dos nossos mecânicos
              </p>
              <p className="text-gray-400 text-sm text-center">
                Transformações reais com conhecimento técnico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            O QUE VOCÊ VAI <span className="text-primary-400">ENCONTRAR</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Wrench className="w-12 h-12 text-primary-400" />,
                title: "SUSPENSÃO",
                description: "Manuais completos e técnicas avançadas para todos os tipos de suspensão"
              },
              {
                icon: <Shield className="w-12 h-12 text-primary-400" />,
                title: "FREIO",
                description: "Procedimentos detalhados e tabelas de especificações técnicas"
              },
              {
                icon: <Zap className="w-12 h-12 text-primary-400" />,
                title: "MOTOR",
                description: "Diagnósticos precisos e reparos especializados de alta complexidade"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
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
            VEJA O QUE OUTROS <span className="text-primary-400">MECÂNICOS</span> ESTÃO FALANDO:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mecânico Especialista MS03",
                content: "O conhecimento que adquiri transformou completamente meu trabalho. Agora consigo resolver problemas que antes me deixavam perdido.",
                image: "https://gestionmech.ct.ws/wp-content/uploads/2024/11/MS03-1024x1024.jpg"
              },
              {
                name: "Mecânico Profissional MS02", 
                content: "As tabelas e esquemas são incríveis. Economizo horas de trabalho e ganho muito mais por serviço.",
                image: "https://gestionmech.ct.ws/wp-content/uploads/2024/11/MS02-1024x1024.jpg"
              },
              {
                name: "Mecânico Certificado MS01",
                content: "Finalmente tenho acesso ao conhecimento que sempre busquei. Minha renda aumentou significativamente.",
                image: "https://gestionmech.ct.ws/wp-content/uploads/2024/11/MS01-1024x1024.jpg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 hover:border-primary-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            QUAIS <span className="text-primary-400">MONTADORAS</span> TEMOS MATERIAIS:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white">YAMAHA</h3>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white">SUZUKI</h3>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white">SUNDOWN</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="py-20 bg-gradient-to-br from-primary-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-blue-600 text-white font-bold">BÁSICO</Badge>
                <p className="text-yellow-400 font-bold mb-4">POR TEMPO LIMITADO!</p>
                
                <ul className="space-y-3 mb-6 text-left">
                  {[
                    "GRUPO NO TELEGRAM",
                    "Atualizações por 1 ANO"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white font-semibold">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-sm">Você terá acesso a essa oportunidade única hoje com mais de <strong className="text-red-400">82,47% de desconto</strong></p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 line-through text-lg">De R$97</p>
                  <div className="text-4xl font-black text-primary-400 mb-2">R$17</div>
                  <p className="text-gray-400">à vista</p>
                  <p className="text-gray-300 text-sm">ou 2x de R$8,50</p>
                </div>
                
                <Button 
                  onClick={() => window.open('https://pay.kiwify.com.br/Kj2kJpA', '_blank')}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl"
                >
                  QUERO APROVEITAR
                </Button>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-2 border-yellow-400 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold">
                MAIS ESCOLHIDO
              </div>
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-yellow-400 text-black font-bold">PREMIUM</Badge>
                <p className="text-yellow-400 font-bold mb-4">POR TEMPO LIMITADO!</p>
                
                <ul className="space-y-3 mb-6 text-left">
                  {[
                    "GRUPO NO TELEGRAM",
                    "GRUPO NO WHATSAPP", 
                    "TABELA DE RETENTORES",
                    "TABELA DE ROLAMENTOS",
                    "TABELA DE FILTROS",
                    "ESQUEMAS ELÉTRICOS",
                    "ATUALIZAÇÕES VITALÍCIAS",
                    "GESTION MECH (30d)"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white font-semibold">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-primary-200 text-sm">Você terá acesso a essa oportunidade única hoje com mais de <strong className="text-yellow-400">93,91% de desconto</strong></p>
                </div>
                
                <div className="mb-6">
                  <p className="text-primary-200 line-through text-lg">De R$397</p>
                  <div className="text-4xl font-black text-white mb-2">R$47</div>
                  <p className="text-primary-200">à vista</p>
                  <p className="text-white text-sm">ou 5x de R$10,55</p>
                </div>
                
                <Button 
                  onClick={() => window.open('https://pay.kiwify.com.br/mBWz8I6', '_blank')}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl text-lg"
                >
                  QUERO APROVEITAR
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Perguntas <span className="text-primary-400">Frequentes</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Como acesso os manuais da comunidade?",
                answer: "Após a confirmação do pagamento, você receberá acesso imediato aos grupos e materiais através de link de convite."
              },
              {
                question: "Preciso pagar mensalidade?",
                answer: "Não! O pagamento é único. No plano Básico você tem 1 ano de atualizações, no Premium são atualizações vitalícias."
              },
              {
                question: "Tem suporte se eu tiver dúvidas?",
                answer: "Sim! Você terá acesso aos grupos onde poderá tirar dúvidas com outros mecânicos e nossa equipe de suporte."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Últimas <span className="text-red-400">7 VAGAS</span> Disponíveis
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não perca esta oportunidade única de ter acesso ao conhecimento técnico que vai transformar sua carreira
          </p>
          
          <Button 
            onClick={scrollToOffers}
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            GARANTIR MINHA VAGA AGORA 🔥
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Oferta válida até 29/05/2025 • Acesso imediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            Copyright © – Gestion MECH – Todos os Direitos Reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
