import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProblemAgitationSection = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({});

  const scenarios = [
    {
      id: 1,
      title: "Fadiga Constante",
      description: "Você acorda cansado, mesmo após uma noite inteira de sono?",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      icon: "Battery",
      stats: { percentage: 78, affected: "milhões de brasileiros" },
      symptoms: [
        "Cansaço mesmo após 8h de sono",
        "Falta de energia durante o dia",
        "Dificuldade de concentração",
        "Sonolência no período da tarde"
      ],
      impact: "A fadiga crônica afeta 78% dos adultos entre 35-65 anos no Brasil"
    },
    {
      id: 2,
      title: "Ganho de Peso Inexplicável",
      description: "O peso aumenta mesmo com dieta e exercícios regulares?",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: "TrendingUp",
      stats: { percentage: 65, affected: "adultos brasileiros" },
      symptoms: [
        "Ganho de peso sem mudança na dieta",
        "Dificuldade para emagrecer",
        "Acúmulo de gordura abdominal",
        "Metabolismo lento"
      ],
      impact: "65% dos adultos brasileiros enfrentam dificuldades com controle de peso"
    },
    {
      id: 3,
      title: "Desequilíbrios Hormonais",
      description: "Mudanças de humor, irritabilidade e sintomas inexplicáveis?",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      icon: "Activity",
      stats: { percentage: 82, affected: "pessoas após os 40" },
      symptoms: [
        "Mudanças bruscas de humor",
        "Irritabilidade frequente",
        "Problemas de sono",
        "Diminuição da libido"
      ],
      impact: "82% das pessoas após os 40 anos apresentam algum desequilíbrio hormonal"
    },
    {
      id: 4,
      title: "Perda de Vitalidade",
      description: "Sente que perdeu a energia e disposição de antes?",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
      icon: "Zap",
      stats: { percentage: 71, affected: "profissionais ativos" },
      symptoms: [
        "Falta de motivação",
        "Diminuição da performance",
        "Sensação de envelhecimento precoce",
        "Perda de massa muscular"
      ],
      impact: "71% dos profissionais ativos relatam perda significativa de vitalidade"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScenario((prev) => (prev + 1) % scenarios?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate statistics
    const currentStats = scenarios?.[currentScenario]?.stats;
    let current = 0;
    const target = currentStats?.percentage;
    const increment = target / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedStats({ ...currentStats, percentage: target });
        clearInterval(timer);
      } else {
        setAnimatedStats({ ...currentStats, percentage: Math.floor(current) });
      }
    }, 20);

    return () => clearInterval(timer);
  }, [currentScenario]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-error/10 rounded-full px-4 py-2 mb-4">
            <Icon name="AlertTriangle" size={16} className="text-error mr-2" />
            <span className="text-sm font-medium text-error">Problemas Comuns</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você se identifica com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-error to-warning">
              estes sintomas?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhões de brasileiros enfrentam estes desafios diariamente. 
            A boa notícia é que existe solução especializada para cada um deles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Interactive Scenarios */}
          <div className="space-y-6">
            {scenarios?.map((scenario, index) => (
              <div
                key={scenario?.id}
                className={`cursor-pointer transition-all duration-500 ${
                  currentScenario === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setCurrentScenario(index)}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  currentScenario === index
                    ? 'bg-white border-primary shadow-xl'
                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      currentScenario === index
                        ? 'bg-primary text-white' :'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon name={scenario?.icon} size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        currentScenario === index ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {scenario?.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {scenario?.description}
                      </p>
                      
                      {currentScenario === index && (
                        <div className="space-y-2 animate-fade-in">
                          {scenario?.symptoms?.map((symptom, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-error" />
                              <span className="text-sm text-gray-700">{symptom}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {currentScenario === index && (
                      <div className="text-right">
                        <div className="text-3xl font-bold text-error">
                          {animatedStats?.percentage}%
                        </div>
                        <div className="text-xs text-gray-500 max-w-20">
                          {animatedStats?.affected}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 lg:h-80">
                <Image
                  src={scenarios?.[currentScenario]?.image}
                  alt={scenarios?.[currentScenario]?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Statistics Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {scenarios?.[currentScenario]?.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {scenarios?.[currentScenario]?.impact}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-error">
                          {animatedStats?.percentage}%
                        </div>
                        <div className="text-xs text-gray-500">
                          Prevalência
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-error to-warning h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${animatedStats?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {scenarios?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScenario(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentScenario === index
                        ? 'bg-white shadow-lg'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6">
                <Icon name="Lightbulb" size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Não precisa ser assim!
                </h3>
                <p className="text-white/90 mb-4">
                  Com o tratamento adequado, você pode recuperar sua energia, 
                  controlar seu peso e reequilibrar seus hormônios.
                </p>
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  <span className="text-sm font-medium">Descubra como na próxima seção</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitationSection;