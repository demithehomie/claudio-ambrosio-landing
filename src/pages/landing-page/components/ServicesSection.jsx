import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Programa Médico de Emagrecimento',
      subtitle: 'Tratamento clínico da obesidade e da saúde metabólica',
      icon: 'Target',
      color: 'from-success to-emerald-600',
      description:
        'Plano médico individualizado para perda de peso segura, baseado em avaliação clínica, exames e rotina do paciente.',
      features: ['Anamnese e exames direcionados', 'Orientação nutricional clínica', 'Acompanhamento periódico', 'Ajustes de conduta com segurança'],
    },
    {
      id: 2,
      title: 'Reequilíbrio Hormonal',
      subtitle: 'Avaliação de eixos hormonais com condução clínica',
      icon: 'Activity',
      color: 'from-primary to-blue-600',
      description:
        'Investigação e condução clínica de eixos hormonais ligados a energia, composição corporal e sono, com foco em segurança.',
      features: ['Avaliação laboratorial completa', 'Conduta clínica individualizada', 'Monitoramento de sinais e sintomas', 'Revisões programadas'],
    },
    {
      id: 3,
      title: 'Endocrinologia Clínica',
      subtitle: 'Cuidados em distúrbios endócrinos',
      icon: 'Stethoscope',
      color: 'from-secondary to-indigo-600',
      description:
        'Acompanhamento de quadros como diabetes, tireoide e outros distúrbios endócrinos, com foco em educação e adesão.',
      features: ['Diagnóstico e condução clínica', 'Educação em saúde', 'Metas realistas', 'Seguimento contínuo'],
    },
    {
      id: 4,
      title: 'Performance e Saúde Metabólica',
      subtitle: 'Rotina, recuperação e consistência',
      icon: 'Trophy',
      color: 'from-red-500 to-red-700',
      description:
        'Estratégias clínicas para melhorar rotina, recuperação e consistência de treino dentro de parâmetros seguros.',
      features: ['Avaliação de performance e rotina', 'Planejamento clínico individual', 'Atenção ao sono e recuperação', 'Revisão de metas'],
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleWhatsAppClick = (context) => {
    const msg = context
      ? `Olá! Gostaria de agendar consulta sobre: ${context}.`
      : 'Olá! Gostaria de agendar uma consulta.';
    const whatsappUrl = `https://wa.me/5532988940001?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Stethoscope" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Especialidades</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cuidado clínico{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">personalizado</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protocolos sob medida para cada pessoa. Sem promessas, com orientação clara e acompanhamento próximo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer" onClick={() => handleServiceClick(service)}>
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                      <Icon name={service.icon} size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    Ver detalhes
                  </Button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 lg:p-12">
            <Icon name="Calendar" size={48} className="mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Agende pelo WhatsApp. Atendimento indicado para pacientes com 35 anos ou mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleWhatsAppClick('Programa Médico de Emagrecimento')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Agendar pelo WhatsApp
              </Button>

              <a
                href="tel:32988940001"
                className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-primary rounded-lg px-6 py-3"
              >
                <Icon name="Phone" size={20} />
                Ligar
              </a>
            </div>

            <p className="text-xs text-white/70 mt-4">Sem garantias de resultado. Plano definido em consulta.</p>
          </div>
        </div>
      </div>

      {/* Modal de detalhes */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
              <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className={`inline-flex items-center p-3 rounded-xl bg-gradient-to-r ${selectedService.color} text-white mb-6`}>
                <Icon name={selectedService.icon} size={32} />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Observações:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      Evoluções são individuais. Não há garantias de resultados.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      Condutas e revisões são definidas em consulta, conforme quadros e exames.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={() => handleWhatsAppClick(selectedService.title)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-success hover:bg-success/90"
                >
                  Agendar pelo WhatsApp
                </Button>

                <Button variant="outline" size="lg" onClick={() => setSelectedService(null)}>
                  Fechar
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4">Atendimento indicado para pacientes com 35 anos ou mais.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
