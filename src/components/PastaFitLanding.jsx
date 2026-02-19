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
            150 Receitas de Macarrão Fitness<br />
            <span className="text-xl md:text-3xl">Práticas e Econômicas</span>
          </h1>

          {/* Product Image */}
          <div className="mb-3 relative">
            <div className="absolute right-2 top-2 bg-orange-500 text-white px-3 py-1 rounded-md font-bold text-xs z-10 floating shadow-lg">
              PROMOÇÃO
            </div>
            <img
              src="https://i.imgur.com/UCQjYlK.jpeg"
              alt="150 Receitas de Macarrão Fit"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-xl"
            />
          </div>

          <p className="text-sm md:text-base text-orange-500 font-bold mb-3">
            Cansado de Comer Frango com Batata Doce Todo Dia?<br />
            Descubra Como Comer Macarrão Delicioso Sem Sair da Dieta!
          </p>

          {/* Price Section */}
          <div className="mb-4">
            <p className="text-red-400 font-bold line-through text-base">De R$97,00</p>
            <p className="text-gray-600 text-sm">por apenas</p>
            <p className="text-5xl md:text-6xl font-black text-green-500 mt-1">
              R$16
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
            O Que Você Vai Receber:
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: '🍝',
                title: '150 Receitas Diferentes',
                desc: 'Nunca mais repetir o mesmo prato. Variedade para 5 meses comendo diferente todo dia!'
              },
              {
                icon: '📸',
                title: 'Fotos Reais de Cada Receita',
                desc: 'Veja exatamente como o prato deve ficar. Sem surpresas, sem frustrações.'
              },
              {
                icon: '👨‍🍳',
                title: 'Passo a Passo Ilustrado',
                desc: 'Mesmo quem nunca cozinhou consegue fazer. Instruções claras e simples.'
              },
              {
                icon: '📊',
                title: 'Informações Nutricionais Completas',
                desc: 'Calorias, proteínas, carboidratos e gorduras de cada receita. Bata seus macros com precisão!'
              },
              {
                icon: '⚡',
                title: 'Preparos Rápidos',
                desc: 'Maioria das receitas pronta em 15-25 minutos. Perfeito para quem tem rotina corrida.'
              },
              {
                icon: '💰',
                title: 'Economia Garantida',
                desc: 'Ingredientes acessíveis que você encontra em qualquer mercado. Sem gastar fortuna em "comida fit".'
              },
              {
                icon: '🎯',
                title: 'Para Todos os Objetivos',
                desc: 'Receitas para emagrecimento, ganho de massa, manutenção e pré-treino. Você escolhe!'
              },
              {
                icon: '✅',
                title: 'Aprovado por Nutricionista',
                desc: 'Todas as receitas desenvolvidas pela Nutri Sofia Campos. Saúde e sabor garantidos!'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
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
              Experimente as receitas por <strong>7 dias completos</strong>. Se não ficar satisfeito por <strong>QUALQUER motivo</strong>, devolvemos 100% do seu dinheiro.
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
          <div className="space-y-3 mb-10">
            {[
              'Come sempre frango com batata doce e enjoa em 2 semanas',
              'Cortou macarrão por achar que engorda',
              'Gasta uma fortuna com comida "fit" cara',
              'Não tem tempo para preparar refeições saudáveis',
              'Sente culpa quando come o que gosta'
            ].map((error, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <p className="text-gray-700">{error}</p>
              </div>
            ))}
          </div>

          {/* Solution Heading */}
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-green-600">
            ✅ A Solução Está Aqui:
          </h3>

          <p className="text-center text-lg font-bold text-gray-800 mb-6">
            Macarrão fitness pode (e <span className="text-orange-500">DEVE</span>) fazer parte da sua dieta!
          </p>

          {/* Solutions List */}
          <div className="space-y-3 mb-8">
            {[
              { title: 'Variedade TODO DIA', desc: '150 receitas diferentes, nunca repetir' },
              { title: 'Economia Real', desc: 'Ingredientes acessíveis que você encontra em qualquer mercado' },
              { title: 'Rapidez', desc: 'Preparos em 15-20 minutos' },
              { title: 'Prazer Sem Culpa', desc: 'Coma macarrão delicioso e continue na dieta' },
              { title: 'Resultados Mais Rápidos', desc: 'Dieta sustentável = você não desiste' }
            ].map((solution, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <span className="text-green-500 font-bold text-lg">•</span>
                <p className="text-gray-700"><strong className="text-gray-800">{solution.title}</strong> - {solution.desc}</p>
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
              { name: 'Macarrão Integral com Carne Moída Fit', cal: 440, img: 'https://i.imgur.com/HoFmYBj.jpeg' },
              { name: 'Macarrão com Legumes e Ovo', cal: 370, img: 'https://i.imgur.com/o57nxJu.jpeg' },
              { name: 'Spaghetti Carbonara Fit', cal: 360, img: 'https://i.imgur.com/RhgLcS4.jpeg' },
              { name: 'Macarrão Cremoso com Frango', cal: 420, img: 'https://i.imgur.com/dsT1T79.jpeg' },
              { name: 'Penne com Molho Pesto Fitness', cal: 430, img: 'https://i.imgur.com/FMpOS1G.jpeg' },
              { name: 'Macarrão com Molho de Queijos', cal: 390, img: 'https://i.imgur.com/rmfllwM.jpeg' },
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
              🍝 QUERO COMER MACARRÃO SEM CULPA!
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
                title: '30 Molhos Fit para as Massas',
                description: 'Molhos cremosos, leves e saborosos que transformam qualquer macarrão em uma refeição fitness completa.',
                value: 'R$47',
                img: 'https://i.imgur.com/o0IEZIx.png'
              },
              {
                title: 'Meal Prep de 4 Semanas',
                description: 'Planejamento completo para preparar suas marmitas de macarrão fit da semana toda em poucas horas.',
                value: 'R$39',
                img: 'https://i.imgur.com/UogvUcy.png'
              },
              {
                title: 'Guia de Substituições e Macros',
                description: 'Aprenda a calcular os macronutrientes de cada substituição e quais ingredientes utilizar sem perder o sabor.',
                value: 'R$37',
                img: 'https://i.imgur.com/AsFgTH2.png'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Basic Offer - Left Column */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transition-all border-2 border-gray-200 hover:shadow-2xl">
              <div className="text-center mb-6">
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-bold mb-3">
                  🎯 OFERTA BÁSICA
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Guia 150 Receitas de Macarrão Fit',
                  'Guia de Ingredientes Essenciais',
                  'Lista de Compras Básica',
                  'Entrega imediata por e-mail',
                  'Acesso vitalício',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl mb-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">De R$97</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">-83%</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-green-600">R$16</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Pagamento único</p>
              </div>

              <button
                onClick={() => window.open('https://pay.cakto.com.br/suvqbeu_745128' + window.location.search, '_self')}
                className="w-full animated-gradient text-white font-bold py-4 px-6 rounded-full text-base md:text-lg transition-all shadow-lg mb-4 flex items-center justify-center"
              >
                COMPRAR AGORA!
              </button>

              <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
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

            {/* Complete Offer - Right Column */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-[1.02] transition-all border-4 border-yellow-400 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  ⭐ MAIS POPULAR
                </span>
              </div>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">🚀 SUPER OFERTA COMPLETO</h3>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Guia 150 Receitas de Macarrão Fit',
                  'Lista de compras',
                  'Entrega imediata por e-mail',
                  'Bônus 1: 30 Molhos Fit para as Massas',
                  'Bônus 2: Meal Prep de 4 Semanas com as Receitas',
                  'Bônus 3: Guia de Substituições e Macros das Receitas',
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
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">-88%</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 floating">R$27</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Pagamento único</p>
              </div>

              <button
                onClick={() => window.open('https://pay.cakto.com.br/qrqqwmj_745141' + window.location.search, '_self')}
                className="w-full animated-gradient text-white font-bold py-4 px-6 rounded-full text-base md:text-lg transition-all shadow-lg mb-4 flex items-center justify-center"
              >
                COMPRAR AGORA!
              </button>

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
                text: 'Eu AMAVA macarrão mas tinha cortado da dieta. Agora como quase todo dia e ainda perdi 3kg no primeiro mês! As receitas são maravilhosas 😍',
                likes: 23,
                image: 'https://i.pravatar.cc/150?img=5'
              },
              {
                name: 'João Santos',
                time: '5h',
                text: 'Cara, que receitas incríveis! Sempre achei que macarrão engordava. Agora como no pós-treino e minha recuperação melhorou demais.',
                likes: 34,
                image: 'https://i.pravatar.cc/150?img=12'
              },
              {
                name: 'Ana Costa',
                time: '1d',
                text: 'Os molhos fit são sensacionais! Minha família nem percebe que é saudável. Ganhei massa sem abrir mão do que eu amo comer 💪',
                likes: 45,
                image: 'https://i.pravatar.cc/150?img=9'
              },
              {
                name: 'Carlos Oliveira',
                time: '1d',
                text: 'Trabalho o dia inteiro e sempre pedia delivery de macarrão cheio de gordura. Agora faço meu meal prep no domingo e levo minha marmita fit a semana toda.',
                likes: 28,
                image: 'https://i.pravatar.cc/150?img=11'
              },
              {
                name: 'Lucia Ferreira',
                time: '2d',
                text: 'Comprei ontem e já fiz 3 receitas diferentes! Meu marido amou e nem acreditou que era fit. Recomendo demais gente, pode confiar, vale muito a pena! 😊',
                likes: 52,
                image: 'https://i.pravatar.cc/150?img=16'
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
            Comece hoje a transformar suas refeições e seu corpo com receitas de macarrão fit deliciosas e práticas
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
          <p className="font-bold text-lg text-white mb-2">💪 150 Receitas de Macarrão Fit</p>
          <p className="text-sm">Todos os direitos reservados – 2026</p>
        </div>
      </footer>

    </div>
  );
}
