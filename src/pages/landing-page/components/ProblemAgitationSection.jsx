import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProblemAgitationSection = () => {
  const [currentScenario, setCurrentScenario] = useState(0);

  const scenarios = [
    {
      id: 1,
      title: 'Ganho de peso persistente',
      description: 'O peso aumenta ou não reduz como esperado, mesmo com esforço.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      icon: 'TrendingUp',
      symptoms: ['Dificuldade para emagrecer', 'Acúmulo de gordura abdominal', 'Metabolismo lento'],
      impact: 'O excesso de peso está ligado a alterações hormonais e metabólicas que exigem avaliação médica.',
    },
    {
      id: 2,
      title: 'Metabolismo desacelerado',
      description: 'Sensação de “corpo travado”, com lentidão na resposta aos hábitos.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      icon: 'Activity',
      symptoms: ['Fome irregular', 'Oscilações de energia', 'Sono não reparador'],
      impact: 'Ajustes clínicos podem auxiliar a reequilibrar processos metabólicos.',
    },
    {
      id: 3,
      title: 'Fadiga e baixa energia',
      description: 'Cansaço frequente e dificuldade para manter o ritmo diário.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop',
      icon: 'Battery',
      symptoms: ['Sono leve', 'Queda de disposição', 'Baixa motivação'],
      impact: 'Investigar causas hormonais e hábitos é parte do plano de cuidado.',
    },
    {
      id: 4,
      title: 'Risco cardiometabólico',
      description: 'Sinais de alerta ligados ao excesso de peso e ao estilo de vida.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      icon: 'Heart',
      symptoms: ['Pressão alterada', 'Alterações de glicose', 'Antropometria desfavorável'],
      impact: 'Intervenção médica estruturada contribui para reduzir riscos a longo prazo.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-error/10 rounded-full px-4 py-2 mb-4">
            <Icon name="AlertTriangle" size={16} className="text-error mr-2" />
            <span className="text-sm font-medium text-error">Desafios comuns</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Reconhece algum destes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-error to-warning">sinais?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O cuidado clínico adequado ajuda a reorganizar hábitos, tratar causas e acompanhar a evolução com segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {scenarios.map((sc, index) => (
              <div
                key={sc.id}
                className={`cursor-pointer transition-all duration-500 ${currentScenario === index ? 'transform scale-105' : ''}`}
                onClick={() => setCurrentScenario(index)}
              >
                <div
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    currentScenario === index ? 'bg-white border-primary shadow-xl' : 'bg-white/50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${currentScenario === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'} p-3 rounded-xl`}>
                      <Icon name={sc.icon} size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className={`${currentScenario === index ? 'text-primary' : 'text-gray-900'} text-xl font-semibold mb-2`}>
                        {sc.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{sc.description}</p>

                      {currentScenario === index && (
                        <div className="space-y-2 animate-fade-in">
                          {sc.symptoms.map((sym, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-error" />
                              <span className="text-sm text-gray-700">{sym}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={scenarios[currentScenario].image}
                  alt={scenarios[currentScenario].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{scenarios[currentScenario].title}</h4>
                        <p className="text-sm text-gray-600">{scenarios[currentScenario].impact}</p>
                      </div>
                      <div className="text-right">
                        <Icon name="Activity" size={20} className="text-primary" />
                      </div>
                    </div>

                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-error to-warning h-2 rounded-full transition-all duration-700" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex space-x-2">
                {scenarios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScenario(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentScenario === index ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6">
                <Icon name="Lightbulb" size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cuidar é um processo</h3>
                <p className="text-white/90 mb-2">
                  O plano clínico considera história, exames e rotina. O objetivo é saúde e autonomia, passo a passo.
                </p>
                <p className="text-xs text-white/70">Sem garantias de resultado. Evolução depende do quadro individual.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitationSection;
