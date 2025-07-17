import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.classList.add('animate-fade-in');
    }
    
    if (subheading) {
      setTimeout(() => {
        subheading.classList.add('animate-fade-in');
      }, 300);
    }
    
    if (cta) {
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with image and overlay */}
      <div className="absolute inset-0">
        <img 
          src="/Untitled design (2).jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,81,169,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.25),transparent_50%)]"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto opacity-0 transition-opacity duration-1000" ref={headingRef}>
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">
              Performance-Driven Marketing
            </span>
            <span className="block text-white mt-2">
              That <span className="text-purple-400">Dominates.</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 transition-opacity duration-1000 max-w-3xl mx-auto" ref={subheadingRef}>
            I'm Vamshi, the founder of VamceAds. Let's grow your brand with strategy, content, and results that convert.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transition-opacity duration-1000" ref={ctaRef}>
            <a 
              href="#contact" 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              Get My Free Strategy Session
            </a>
            <a 
              href="#portfolio" 
              className="group flex items-center gap-2 text-white border border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 px-8 py-4 rounded-md text-lg font-medium transition-all relative overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
          
          {/* Stats or social proof */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="hidden md:block bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gray-900 transform -skew-y-2 translate-y-12"></div>
        <div className="h-24 bg-gray-900 transform skew-y-2 translate-y-6"></div>
      </div>
    </section>
  );
};

export default Hero;