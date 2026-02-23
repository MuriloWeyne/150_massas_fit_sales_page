import React, { useState, useEffect } from 'react';
import { Check, Star, Shield, Mail, Smartphone, Search, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBonusSlide, setCurrentBonusSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const appScreens = [
    {
      image: "https://i.imgur.com/6Jc0OGt.png",
      caption: "Acesse todas as 150 receitas em um só lugar"
    },
    {
      image: "https://i.imgur.com/gXViBCu.png",
      caption: "Busque por categoria e ingredientes"
    },
    {
      image: "https://i.imgur.com/YIvjQpa.png",
      caption: "Busque por categoria e ingredientes"
    },
    {
      image: "https://i.imgur.com/WXvodxy.png",
      caption: "Veja macros e calorias de cada prato"
    },
    {
      image: "https://i.imgur.com/BDZAE5G.png",
      caption: "Passo a passo detalhado"
    },
    {
      image: "https://i.imgur.com/9AqZbhx.png",
      caption: "Favorite suas receitas preferidas"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === appScreens.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? appScreens.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 20000);
    return () => clearInterval(timer);
  }, []);

  const bonuses = [
    {
      title: '50 Saladas Fit',
      description: '50 Receitas de Saladas fit separadas por categorias para qualquer situação no seu dia a dia.',
      value: 'R$47',
      img: 'https://i.imgur.com/Wbg6E8T.png'
    },
    {
      title: '30 Lanches Fit',
      description: '30 Receitas de Lanches Fit de pré e pós-treino, snacks noturnos e refeições rápidas para salvar a dieta.',
      value: 'R$39',
      img: 'https://i.imgur.com/6k7GmhK.png'
    },
    {
      title: '20 Sobremesas Fit',
      description: 'Receitas de sobremesas saudáveis para comer depois de preparar uma massa deliciosa.',
      value: 'R$37',
      img: 'https://i.imgur.com/soPYDsj.png'
    }
  ];

  const nextBonusSlide = () => {
    setCurrentBonusSlide((prev) => (prev === bonuses.length - 1 ? 0 : prev + 1));
  };

  const prevBonusSlide = () => {
    setCurrentBonusSlide((prev) => (prev === 0 ? bonuses.length - 1 : prev - 1));
  };

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
            150 RECEITAS DE MASSAS FITNESS<br />
            <span className="text-xl md:text-3xl">Todas em um único aplicativo</span>
          </h1>

          {/* Product Image */}
          <div className="mb-3 relative">
            <img
              src="https://i.imgur.com/k9ln1GV.jpeg"
              alt="150 Receitas de Massas Fit"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-xl"
            />
          </div>

          <p className="text-lg md:text-lg text-orange-700 font-bold mb-3">
            Todas as receitas tem fotos, informações nutricionais e<br />
            Modo de Preparo COMPLETO!
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

      {/* Benefits & App Screens Section */}
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animated-gradient-text">
            Conheça o Nosso Aplicativo
          </h2>

          {/* App Screens Carousel */}
          <div className="relative max-w-sm mx-auto mb-16 px-4">
            <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl bg-gray-900 aspect-[9/18.5] relative">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {appScreens.map((screen, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 relative h-full">
                    <img
                      src={screen.image}
                      alt={`App Screen ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-12">
                      <p className="text-white text-center font-bold text-lg leading-tight">
                        {screen.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {appScreens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === idx ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16 px-4">
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Ainda <span className="text-orange-600 font-bold">HOJE</span> você vai conseguir preparar massas deliciosas e que cabem na sua dieta alimentar. <br /><span className="text-orange-600 font-bold">Chega de dietas malucas!</span>
            </p>
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-5 px-8 rounded-full text-xl transition-transform transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              QUERO O APLICATIVO
            </button>
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

      {/* Why Our App Section (Comparison) */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-tight">
            Por que nosso Aplicativo é<br />
            <span className="text-orange-500">Diferente de Tudo</span><br />
            que você já viu?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Others column */}
            <div className="bg-gray-100 p-8 rounded-3xl opacity-70 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-500 flex items-center gap-2">
                <span>❌</span> Outros do Mercado
              </h3>
              <ul className="space-y-5">
                {[
                  'PDFs estáticos e difíceis de ler',
                  'Receitas sem fotos ou fotos genéricas',
                  'Difícil de encontrar o que você quer',
                  'Explicações confusas e incompletas',
                  'Sem suporte ou atualizações'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our App column */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-orange-400 transform md:scale-105 z-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-400 px-4 py-1 rounded-bl-xl text-white text-xs font-bold uppercase tracking-wider">
                Exclusivo
              </div>
              <h3 className="text-2xl font-black mb-6 animated-gradient-text flex items-center gap-2">
                <span>✅</span> O Nosso Aplicativo
              </h3>
              <ul className="space-y-5">
                {[
                  'Experiência interativa e moderna',
                  'Imagens ÚNICAS para todas as 150 receitas',
                  'Menu de busca inteligente por ingredientes',
                  'Passo a passo COMPLETO e ilustrado',
                  'Informações nutricionais reais (Macros)',
                  'Acesso vitalício no seu celular'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-bold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-5 px-10 rounded-full text-xl transition-transform transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              🚀 QUERO TER ACESSO A TUDO ISSO AGORA!
            </button>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Slider */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
              A Diferença é <span className="text-orange-500 italic">Gritante</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Arraste o slider abaixo para comparar a qualidade de um e-book comum com o que você encontrará no nosso aplicativo.
            </p>
          </div>

          <div 
            className="relative h-[800px] md:h-[1400px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-gray-100"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchEnd={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* Fixed Labels */}
            <div className="absolute top-4 left-4 bg-gray-800/90 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg z-40 pointer-events-none uppercase tracking-wider">
              E-BOOKS COMUNS
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg z-40 pointer-events-none uppercase tracking-wider">
              NOSSO APP (150 RECEITAS)
            </div>

            {/* After Image (App) - Background Layer */}
            <div className="absolute inset-0">
              <img 
                src="https://i.imgur.com/aA7Blx2.png" 
                alt="App Quality"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Before Image (Generic Ebook) - Sliding Layer */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/50"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-[max(896px,100vw)] h-full"> 
                <img 
                  src="https://i.imgur.com/wTobHBq.png" 
                  alt="Generic Ebook Quality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Slider Handle */}
            <div  
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center -ml-0.5 border-4 border-orange-500">
                <div className="flex gap-0.5">
                   <ChevronLeft className="w-5 h-5 text-orange-500 -mr-1" />
                   <ChevronRight className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 items-center text-sm md:text-base font-bold text-gray-500">
             <div className="flex items-center gap-2">
               <span className="w-4 h-4 rounded-full bg-gray-200 border border-gray-400"></span>
               E-books Genéricos (Texto)
             </div>
             <div className="flex items-center gap-2">
               <span className="w-4 h-4 rounded-full bg-orange-500 shadow-md"></span>
               Nosso Aplicativo (Interativo)
             </div>
          </div>
        </div>
      </section>

      {/* Recipes Preview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 animated-gradient-text">
            Olha algumas das receitas que temos<br />em nosso aplicativo:
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
      <section className="py-12 md:py-20 bg-gradient-to-b from-yellow-100 to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 animated-gradient-text uppercase tracking-tight">
            Bônus Exclusivos Para Você:
          </h2>

          {/* Bonuses Carousel */}
          <div className="relative max-w-sm mx-auto mb-12 px-4">
            <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl bg-gray-900 aspect-[9/18.5] relative">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentBonusSlide * 100}%)` }}
              >
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 relative h-full">
                    <img
                      src={bonus.img}
                      alt={bonus.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 pt-12">
                       <div className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mb-2">GRÁTIS HOJE</div>
                       <h3 className="text-white font-black text-xl mb-1">{bonus.title}</h3>
                       <p className="text-gray-200 text-sm leading-tight">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevBonusSlide(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextBonusSlide(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {bonuses.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBonusSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentBonusSlide === idx ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto animated-gradient text-white font-bold py-5 px-8 rounded-full text-xl transition-transform transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              🎁 SIM! QUERO TODOS OS BÔNUS GRÁTIS!
            </button>
            <p className="mt-4 text-gray-500 text-sm font-bold flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Valor Total em Bônus: R$123,00 (Economia Real)
            </p>
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
                text: 'Até a minha nutricionista achava que massa não cabia na dieta. Felizmente conheci esse app e agora consigo encaixar massas deliciosas na minha alimentação!',
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
                question: 'Como vou receber o acesso ao aplicativo?',
                answer: 'Imediatamente após a confirmação do pagamento, você receberá os dados de acesso diretamente no seu e-mail cadastrado.'
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                question: 'O acesso ao aplicativo é vitalício?',
                answer: 'Sim! Você paga uma única vez e terá acesso ao aplicativo e a todas as 150 receitas de massas para sempre, em qualquer dispositivo.'
              },
              {
                icon: '🔄',
                question: 'E se o aplicativo for atualizado?',
                answer: 'Você terá direito a todas as futuras atualizações do aplicativo e novas receitas sem nenhum custo adicional. Nosso compromisso é com a sua evolução!'
              },
              {
                icon: '👨‍🍳',
                question: 'Eu nunca cozinhei, vou conseguir fazer?',
                answer: 'Com certeza! O aplicativo foi desenhado pensando na praticidade. Todas as receitas possuem passo a passo ilustrado, linguagem simples e tempo de preparo reduzido.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                question: 'Tem alguma garantia se eu não gostar?',
                answer: 'Sim, você tem 7 dias de garantia incondicional. Se por qualquer motivo você achar que o app não é para você, devolvemos 100% do seu investimento sem perguntas.'
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
