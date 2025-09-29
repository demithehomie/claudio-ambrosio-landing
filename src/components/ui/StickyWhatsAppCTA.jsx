import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const StickyWhatsAppCTA = ({ 
  phoneNumber = "5532988940001",
  message = "Olá Dr. Cláudio! Gostaria de agendar uma consulta para discutir meus objetivos de saúde e bem-estar.",
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-100 hidden lg:block ${className}`}>
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-success rounded-full animate-pulse-slow opacity-75"></div>
          
          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="relative bg-success hover:bg-success/90 text-white rounded-full shadow-whatsapp-hover whatsapp-cta flex items-center justify-center transition-all duration-250"
            style={{
              width: isExpanded ? '200px' : '60px',
              height: '60px'
            }}
          >
            <Icon 
              name="MessageCircle" 
              size={24} 
              className={`transition-all duration-250 ${isExpanded ? 'mr-3' : ''}`}
            />
            
            <span className={`font-semibold text-sm whitespace-nowrap transition-all duration-250 ${
              isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible w-0'
            }`}>
              Falar no WhatsApp
            </span>
          </button>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            !
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-100 lg:hidden bg-white border-t border-gray-200 shadow-2xl">
        <div className="p-4">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-success hover:bg-success/90 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 whatsapp-cta shadow-medical"
          >
            <Icon name="MessageCircle" size={24} />
            <span>Agendar Consulta no WhatsApp</span>
            <div className="bg-white/20 text-xs px-2 py-1 rounded-full">
              GRÁTIS
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyWhatsAppCTA;