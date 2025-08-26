import React, { useEffect, useRef, useState } from 'react';

const SectionTransitionController = ({ 
  children, 
  sectionId,
  animationType = 'fade-up',
  threshold = 0.1,
  className = ''
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => {
      if (sectionRef?.current) {
        observer?.unobserve(sectionRef?.current);
      }
    };
  }, [threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'section-transition';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'slide-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slide-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isVisible ? '100ms' : '0ms'
      }}
    >
      {children}
    </div>
  );
};

// Higher-order component for easy section wrapping
export const withSectionTransition = (WrappedComponent, options = {}) => {
  return React.forwardRef((props, ref) => (
    <SectionTransitionController
      sectionId={options?.sectionId || props?.sectionId}
      animationType={options?.animationType || props?.animationType}
      threshold={options?.threshold || props?.threshold}
      className={options?.className || props?.className}
    >
      <WrappedComponent {...props} ref={ref} />
    </SectionTransitionController>
  ));
};

// Pre-configured section components for common use cases
export const HeroSection = ({ children, className = '', ...props }) => (
  <SectionTransitionController
    sectionId="inicio"
    animationType="fade-in"
    threshold={0.2}
    className={`min-h-screen ${className}`}
    {...props}
  >
    {children}
  </SectionTransitionController>
);

export const ContentSection = ({ children, sectionId, className = '', ...props }) => (
  <SectionTransitionController
    sectionId={sectionId}
    animationType="fade-up"
    threshold={0.1}
    className={`py-16 lg:py-24 ${className}`}
    {...props}
  >
    {children}
  </SectionTransitionController>
);

export const TestimonialSection = ({ children, className = '', ...props }) => (
  <SectionTransitionController
    sectionId="depoimentos"
    animationType="scale"
    threshold={0.1}
    className={`py-16 lg:py-24 ${className}`}
    {...props}
  >
    {children}
  </SectionTransitionController>
);

export default SectionTransitionController;