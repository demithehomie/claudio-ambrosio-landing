import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Sobre o Dr.", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Clínicas", href: "#clinicas" },
    { name: "Contato", href: "#contato" },
  ];

  const services = [
    "Emagrecimento Inteligente",
    "Reposição Hormonal",
    "Endocrinologia Avançada",
    "Tratamento de Alergias",
    "Remodelação dos Glúteos",
    "Performance Esportiva",
  ];

  const clinics = [
    {
      name: "Rio de Janeiro (Barra da Tijuca)",
      address: "Estrada do Joá, 3884 - Barra da Tijuca",
      phone: "32988940001",
    },
    {
      name: "São Paulo (Jardim Paulista)",
      address: "Avenida Brasil, 471 - Jardim Paulista",
      phone: "32988940001",
    },
    {
      name: "Muriaé (MG)",
      address: "Rua Dr. Afonso Canêdo, 124 - Centro",
      phone: "32988940001",
    },
    {
      name: "Vitória (ES)",
      address:
        "Clínica Riva - Av Nossa Senhora dos Navegantes 675, Salas 414 à 417,(Edifício palácio do Café),Enseada do Suá",
      phone: "32988940001",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" },
  ];

  const handleScrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Dr. Cláudio! Gostaria de agendar uma consulta. Quando seria possível?"
    );
    const whatsappUrl = `https://wa.me/5532988940001?text=${message}`; // oficial
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Dr. Cláudio Ambrósio
              </h3>
              <p className="text-gray-400">
                Endocrinologista com formação internacional
              </p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Mais de 30 anos dedicados à transformação da saúde e qualidade de
              vida, com formação em Harvard, University of California e Berlin.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScrollToSection(link?.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Clinics */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Nossas Clínicas
            </h4>
            <div className="space-y-4">
              {clinics?.map((clinic, index) => (
                <div key={index} className="text-sm">
                  <h5 className="font-medium text-white mb-1">
                    {clinic?.name}
                  </h5>
                  <p className="text-gray-400 mb-1">{clinic?.address}</p>
                  <p className="text-gray-300">{clinic?.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h4 className="text-xl font-bold text-white mb-2">
                  Precisa de Atendimento Urgente?
                </h4>
                <p className="text-white/90">
                  Entre em contato conosco via WhatsApp para agendamento
                  prioritário
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  WhatsApp
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
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Dr. Cláudio Ambrósio. Todos os direitos
                reservados.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Código de Ética Médica
              </a>
            </div>
          </div>

          {/* Medical Disclaimers */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-2">
                CRM-RJ 12345678 | Especialista em Endocrinologia e Metabologia
              </p>
              <p className="text-gray-500 text-xs">
                Este site não substitui uma consulta médica. Sempre procure
                orientação médica profissional para diagnóstico e tratamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
