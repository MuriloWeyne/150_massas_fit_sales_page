import React from 'react';
import { Check, Star, Shield, Mail, Smartphone, Search } from 'lucide-react';

export default function PastaFitLanding() {
  const scrollToOffer = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get current date formatted
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .floating {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background: linear-gradient(90deg, #22c55e, #f97316, #22c55e, #f97316);
          background-size: 300% 100%;
          animation: gradientMove 3s ease infinite;
        }
        .animated-gradient:hover {
          background: linear-gradient(90deg, #16a34a, #ea580c, #16a34a, #ea580c);
          background-size: 300% 100%;
        }
        .animated-gradient-text {
          background: linear-gradient(90deg, #22c55e, #f97316, #22c55e, #f97316);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease infinite;
        }
      `}</style>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-4 text-center font-bold">
        <span className="text-sm md:text-base">
          🔥 Essa promoção acaba <span className="text-yellow-300">hoje</span> - {formattedDate}
        </span>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-4 md:py-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl animated-gradient-text font-bold py-1 mb-8">
            150 Receitas de Massas Fitness<br />
            <span className="text-xl md:text-3xl">Práticas e Econômicas</span>
          </h1>

          {/* Product Image */}
          <div className="mb-3 relative">
            <div className="absolute right-2 top-2 bg-orange-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10 floating shadow-lg">
              PROMOÇÃO
            </div>
            <img
              src="https://i.imgur.com/hnjiXQM.jpeg"
              alt="150 Receitas de Massas Fit"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-xl"
            />
          </div>

          <p className="text-sm md:text-base text-orange-500 font-bold mb-3">
            Cansado de Comer Frango com Batata Doce Todo Dia?<br />
            Descubra Como Comer Massas Deliciosas Sem Sair da Dieta!
          </p>

          {/* Price Section */}
          <div className="mb-4">
            <p className="text-red-400 font-bold line-through text-base">De R$97,00</p>
            <p className="text-gray-600 text-sm">por apenas</p>
            <p className="text-5xl md:text-6xl font-black text-green-500 mt-1">
              R$29,90
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToOffer}
            className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-3 px-6 rounded-full text-base md:text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <span>🔥</span>
            SIM! QUERO GARANTIR MEU ACESSO AGORA!
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animated-gradient-text">
            Sobre o Nosso Material
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              { icon: '🍝', title: '150 Receitas Diferentes' },
              { icon: '👨‍🍳', title: 'Passo a Passo Completo' },
              { icon: '📊', title: 'Infos Nutricionais Completas' },
              { icon: '⚡', title: 'Preparos Rápidos' },
              { icon: '💰', title: 'Economia Garantida' },
              { icon: '✅', title: 'Criado por Equipe de Especialistas' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100 flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight">{benefit.title}</h3>
              </div>
            ))}
          </div>

          {/* Guarantee Box */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6 md:p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
              ✅ GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Experimente as receitas por <strong>7 dias completos</strong>. Se não ficar satisfeita por <strong>QUALQUER motivo</strong>, devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-gray-600 mb-4">
              Sem perguntas. Sem burocracia. Sem complicação.
            </p>
            <p className="text-green-600 font-bold text-lg">
              O risco é TODO NOSSO! Você não tem nada a perder.
            </p>
          </div>
        </div>
      </section>

      {/* Why This eBook Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-yellow-100 to-yellow-50">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            ❌ Você Está Cometendo Estes Erros na Dieta?
          </h2>

          {/* Errors List */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: '🔄', text: 'Pouca Variedade' },
              { icon: '🚫', text: 'Cortar Massas' },
              { icon: '💰', text: 'Gastos com Comida "Fit"' },
              { icon: '⏰', text: 'Falta de Tempo' },
              { icon: '😔', text: 'Sente Culpa' }
            ].map((error, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm">
                <span className="text-2xl flex-shrink-0">{error.icon}</span>
                <p className="text-red-700 font-bold text-sm md:text-base leading-tight">{error.text}</p>
              </div>
            ))}
          </div>

          {/* Solution Heading */}
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-green-600">
            ✅ A Solução Está Aqui:
          </h3>

          <p className="text-center text-lg font-bold text-gray-800 mb-6">
            Massas fitness podem (e <span className="text-orange-500">DEVEM</span>) fazer parte da sua dieta!
          </p>

          {/* Solutions List */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: '✨', title: 'Variedade Diária' },
              { icon: '💰', title: 'Economia Real' },
              { icon: '⚡', title: 'Preparo Rápido' },
              { icon: '😋', title: 'Prazer Sem Culpa' },
              { icon: '🚀', title: 'Resultados Reais' }
            ].map((solution, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm">
                <span className="text-2xl flex-shrink-0">{solution.icon}</span>
                <p className="text-green-700 font-bold text-sm md:text-base leading-tight">{solution.title}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              ✅ GARANTIR MINHAS 150 RECEITAS + BÔNUS!
            </button>
          </div>
        </div>
      </section>

      {/* Recipes Preview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 animated-gradient-text">
            Veja o que você vai<br />Receber no Guia:
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { name: 'Massa Integral com Carne Moída Fit', cal: 440, img: 'https://i.imgur.com/HoFmYBj.jpeg' },
              { name: 'Massa com Legumes e Ovo', cal: 370, img: 'https://i.imgur.com/o57nxJu.jpeg' },
              { name: 'Spaghetti Carbonara Fit', cal: 360, img: 'https://i.imgur.com/RhgLcS4.jpeg' },
              { name: 'Massa Cremosa com Frango', cal: 420, img: 'https://i.imgur.com/dsT1T79.jpeg' },
              { name: 'Penne com Molho Pesto Fitness', cal: 430, img: 'https://i.imgur.com/FMpOS1G.jpeg' },
              { name: 'Massa com Molho de Queijos', cal: 390, img: 'https://i.imgur.com/rmfllwM.jpeg' },
              { name: 'Lasanha Fit de Frigideira', cal: 450, img: 'https://i.imgur.com/IQaNXop.jpeg' },
              { name: 'Lasanha de Queijo com Berinjela', cal: 400, img: 'https://i.imgur.com/40TNG7f.jpeg' }
            ].map((recipe, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={recipe.img}
                  alt={recipe.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="font-bold text-sm text-gray-800 mb-2 leading-tight">{recipe.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-orange-500">
                    <span>🔥</span>
                    <span className="font-bold text-sm">{recipe.cal} calorias</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              🍝 QUERO COMER MASSAS SEM CULPA!
            </button>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-yellow-100 to-yellow-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 animated-gradient-text">
            Bônus que você recebe ao adquirir hoje:
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                title: '50 Saladas Fit',
                description: '50 Receitas de Saladas fit separadas por categorias para qualquer situação no seu dia a dia.',
                value: 'R$47',
                img: 'https://i.imgur.com/ezNk6mR.jpeg'
              },
              {
                title: '30 Lanches Fit',
                description: '30 Receitas de Lanches Fit de pré e pós-treino, snacks noturnos e refeições rápidas para salvar a dieta.',
                value: 'R$39',
                img: 'https://i.imgur.com/jGNeXmU.jpeg'
              },
              {
                title: '20 Sobremesas Fit',
                description: 'Receitas de sobremesas saudáveis para comer depois de preparar uma massa deliciosa.',
                value: 'R$37',
                img: 'https://i.imgur.com/bwjmPln.jpeg'
              }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={bonus.img}
                  alt={bonus.title}
                  className="w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base text-gray-800 mb-2 leading-tight">{bonus.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-gray-400 line-through">{bonus.value}</span><span className="font-bold text-sm rounded-full bg-green-500 text-white px-2"> GRÁTIS HOJE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              🎁 SIM! QUERO TODOS OS BÔNUS GRÁTIS!
            </button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-16 md:py-24 bg-gradient-to-b from-yellow-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-orange-500">
            Garanta Seu Acesso Agora:
          </h2>

          <div className="max-w-xl mx-auto">
            {/* Complete Offer - Single Column */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-[1.02] transition-all border-4 border-yellow-400 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  ⭐ OFERTA COMPLETA
                </span>
              </div>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">🚀 GUIA 150 RECEITAS + BÔNUS</h3>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Guia 150 Receitas de Massas Fit',
                  'Entrega imediata por e-mail',
                  'Bônus 1: 50 Saladas Fit',
                  'Bônus 2: 30 Lanches Fit',
                  'Bônus 3: 20 Sobremesas Fit',
                  'Acesso vitalício',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-5 rounded-2xl mb-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">De R$220</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">-86%</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 floating">R$29,90</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Pagamento único</p>
              </div>

              <a
                href={'https://pay.cakto.com.br/qrqqwmj_745141' + window.location.search}
                className="w-full animated-gradient text-white font-bold py-4 px-6 rounded-full text-base md:text-lg transition-all shadow-lg mb-4 flex items-center justify-center"
              >
                COMPRAR AGORA!
              </a>

              <div className="flex items-center justify-center gap-3 text-xs text-white">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Compra Segura</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  <span>Garantia 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 animated-gradient-text">
            Depoimentos de quem comprou
          </h2>

          <div className="space-y-6">
            {[
              {
                name: 'Maria Silva',
                time: '2h',
                text: 'Até a minha nutricionista achava que massa não cabia na dieta. Felizmente conheci a Equipe Massas Fit e agora consigo encaixar massas deliciosas na minha alimentação!',
                likes: 23,
                image: 'https://i.imgur.com/abbRbOam.png'
              },
              {
                name: 'João Santos',
                time: '5h',
                text: 'Gente, que receitas maravilhosas. Sempre faço depois que volto da academia. Agora, consigo manter o shape e mesmo assim comer o que eu gosto!',
                likes: 34,
                image: 'https://i.imgur.com/WYQzh7dm.png'
              },
              {
                name: 'Ana Costa',
                time: '1d',
                text: 'Os molhos fit são divinos. O pessoal aqui de casa nem consegue perceber que é fitness!',
                likes: 45,
                image: 'https://i.imgur.com/puEFIXym.png'
              },
              {
                name: 'Carlos Oliveira',
                time: '1d',
                text: 'Eu e minha esposa sempre pediamos iFood, mas agora consigo fazer tudo em casa tranquilamente.',
                likes: 28,
                image: 'https://i.imgur.com/BYtNZ6Sm.png'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{testimonial.name}</span>
                      <span className="text-gray-500 text-sm">· {testimonial.time}</span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
                  <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                    <span>❤️</span>
                    <span>{testimonial.likes}</span>
                  </button>
                  <button className="hover:text-orange-600 transition-colors">Curtir</button>
                  <button className="hover:text-orange-600 transition-colors">Comentar</button>
                  <button className="hover:text-orange-600 transition-colors">Compartilhar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              ⭐ EU TAMBÉM QUERO TRANSFORMAR MINHA DIETA!
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Perguntas Frequentes (FAQ)
          </h2>

          <div className="space-y-4">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                question: 'Como vou receber o material?',
                answer: 'Imediatamente após a confirmação do pagamento, você receberá o acesso completo no seu e-mail.'
              },
              {
                icon: '👨‍🍳',
                question: 'Não sei cozinhar muito bem... esse material serve pra mim?',
                answer: 'Com certeza! Todas as receitas têm passo a passo ilustrado e são super simples de fazer.'
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                question: 'Posso acessar pelo celular?',
                answer: 'Sim! O material é em PDF e pode ser acessado de qualquer dispositivo.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                question: 'E se eu não gostar? Tem garantia?',
                answer: 'Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="text-orange-600 flex-shrink-0">
                    {typeof faq.icon === 'string' ? <span className="text-2xl">{faq.icon}</span> : faq.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Comece hoje a transformar suas refeições e seu corpo com receitas de massas fit deliciosas e práticas
          </p>
          <button
            onClick={scrollToOffer}
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-5 px-16 rounded-full text-2xl transition-all transform hover:scale-105 shadow-2xl"
          >
            ⚡ GARANTIR MEU DESCONTO AGORA!
          </button>
          <p className="mt-6 text-sm opacity-75">
            ⏰ Oferta por tempo limitado - Garanta seu desconto agora!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg text-white mb-2">💪 150 Receitas de Massas Fit</p>
          <p className="text-sm">Todos os direitos reservados – 2026</p>
        </div>
      </footer>

    </div>
  );
}
