import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ClinicsSection = () => {
  const [selectedClinic, setSelectedClinic] = useState(0);

  const clinics = [
    {
      id: 1,
      name: "Clínica Carpe Barra",
      city: "Rio de Janeiro",
      state: "RJ",
      address: "Estrada do Joá, 3884 - Barra da Tijuca",
      cep: "22610-142",
      phone: "(21) 2484-2484",
      whatsapp: "5532988940001", // WhatsApp oficial
      email: "contato@drclaudioambrosio.com.br",
      coordinates: { lat: -22.99914, lng: -43.27664 },
      hours: {
        weekdays: "08:00 - 18:00",
        saturday: "08:00 - 14:00",
        sunday: "Fechado",
      },
      services: [
        "Endocrinologia e Metabolismo",
        "Reposição Hormonal",
        "Emagrecimento Médico",
        "Alergias e Imunologia",
      ],
      features: [
        "Acessibilidade",
        "Atendimento personalizado",
        "Ambiente confortável",
      ],
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      available_slots: 5,
    },
    {
      id: 2,
      name: "Instituto Pompermaier",
      city: "São Paulo",
      state: "SP",
      address: "Avenida Brasil, 471 - Jardim Paulista",
      cep: "01431-000",
      phone: "(32) 98894-0001", // conforme material-base
      whatsapp: "5532988940001",
      email: "sp@drclaudioambrosio.com.br",
      coordinates: { lat: -23.56925, lng: -46.66367 },
      hours: {
        weekdays: "07:00 - 19:00",
        saturday: "08:00 - 16:00",
        sunday: "Fechado",
      },
      services: [
        "Endocrinologia",
        "Performance Esportiva",
        "Medicina Preventiva",
      ],
      features: ["Valet", "Ambiente premium"],
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      available_slots: 3,
    },
    {
      id: 3,
      name: "Clínica Spartha Mutuallite",
      city: "Muriaé",
      state: "MG",
      address: "Rua Dr. Afonso Canêdo, 124 - Centro",
      cep: "36880-000",
      phone: "(32) 3721-1412",
      whatsapp: "5532988940001",
      email: "muriae@drclaudioambrosio.com.br",
      coordinates: { lat: -21.13185, lng: -42.36805 },
      hours: {
        weekdays: "08:00 - 17:00",
        saturday: "08:00 - 12:00",
        sunday: "Fechado",
      },
      services: [
        "Consultas de Endocrinologia",
        "Alergias",
        "Medicina Preventiva",
      ],
      features: ["Atendimento acolhedor", "Telemedicina disponível"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      available_slots: 8,
    },
    {
      id: 4,
      name: "Shopping Praia da Costa",
      city: "Vila Velha",
      state: "ES",
      address: "5º andar - Torre Leste (acesso lateral do cinema)",
      cep: "29101-010",
      phone: "(27) 3071-4413",
      whatsapp: "5532988940001",
      email: "es@drclaudioambrosio.com.br",
      coordinates: { lat: -20.33005, lng: -40.29202 },
      hours: {
        weekdays: "08:00 - 18:00",
        saturday: "08:00 - 14:00",
        sunday: "Fechado",
      },
      services: ["Endocrinologia", "Reposição Hormonal", "Medicina Preventiva"],
      features: ["Localização estratégica", "Ambiente confortável"],
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      available_slots: 6,
    },
  ];

  const currentClinic = clinics?.[selectedClinic];

  const handleWhatsAppClick = (clinic) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta na ${clinic?.name} em ${clinic?.city}. Quando seria possível?`
    );
    const whatsappUrl = `https://wa.me/5532988940001?text=${message}`; // sempre o número oficial
    window.open(whatsappUrl, "_blank");
  };

  const handleDirectionsClick = (clinic) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinic?.coordinates?.lat},${clinic?.coordinates?.lng}`;
    window.open(directionsUrl, "_blank");
  };

  return (
    <section id="clinicas" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="MapPin" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">
              Nossas Localizações
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clínicas em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Todo o Brasil
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a clínica mais próxima de você e agende sua consulta. Todas
            as unidades oferecem o mesmo padrão de excelência e atendimento
            personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Clinic Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Selecione uma Clínica
            </h3>

            <div className="space-y-4">
              {clinics?.map((clinic, index) => (
                <button
                  key={clinic?.id}
                  onClick={() => setSelectedClinic(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedClinic === index
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-1 ${
                          selectedClinic === index
                            ? "text-primary"
                            : "text-gray-900"
                        }`}
                      >
                        {clinic?.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {clinic?.city}, {clinic?.state}
                      </p>
                      <p className="text-xs text-gray-500">{clinic?.address}</p>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${
                          clinic?.available_slots > 5
                            ? "text-success"
                            : clinic?.available_slots > 2
                            ? "text-warning"
                            : "text-error"
                        }`}
                      >
                        {clinic?.available_slots} vagas
                      </div>
                      <div className="text-xs text-gray-500">disponíveis</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Clinic Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Clinic Image & Header */}
              <div className="relative h-48 lg:h-64">
                <img
                  src={currentClinic?.image}
                  alt={currentClinic?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {currentClinic?.name}
                  </h3>
                  <p className="text-white/90">
                    {currentClinic?.city}, {currentClinic?.state}
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentClinic?.available_slots > 5
                        ? "bg-success text-white"
                        : currentClinic?.available_slots > 2
                        ? "bg-warning text-white"
                        : "bg-error text-white"
                    }`}
                  >
                    {currentClinic?.available_slots} vagas disponíveis
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Informações de Contato
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon
                          name="MapPin"
                          size={18}
                          className="text-secondary"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {currentClinic?.address}
                          </div>
                          <div className="text-xs text-gray-600">
                            CEP: {currentClinic?.cep}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={18} className="text-primary" />
                        <div className="text-sm text-gray-900">
                          {currentClinic?.phone}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon
                          name="MessageCircle"
                          size={18}
                          className="text-success"
                        />
                        <div className="text-sm text-gray-900">
                          WhatsApp:{" "}
                          {currentClinic?.whatsapp?.replace(
                            /(\d{2})(\d{2})(\d{5})(\d{4})/,
                            "+$1 ($2) $3-$4"
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={18} className="text-accent" />
                        <div className="text-sm text-gray-900">
                          {currentClinic?.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Horários de Funcionamento
                    </h4>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Segunda à Sexta:
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {currentClinic?.hours?.weekdays}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Sábado:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {currentClinic?.hours?.saturday}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Domingo:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {currentClinic?.hours?.sunday}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services & Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Serviços Disponíveis
                    </h4>
                    <div className="space-y-2">
                      {currentClinic?.services?.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success"
                          />
                          <span className="text-sm text-gray-700">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Diferenciais
                    </h4>
                    <div className="space-y-2">
                      {currentClinic?.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Icon name="Star" size={16} className="text-accent" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Localização
                  </h4>
                  <div className="bg-gray-100 rounded-xl overflow-hidden h-64">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={currentClinic?.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentClinic?.coordinates?.lat},${currentClinic?.coordinates?.lng}&z=15&output=embed`}
                      className="border-0"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => handleWhatsAppClick(currentClinic)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-success hover:bg-success/90 flex-1"
                  >
                    Agendar via WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleDirectionsClick(currentClinic)}
                    iconName="Navigation"
                    iconPosition="left"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Como Chegar
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    Ligar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
            <Icon
              name="Building2"
              size={32}
              className="text-primary mx-auto mb-3"
            />
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-gray-600">Clínicas Ativas</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-success/5 to-success/10 rounded-xl">
            <Icon
              name="Calendar"
              size={32}
              className="text-success mx-auto mb-3"
            />
            <div className="text-2xl font-bold text-success mb-1">22</div>
            <div className="text-sm text-gray-600">Vagas Esta Semana</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
            <Icon
              name="Clock"
              size={32}
              className="text-secondary mx-auto mb-3"
            />
            <div className="text-2xl font-bold text-secondary mb-1">24h</div>
            <div className="text-sm text-gray-600">Atendimento Emergência</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-gray-600">Profissionais</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
