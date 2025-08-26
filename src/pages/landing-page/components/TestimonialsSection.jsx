import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 45,
      location: "Rio de Janeiro, RJ",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      condition: "Fadiga Crônica e Ganho de Peso",
      treatment: "Reposição Hormonal + Emagrecimento",
      rating: 5,
      testimonial: `Após anos me sentindo cansada e ganhando peso sem explicação, encontrei no Dr. Cláudio a solução que eu precisava.\n\nEm apenas 3 meses de tratamento, perdi 12kg e recuperei uma energia que não sentia há anos. Hoje acordo disposta e tenho qualidade de vida novamente.\n\nO acompanhamento é excepcional e os resultados falam por si só!`,
      results: {
        weight_loss: "12kg",
        energy_increase: "85%",
        treatment_duration: "3 meses"
      },
      before_after: {
        before: "Cansaço constante, 78kg, baixa autoestima",
        after: "Energia renovada, 66kg, confiança total"
      }
    },
    {
      id: 2,
      name: "Carlos Mendes",
      age: 52,
      location: "São Paulo, SP",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      condition: "Andropausa e Perda de Libido",
      treatment: "Terapia Hormonal Masculina",
      rating: 5,
      testimonial: `Como empresário, sempre priorizei o trabalho e negligenciei minha saúde. Aos 50 anos, me sentia um homem de 70.\n\nO Dr. Cláudio identificou meus desequilíbrios hormonais e criou um protocolo personalizado. Em 6 semanas, já sentia diferença na disposição e libido.\n\nHoje, aos 52, me sinto melhor que aos 40. Minha esposa e eu estamos muito gratos!`,
      results: {
        libido_improvement: "90%",
        energy_increase: "75%",
        treatment_duration: "4 meses"
      },
      before_after: {
        before: "Sem energia, libido baixa, irritabilidade",
        after: "Vitalidade renovada, relacionamento melhor"
      }
    },
    {
      id: 3,
      name: "Ana Costa",
      age: 38,
      location: "Muriaé, MG",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      condition: "Alergias Alimentares Severas",
      treatment: "Imunoterapia Personalizada",
      rating: 5,
      testimonial: `Sofria com alergias alimentares há mais de 10 anos. Não podia comer quase nada sem ter reações.\n\nO Dr. Cláudio fez testes detalhados e iniciou um tratamento de dessensibilização. Gradualmente, fui recuperando a capacidade de comer normalmente.\n\nHoje posso desfrutar de refeições em família sem medo. É uma liberdade que não tem preço!`,
      results: {
        allergy_reduction: "95%",
        food_tolerance: "80% dos alimentos",
        treatment_duration: "8 meses"
      },
      before_after: {
        before: "Restrições alimentares severas, isolamento social",
        after: "Alimentação normal, vida social ativa"
      }
    },
    {
      id: 4,
      name: "Roberto Santos",
      age: 41,
      location: "Praia da Costa, ES",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      condition: "Performance Esportiva",
      treatment: "Otimização Hormonal para Atletas",
      rating: 5,
      testimonial: `Como triatleta amador, sempre busquei melhorar minha performance, mas havia chegado num platô.\n\nO Dr. Cláudio analisou meus hormônios e metabolismo, criando um protocolo específico para atletas. Os resultados foram impressionantes!\n\nMelhorei meus tempos em 20% e a recuperação entre treinos ficou muito mais rápida. Recomendo para qualquer atleta sério!`,
      results: {
        performance_improvement: "20%",
        recovery_time: "50% mais rápida",
        treatment_duration: "3 meses"
      },
      before_after: {
        before: "Performance estagnada, recuperação lenta",
        after: "Novos recordes pessoais, energia constante"
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const currentTestimonialData = testimonials?.[currentTestimonial];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">Histórias de Transformação</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
              Transformadas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as histórias reais de pacientes que recuperaram sua saúde, 
            energia e qualidade de vida com nossos tratamentos personalizados
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Patient Info & Image */}
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={currentTestimonialData?.avatar}
                      alt={currentTestimonialData?.name}
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">{currentTestimonialData?.name}</h3>
                    <p className="text-white/80">{currentTestimonialData?.age} anos • {currentTestimonialData?.location}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonialData?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                  <span className="ml-2 text-white/80">({currentTestimonialData?.rating}.0)</span>
                </div>
                
                {/* Condition & Treatment */}
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Condição Inicial</div>
                    <div className="font-medium">{currentTestimonialData?.condition}</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Tratamento Realizado</div>
                    <div className="font-medium">{currentTestimonialData?.treatment}</div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentTestimonialData?.results)?.map(([key, value], index) => (
                    <div key={index} className="text-center bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent">{value}</div>
                      <div className="text-xs text-white/70 capitalize">
                        {key?.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20" />
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {currentTestimonialData?.testimonial}
                  </p>
                </div>
                
                {/* Before/After */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Transformação:</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-error/10 rounded-lg">
                        <Icon name="Minus" size={16} className="text-error" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-error mb-1">Antes</div>
                        <div className="text-sm text-gray-600">
                          {currentTestimonialData?.before_after?.before}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Icon name="Plus" size={16} className="text-success" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-success mb-1">Depois</div>
                        <div className="text-sm text-gray-600">
                          {currentTestimonialData?.before_after?.after}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? 'bg-primary scale-125' :'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-gray-600">Taxa de Satisfação</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">15.000+</div>
            <div className="text-sm text-gray-600">Vidas Transformadas</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">30+</div>
            <div className="text-sm text-gray-600">Anos de Experiência</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">4</div>
            <div className="text-sm text-gray-600">Clínicas Ativas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;