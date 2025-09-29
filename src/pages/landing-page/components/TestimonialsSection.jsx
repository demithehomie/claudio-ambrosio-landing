import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Maria S.',
      age: 47,
      location: 'Rio de Janeiro, RJ',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      condition: 'Obesidade e baixa energia',
      treatment: 'Programa médico de emagrecimento',
      rating: 5,
      testimonial:
        'Procurei atendimento após anos de dificuldade com o peso. Com orientação clínica, passo a passo, obtive melhora na rotina, disposição e relação com a alimentação. O acompanhamento faz diferença.',
      before_after: {
        before: 'Rotina irregular, pouca energia, peso elevado',
        after: 'Hábitos organizados, maior disposição e saúde em progresso',
      },
    },
    {
      id: 2,
      name: 'Carlos M.',
      age: 54,
      location: 'São Paulo, SP',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      condition: 'Metabolismo lento e sono ruim',
      treatment: 'Ajustes clínicos e rotina',
      rating: 5,
      testimonial:
        'Trabalho sob pressão e negligenciei meu sono e alimentação. O plano clínico me ajudou a organizar metas e revisar condutas com segurança. Evoluí com constância.',
      before_after: {
        before: 'Cansaço, sono leve, alimentação descompassada',
        after: 'Sono mais consistente, rotina ajustada e mais ânimo',
      },
    },
    {
      id: 3,
      name: 'Ana C.',
      age: 39,
      location: 'Vitória, ES',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      condition: 'Excesso de peso e desânimo',
      treatment: 'Cuidado clínico contínuo',
      rating: 5,
      testimonial:
        'A conversa franca e o acompanhamento regular me ajudaram a manter o foco. Sem promessas, com clareza e ajustes. Me sinto no caminho certo.',
      before_after: {
        before: 'Variações de humor e baixa disposição',
        after: 'Maior autocuidado e consistência nos hábitos',
      },
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[currentTestimonial];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">Relatos de pacientes</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Caminhos reais de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">cuidado</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processos clínicos com acompanhamento. Experiências individuais; os resultados variam.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white/20" />
                    <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="text-white/80">
                      {t.age} anos • {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                  <span className="ml-2 text-white/80">({t.rating}.0)</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Motivo</div>
                    <div className="font-medium">{t.condition}</div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Cuidado</div>
                    <div className="font-medium">{t.treatment}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/70 mb-1">Antes</div>
                    <div className="text-sm font-medium">{t.before_after.before}</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/70 mb-1">Depois</div>
                    <div className="text-sm font-medium">{t.before_after.after}</div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20" />
                  <div className="flex items-center space-x-2">
                    <button onClick={handlePrevious} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button onClick={handleNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-4">
                  <p className="text-gray-700 leading-relaxed">{t.testimonial}</p>
                </div>

                <p className="text-xs text-gray-500">Relatos pessoais; não configuram promessa de resultado.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
