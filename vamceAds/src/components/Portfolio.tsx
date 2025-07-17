import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  delay: number;
  isInView: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, delay, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative rounded-xl overflow-hidden aspect-video transition-all duration-700 ease-out ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-purple-400 text-sm font-medium block mb-2">{category}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const portfolioItems = [
    {
      image: "https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Social Media Campaign for Tech Startup",
      category: "Social Media"
    },
    {
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "E-commerce Brand Redesign",
      category: "Branding"
    },
    {
      image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "SEO Strategy for Local Business",
      category: "SEO & SEM"
    },
    {
      image: "https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Email Marketing Campaign",
      category: "Email & WhatsApp"
    },
    {
      image: "https://images.pexels.com/photos/5077074/pexels-photo-5077074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mobile App Launch Strategy",
      category: "Marketing Strategy"
    },
    {
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Content Marketing for Finance Brand",
      category: "Content Marketing"
    },
  ];
  
  return (
    <section id="portfolio" ref={sectionRef} className="relative py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gray-700 rounded-full px-4 py-1 text-sm font-medium text-purple-400 mb-4">
            &lt; Portfolio &gt;
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Work Speaks for Tomorrow
          </h2>
          <p className="text-gray-300 text-lg">
            Built with boldness, backed by strategy. These projects showcase our approach to creating impactful digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;