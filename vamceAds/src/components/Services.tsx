import React, { useRef } from 'react';
import { Instagram, Search, Palette, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, isInView }) => {
  return (
    <div 
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-700 ease-out ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="services" ref={sectionRef} className="relative py-20 bg-gray-900">
      {/* Diagonal top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gray-800 transform -skew-y-2 -translate-y-8"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 text-sm font-medium text-purple-400 mb-4">
            &lt; Services &gt;
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We offer 360° digital marketing services tailored for growth
          </h2>
          <p className="text-gray-300 text-lg">
            Comprehensive solutions designed to elevate your brand and drive measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Instagram className="h-6 w-6 text-white" />}
            title="Social Media Marketing"
            description="Reels, ads & content that create buzz and build your brand in today's competitive landscape."
            delay={100}
            isInView={isInView}
          />
          <ServiceCard 
            icon={<Search className="h-6 w-6 text-white" />}
            title="SEO & SEM"
            description="Rank higher. Get found. Get leads. Strategies that make your business visible to potential customers."
            delay={200}
            isInView={isInView}
          />
          <ServiceCard 
            icon={<Palette className="h-6 w-6 text-white" />}
            title="Branding & Content"
            description="Logo, visuals & voice that make your business unforgettable in a crowded marketplace."
            delay={300}
            isInView={isInView}
          />
          <ServiceCard 
            icon={<Mail className="h-6 w-6 text-white" />}
            title="Email & WhatsApp"
            description="Engage directly. Convert faster. Build relationships that turn prospects into loyal customers."
            delay={400}
            isInView={isInView}
          />
        </div>
      </div>
      
      {/* Diagonal bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 transform skew-y-2 translate-y-8"></div>
    </section>
  );
};

export default Services;