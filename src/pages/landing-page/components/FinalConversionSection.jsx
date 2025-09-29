import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinalConversionSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    mainConcern: '',
    hasVisitedBefore: false,
  });

  const concerns = [
    'Perda de peso (obesidade)',
    'Metabolismo e energia',
    'Sono e rotina',
    'Endocrinologia clínica (ex.: tireoide, diabetes)',
    'Outro',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = () => {
    let message = 'Olá! Gostaria de agendar uma consulta.\n';
    if (formData.name) message += `Nome: ${formData.name}\n`;
    if (formData.age) message += `Idade: ${formData.age}\n`;
    if (formData.mainConcern) message += `Assunto: ${formData.mainConcern}\n`;
    message += 'Atendimento indicado para pacientes com 35+.\n';

    const whatsappUrl = `https://wa.me/5532988940001?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e) => {
    e?.preventDefault();
    handleWhatsAppClick();
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-6">
              <Icon name="Calendar" size={20} className="text-white mr-3" />
              <span className="text-white font-semibold">Agendamento pelo WhatsApp ou ligação</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Fale com a equipe</h2>

            <p className="text-xl text-white/90 mb-2">
              Atendimento indicado para pacientes com 35 anos ou mais.
            </p>
            <p className="text-sm text-white/70">Sem promessas de resultado. O plano é definido em consulta.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Como funciona</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="ClipboardList" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Avaliação clínica</h4>
                    <p className="text-white/80 text-sm">História, rotina e exames orientam o plano de cuidado.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Route" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Plano individual</h4>
                    <p className="text-white/80 text-sm">Metas realistas, ajustes periódicos e segurança.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Icon name="Repeat" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Acompanhamento</h4>
                    <p className="text-white/80 text-sm">Seguimento regular para apoiar consistência e adesão.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4">Agendar rápido</h4>
                <p className="text-white/80 mb-4">Clique para abrir o WhatsApp com uma mensagem pronta.</p>

                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-success hover:bg-success/90 text-white border-success"
                >
                  Agendar pelo WhatsApp
                </Button>

                <a
                  href="tel:32988940001"
                  className="mt-3 inline-flex items-center justify-center w-full gap-2 border border-white text-white hover:bg-white hover:text-primary rounded-lg px-6 py-3"
                >
                  <Icon name="Phone" size={20} />
                  Ligar
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulário de contato</h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input label="Nome completo" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Digite seu nome" required />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="WhatsApp" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(21) 99999-9999" required />

                  <Input
                    label="Idade (35+)"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="35"
                    min="35"
                    max="100"
                    required
                  />
                </div>

                <Input label="E-mail" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assunto principal</label>
                  <select
                    name="mainConcern"
                    value={formData.mainConcern}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Selecione</option>
                    {concerns.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Info" size={16} className="text-success" />
                    <span className="text-sm font-medium text-gray-900">Importante</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Atendimento indicado para pacientes com 35 anos ou mais.</li>
                    <li>• Sem garantias de resultado. O plano é definido em consulta.</li>
                    <li>• Agendamento pelo WhatsApp ou ligação.</li>
                  </ul>
                </div>

                <Button type="submit" variant="default" size="lg" fullWidth iconName="MessageCircle" iconPosition="left" className="bg-primary hover:bg-primary/90">
                  Enviar e abrir WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">Seus dados são utilizados apenas para contato.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalConversionSection;
