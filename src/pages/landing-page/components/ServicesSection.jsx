import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Emagrecimento Inteligente",
      subtitle: "Perda de peso personalizada e sustentável",
      icon: "Target",
      color: "from-success to-emerald-600",
      description:
        "Programa personalizado de emagrecimento baseado em análise metabólica completa, com acompanhamento médico especializado.",
      features: [
        "Análise metabólica detalhada",
        "Plano nutricional personalizado",
        "Suplementação direcionada",
        "Acompanhamento semanal",
      ],
      results: "Perda média de 8-15kg em 3 meses",
      duration: "3-6 meses",
      success_rate: "94%",
    },
    {
      id: 2,
      title: "Reposição Hormonal",
      subtitle: "Equilíbrio hormonal para homens e mulheres",
      icon: "Activity",
      color: "from-primary to-blue-600",
      description:
        "Terapia de reposição hormonal bioidentica personalizada para restaurar energia, libido e bem-estar geral.",
      features: [
        "Avaliação hormonal completa",
        "Hormônios bioidenticos",
        "Monitoramento contínuo",
        "Ajustes personalizados",
      ],
      results: "Melhora em 2-4 semanas",
      duration: "Tratamento contínuo",
      success_rate: "96%",
    },
    {
      id: 3,
      title: "Endocrinologia Avançada",
      subtitle: "Tratamento de distúrbios endócrinos",
      icon: "Stethoscope",
      color: "from-secondary to-indigo-600",
      description:
        "Diagnóstico e tratamento especializado de diabetes, tireoide, suprarrenais e outros distúrbios hormonais.",
      features: [
        "Diagnóstico preciso",
        "Tratamentos inovadores",
        "Tecnologia avançada",
        "Medicina personalizada",
      ],
      results: "Controle em 4-8 semanas",
      duration: "Conforme necessidade",
      success_rate: "92%",
    },
    {
      id: 4,
      title: "Tratamento de Alergias",
      subtitle: "Alívio definitivo de alergias e intolerâncias",
      icon: "Shield",
      color: "from-accent to-orange-600",
      description:
        "Identificação e tratamento de alergias alimentares, respiratórias e de contato com métodos modernos.",
      features: [
        "Testes alérgicos completos",
        "Imunoterapia personalizada",
        "Dessensibilização gradual",
        "Prevenção de crises",
      ],
      results: "Alívio em 6-12 semanas",
      duration: "6 meses - 2 anos",
      success_rate: "89%",
    },
    {
      id: 5,
      title: "Remodelação Corporal",
      subtitle: "Transformação física completa",
      icon: "Zap",
      color: "from-purple-500 to-purple-700",
      description:
        "Programa integrado de remodelação corporal combinando medicina estética e endocrinologia.",
      features: [
        "Análise corporal 3D",
        "Protocolos personalizados",
        "Tecnologias avançadas",
        "Resultados mensuráveis",
      ],
      results: "Mudanças visíveis em 4-6 semanas",
      duration: "3-6 meses",
      success_rate: "91%",
    },
    {
      id: 6,
      title: "Performance Esportiva",
      subtitle: "Otimização para atletas e esportistas",
      icon: "Trophy",
      color: "from-red-500 to-red-700",
      description:
        "Otimização hormonal e metabólica para melhorar performance esportiva e recuperação muscular.",
      features: [
        "Avaliação de performance",
        "Otimização hormonal",
        "Suplementação esportiva",
        "Recuperação acelerada",
      ],
      results: "Melhora de 15-30% na performance",
      duration: "3-4 meses",
      success_rate: "93%",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleWhatsAppClick = (serviceName) => {
    const message = encodeURIComponent(
      `Olá Dr. Cláudio! Tenho interesse em ${serviceName}. Poderia me informar as próximas disponibilidades para consulta?`
    );
    const whatsappUrl = `https://wa.me/5532988940001?text=${message}`; // oficial
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Stethoscope" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Especialidades Médicas
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Personalizadas
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tratamentos especializados baseados em mais de 30 anos de
            experiência internacional, com foco em resultados mensuráveis e
            duradouros
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${service?.color}`}></div>

                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service?.color} text-white shadow-lg`}
                    >
                      <Icon name={service?.icon} size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {service?.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service?.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {service?.features?.slice(0, 2)?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {service?.success_rate}
                      </div>
                      <div className="text-xs text-gray-600">
                        Taxa de Sucesso
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-secondary">
                        {service?.duration?.split(" ")?.[0]}
                      </div>
                      <div className="text-xs text-gray-600">Duração Média</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    Saiba Mais
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 lg:p-12">
            <Icon name="Calendar" size={48} className="mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para Transformar sua Saúde?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Agende uma consulta personalizada e descubra qual tratamento é
              ideal para você. Primeira avaliação com desconto especial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleWhatsAppClick("consulta inicial")}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Agendar Consulta
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                (21) 99999-9999
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedService?.title}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="p-6">
              <div
                className={`inline-flex items-center p-3 rounded-xl bg-gradient-to-r ${selectedService?.color} text-white mb-6`}
              >
                <Icon name={selectedService?.icon} size={32} />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedService?.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    O que está incluído:
                  </h4>
                  <div className="space-y-2">
                    {selectedService?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Resultados esperados:
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-success/10 rounded-lg">
                      <div className="text-sm text-gray-600">Resultados</div>
                      <div className="font-medium text-success">
                        {selectedService?.results}
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm text-gray-600">Duração</div>
                      <div className="font-medium text-primary">
                        {selectedService?.duration}
                      </div>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="text-sm text-gray-600">
                        Taxa de Sucesso
                      </div>
                      <div className="font-medium text-accent">
                        {selectedService?.success_rate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={() => handleWhatsAppClick(selectedService?.title)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-success hover:bg-success/90"
                >
                  Agendar Consulta
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSelectedService(null)}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
