import React, { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.5 });
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 24,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="cta" ref={sectionRef} className="relative py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 shadow-xl shadow-purple-500/5">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Dominate the Digital World?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free strategy call and let's create something unstoppable.
              </p>
              
              {/* Timer */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-gray-800/80 px-4 py-3 rounded-lg text-center min-w-[80px]">
                  <span className="block text-2xl font-bold">{timeLeft.days}</span>
                  <span className="text-gray-400 text-sm">Days</span>
                </div>
                <div className="bg-gray-800/80 px-4 py-3 rounded-lg text-center min-w-[80px]">
                  <span className="block text-2xl font-bold">{timeLeft.hours}</span>
                  <span className="text-gray-400 text-sm">Hours</span>
                </div>
                <div className="bg-gray-800/80 px-4 py-3 rounded-lg text-center min-w-[80px]">
                  <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-gray-400 text-sm">Minutes</span>
                </div>
                <div className="bg-gray-800/80 px-4 py-3 rounded-lg text-center min-w-[80px]">
                  <span className="block text-2xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-gray-400 text-sm">Seconds</span>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1"
              >
                Start Now
              </a>
              
              <p className="text-gray-400 mt-6">
                Limited slots available this week.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Personalized Strategy</h3>
                <p className="text-gray-400 text-sm">Custom-tailored to your specific business goals</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-bold mb-2">30-Min Discovery Call</h3>
                <p className="text-gray-400 text-sm">No commitment, just valuable insights and ideas</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Actionable Next Steps</h3>
                <p className="text-gray-400 text-sm">Clear path forward whether you work with us or not</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;