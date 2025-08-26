import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const FinalConversionSection = () => {
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    mainConcern: "",
    preferredTime: "",
    hasVisitedBefore: false,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("dr-claudio-visited");
    if (hasVisited) {
      setIsReturningVisitor(true);
    } else {
      localStorage.setItem("dr-claudio-visited", "true");
    }

    // Countdown timer for urgency
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours?.toString()?.padStart(2, "0")}:${minutes
      ?.toString()
      ?.padStart(2, "0")}:${secs?.toString()?.padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppClick = () => {
    let message = "Olá Dr. Cláudio! ";

    if (formData?.name) message += `Meu nome é ${formData?.name}. `;

    message += isReturningVisitor
      ? "Já visitei seu site antes e gostaria de agendar uma consulta prioritária. "
      : "Gostaria de uma avaliação inicial. ";

    if (formData?.mainConcern)
      message += `Minha principal preocupação é: ${formData?.mainConcern}. `;
    if (formData?.preferredTime)
      message += `Prefiro ser atendido no período: ${formData?.preferredTime}. `;
    message += "Quando seria possível agendar?";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5532988940001?text=${encodedMessage}`; // número oficial
    window.open(whatsappUrl, "_blank");
  };

  const handleFormSubmit = (e) => {
    e?.preventDefault();
    handleWhatsAppClick();
  };

  const concerns = [
    "Fadiga e falta de energia",
    "Ganho de peso inexplicável",
    "Problemas hormonais",
    "Alergias e intolerâncias",
    "Performance esportiva",
    "Medicina preventiva",
    "Outro",
  ];

  const timePreferences = [
    "Manhã (8h-12h)",
    "Tarde (12h-18h)",
    "Noite (18h-20h)",
    "Fins de semana",
  ];

  return (
    <section
      id="contato"
      className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Header */}
          {isReturningVisitor ? (
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-warning/20 border border-warning/30 rounded-full px-6 py-3 mb-6">
                <Icon name="Clock" size={20} className="text-warning mr-3" />
                <span className="text-warning font-semibold">
                  Oferta Especial Expira em: {formatTime(timeLeft)}
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Vagas Limitadas <span className="text-accent">Esta Semana</span>
              </h2>

              <p className="text-xl text-white/90 mb-8">
                Como você já demonstrou interesse, reservamos uma vaga
                prioritária para você. Apenas 3 consultas disponíveis nos
                próximos 7 dias.
              </p>
            </div>
          ) : (
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-success/20 border border-success/30 rounded-full px-6 py-3 mb-6">
                <Icon name="Gift" size={20} className="text-success mr-3" />
                <span className="text-success font-semibold">
                  Oferta Especial para Novos Pacientes
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Avaliação Inicial <span className="text-accent">Gratuita</span>
              </h2>

              <p className="text-xl text-white/90 mb-8">
                Para novos pacientes, oferecemos uma consulta de avaliação
                completa sem custo. Descubra como podemos transformar sua saúde
                e qualidade de vida.
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Benefits & Social Proof */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">
                Por que escolher o Dr. Cláudio?
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Award" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      30+ Anos de Experiência Internacional
                    </h4>
                    <p className="text-white/80 text-sm">
                      Formação em Harvard, University of California e Berlin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Users" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      15.000+ Vidas Transformadas
                    </h4>
                    <p className="text-white/80 text-sm">
                      98% de taxa de satisfação dos pacientes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Target" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Tratamentos Personalizados
                    </h4>
                    <p className="text-white/80 text-sm">
                      Protocolos únicos baseados em análise individual
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Shield" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Resultados Comprovados
                    </h4>
                    <p className="text-white/80 text-sm">
                      Metodologia científica com acompanhamento contínuo
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4">
                  Prefere agendar rapidamente?
                </h4>
                <p className="text-white/80 mb-4">
                  Clique no botão abaixo e seja direcionado diretamente para o
                  WhatsApp
                </p>

                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-success hover:bg-success/90 text-white border-success"
                >
                  Agendar via WhatsApp Agora
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {isReturningVisitor
                    ? "Agendamento Prioritário"
                    : "Avaliação Gratuita"}
                </h3>

                <div className="text-right">
                  <div className="text-sm text-gray-600">Apenas</div>
                  <div className="text-2xl font-bold text-primary">
                    {isReturningVisitor ? "3" : "8"}
                  </div>
                  <div className="text-sm text-gray-600">vagas</div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="WhatsApp"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="(21) 99999-9999"
                    required
                  />

                  <Input
                    label="Idade"
                    type="number"
                    name="age"
                    value={formData?.age}
                    onChange={handleInputChange}
                    placeholder="35"
                    min="18"
                    max="100"
                  />
                </div>

                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Principal Preocupação
                  </label>
                  <select
                    name="mainConcern"
                    value={formData?.mainConcern}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">
                      Selecione sua principal preocupação
                    </option>
                    {concerns?.map((concern, index) => (
                      <option key={index} value={concern}>
                        {concern}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horário Preferido
                  </label>
                  <select
                    name="preferredTime"
                    value={formData?.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Selecione o horário preferido</option>
                    {timePreferences?.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span className="text-sm font-medium text-gray-900">
                      Garantias Incluídas:
                    </span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Consulta detalhada de 60 minutos</li>
                    <li>• Análise completa do seu histórico</li>
                    <li>• Plano de tratamento personalizado</li>
                    <li>• Acompanhamento pós-consulta</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  {isReturningVisitor
                    ? "Garantir Vaga Prioritária"
                    : "Agendar Avaliação Gratuita"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com suas
                  informações preenchidas. Seus dados são protegidos e não serão
                  compartilhados.
                </p>
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <Icon
                name="Clock"
                size={32}
                className="mx-auto mb-2 text-accent"
              />
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm text-white/80">Resposta Garantida</div>
            </div>

            <div>
              <Icon
                name="Shield"
                size={32}
                className="mx-auto mb-2 text-success"
              />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/80">Dados Protegidos</div>
            </div>

            <div>
              <Icon
                name="Award"
                size={32}
                className="mx-auto mb-2 text-warning"
              />
              <div className="text-2xl font-bold">CRM</div>
              <div className="text-sm text-white/80">Médico Registrado</div>
            </div>

            <div>
              <Icon
                name="Heart"
                size={32}
                className="mx-auto mb-2 text-error"
              />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/80">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalConversionSection;
