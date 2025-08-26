import React, { useState, useEffect } from 'react';

const ProgressIndicator = ({ className = '' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-80 ${className}`}>
      {/* Progress Bar Background */}
      <div className="h-1 bg-gray-200/50 backdrop-blur-sm">
        {/* Progress Bar Fill */}
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Optional Progress Text (Desktop Only) */}
      <div className="hidden lg:block absolute top-2 right-6">
        <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-100">
          <span className="text-xs font-medium text-gray-600">
            {Math.round(scrollProgress)}% concluído
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;