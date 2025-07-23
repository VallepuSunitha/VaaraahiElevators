import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Vaaraahi <span className="text-red-300">Elevators</span> <br/>Elevating Your 
              <span className="text-red-300"> Building</span> Experience
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              We provide expert elevator installation, maintenance, and modernization services.  
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-red-500 hover:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </button>
              
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center">
                <Clock className="text-red-300 mr-2" size={20} />
                <span className="text-sm text-red-100">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center">
                <Award className="text-red-300 mr-2" size={20} />
                <span className="text-sm text-red-100">8+ Years Work Experience Team</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://www.etiquetteschoolofamerica.com/wp-content/uploads/2013/09/Going-Up__-The-Top-7-Savvy-Tips-for-Riding-Elevators-scaled.jpeg"
              alt="Modern elevator interior"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;