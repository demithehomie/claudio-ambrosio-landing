import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import claudioAmbrosioImage from '../../../../public/img/claudio.jpg';

const HeroSection = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [experienceYears] = useState(currentYear - 1995);
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    // Contador animado puramente estético (sem promessas)
    const targetCount = 15000;
    const increment = targetCount / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setPatientsCount(targetCount);
        clearInterval(timer);
      } else {
        setPatientsCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma consulta médica para tratamento de obesidade e saúde metabólica.'
    );
    const whatsappUrl = `https://wa.me/5532988940001?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 lg:py-0">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-gray-100">
              <Icon name="Award" size={16} className="text-accent mr-2" />
              <span className="text-sm font-medium text-gray-700">Endocrinologia • Saúde Metabólica</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emagrecimento médico seguro e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                sustentável
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Acompanhamento especializado em obesidade e metabolismo, com mais de{' '}
              <span className="font-semibold text-primary">{experienceYears} anos</span> de prática clínica.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Plano médico individualizado</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Foco em obesidade e saúde metabólica</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Acompanhamento contínuo</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Sem promessas de resultado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-250"
              >
                Agendar pelo WhatsApp
              </Button>

              <a
                href="tel:32988940001"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg px-6 py-3"
                aria-label="Ligar para a clínica"
              >
                <Icon name="Phone" size={20} />
                Ligar
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-0 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={claudioAmbrosioImage}
                  alt="Dr. Cláudio Ambrósio - Endocrinologia e Saúde Metabólica"
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-success text-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">{patientsCount.toLocaleString('pt-BR')}+</div>
                    <div className="text-xs opacity-90">Atendimentos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br /><br /><br /><br /><br />    

        {/* Métricas simples (sem garantias) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Award" size={24} className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{experienceYears}+</div>
                  <div className="text-sm text-gray-600">Anos de prática clínica</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <Icon name="Users" size={24} className="text-primary" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{patientsCount.toLocaleString('pt-BR')}+</div>
                  <div className="text-sm text-gray-600">Pessoas acompanhadas</div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              Observação: resultados variam conforme perfil clínico e adesão ao plano. Não há garantias de resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
