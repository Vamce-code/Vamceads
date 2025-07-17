import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Vamshi Mididoddi - Founder of VamceAds" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="inline-block bg-gray-800 rounded-full px-4 py-1 text-sm font-medium text-purple-400 mb-4">
              &lt; About_Me &gt;
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bold vision. <span className="text-purple-400">Fresh approach.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hey! I'm Vamshi Mididoddi, founder of VamceAds — a digital marketing agency built with purpose. I may be new to the scene, but I'm bringing bold strategies, relentless energy, and a vision to help businesses dominate online.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My approach combines cutting-edge techniques with proven marketing principles. Whether you're starting fresh or need to revitalize your digital presence, I'm here to transform your vision into measurable results.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-teal-500/20 transition-all transform hover:-translate-y-1"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;