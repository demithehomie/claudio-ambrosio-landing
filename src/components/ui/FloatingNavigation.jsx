import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const FloatingNavigation = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: 'inicio',
      label: 'Início',
      icon: 'Home',
      description: 'Apresentação do Dr. Cláudio'
    },
    {
      id: 'especialidades',
      label: 'Especialidades',
      icon: 'Stethoscope',
      description: 'Serviços médicos especializados'
    },
    // {
    //   id: 'sobre',
    //   label: 'Sobre o Dr.',
    //   icon: 'GraduationCap',
    //   description: 'Credenciais e experiência'
    // },
    {
      id: 'depoimentos',
      label: 'Depoimentos',
      icon: 'MessageSquare',
      description: 'Histórias de transformação'
    },
    {
      id: 'clinicas',
      label: 'Clínicas',
      icon: 'MapPin',
      description: 'Localizações e contatos'
    },
    {
      id: 'contato',
      label: 'Contato',
      icon: 'Phone',
      description: 'Agende sua consulta'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);

      // Find active section based on scroll position
      const sections = navigationItems?.map(item => {
        const element = document.getElementById(item?.id);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return {
            id: item?.id,
            top: rect?.top + scrollPosition,
            bottom: rect?.bottom + scrollPosition
          };
        }
        return null;
      })?.filter(Boolean);

      const currentSection = sections?.find(section => 
        scrollPosition >= section?.top - 100 && 
        scrollPosition < section?.bottom - 100
      );

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-90 hidden lg:block ${className}`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-medical border border-gray-100 p-2">
          <div className="flex flex-col space-y-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-250 ${
                  activeSection === item?.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
                title={item?.description}
              >
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  className="transition-transform group-hover:scale-110"
                />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                  {item?.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-100 lg:hidden bg-primary text-white w-12 h-12 rounded-full shadow-medical flex items-center justify-center transition-all duration-250 hover:bg-primary/90"
      >
        <Icon 
          name={isMobileMenuOpen ? 'X' : 'Menu'} 
          size={20}
          className="transition-transform duration-200"
        />
      </button>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-90 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed bottom-0 left-0 right-0 z-100 lg:hidden bg-white rounded-t-3xl shadow-2xl animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Navegação</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.id}
                    onClick={() => scrollToSection(item?.id)}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                      activeSection === item?.id
                        ? 'bg-primary text-white' :'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon 
                      name={item?.icon} 
                      size={24} 
                      className="mb-2"
                    />
                    <span className="text-sm font-medium">{item?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingNavigation;