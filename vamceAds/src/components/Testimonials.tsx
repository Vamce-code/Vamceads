import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, image }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "VamceAds transformed our social media presence with innovative strategies that actually converted to sales. Their team is responsive and truly understands our brand voice.",
      name: "Priya Sharma",
      position: "Founder, StyleHorizon",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with Vamshi was a game-changer for our startup. The SEO strategy they implemented helped us rank for competitive keywords within just three months.",
      name: "Rahul Mehta",
      position: "CEO, TechFusion",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The email campaigns designed by VamceAds have consistently achieved open rates above industry standards. Their attention to detail and strategic approach make them stand out.",
      name: "Aisha Khan",
      position: "Marketing Director, EcoEssentials",
      image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 bg-gray-800">
      {/* Diagonal top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gray-900 transform skew-y-2 -translate-y-8"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        {/* Desktop view - show all testimonials */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full px-4">
                      <Testimonial {...testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-900/80 rounded-full p-2"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-900/80 rounded-full p-2"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Certifications */}
        <div className={`flex flex-wrap justify-center items-center mt-16 gap-6 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gray-700/30 px-6 py-3 rounded-full text-sm font-medium">
            Google Ads Certified
          </div>
          <div className="bg-gray-700/30 px-6 py-3 rounded-full text-sm font-medium">
            Meta Blueprint Certified
          </div>
          <div className="bg-gray-700/30 px-6 py-3 rounded-full text-sm font-medium">
            HubSpot Content Marketing
          </div>
        </div>
      </div>
      
      {/* Diagonal bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-900 transform -skew-y-2 translate-y-8"></div>
    </section>
  );
};

export default Testimonials;