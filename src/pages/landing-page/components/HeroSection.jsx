import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import claudioAmbrosioImage from '../../../../public/img/claudio.jpg';

const HeroSection = () => {
  const [currentYear] = useState(new Date()?.getFullYear());
  const [experienceYears] = useState(currentYear - 1990); // Started practice in 1990
  const [patientsCount, setPatientsCount] = useState(0);
  const [availableSlots] = useState(3);

  useEffect(() => {
    // Animate patient counter
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

  //32988940001

const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    "Olá Dr. Cláudio! Gostaria de agendar uma consulta para discutir meus objetivos de saúde e bem-estar. Tenho interesse em conhecer os tratamentos personalizados."
  );
  const whatsappUrl = `https://wa.me/5532988940001?text=${message}`;
  window.open(whatsappUrl, '_blank');
};


  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 lg:py-0">
          
          {/* Content Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-gray-100">
              <Icon name="Award" size={16} className="text-accent mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Especialista Internacional • Harvard & Berlin
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Desperte sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                melhor versão
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transforme sua saúde com mais de{' '}
              <span className="font-semibold text-primary">{experienceYears} anos</span>{' '}
              de experiência internacional em endocrinologia e medicina preventiva
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Reequilíbrio hormonal personalizado</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Emagrecimento inteligente</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Aumento de energia e vitalidade</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-3 flex-shrink-0" />
                <span className="text-gray-700">Medicina preventiva avançada</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-250"
              >
                Agendar Consulta WhatsApp
              </Button>
              
              {/* <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Disponibilidade
              </Button> */}
            </div>

            {/* Urgency Indicator */}
            <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
              <Icon name="Clock" size={16} className="text-accent mr-2" />
              <span className="text-sm font-medium text-accent">
                Apenas {availableSlots} vagas disponíveis esta semana
              </span>
            </div>
          </div>

          {/* Doctor Image Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full transform rotate-6"></div>
              
              {/* Doctor Image */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-0 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={claudioAmbrosioImage}
                  alt="Dr. Cláudio Ambrósio - Endocrinologista"
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                />
                {/* Floating Credential Badge */}
                {/* <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-accent/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{experienceYears}+</div>
                    <div className="text-xs text-gray-600">Anos</div>
                  </div>
                </div> */}
                
                {/* Floating Patient Count */}
                <div className="absolute -bottom-4 -left-4 bg-success text-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">{patientsCount?.toLocaleString('pt-BR')}+</div>
                    <div className="text-xs opacity-90">Pacientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Award" size={24} className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{experienceYears}+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Users" size={24} className="text-primary" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{patientsCount?.toLocaleString('pt-BR')}+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
              </div>
              
              {/* <div className="flex items-center justify-center space-x-3">
                <Icon name="Calendar" size={24} className="text-success" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{availableSlots}</div>
                  <div className="text-sm text-gray-600">Vagas Esta Semana</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;