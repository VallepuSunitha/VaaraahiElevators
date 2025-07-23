import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold">Vaaraahi Elevators</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Professional elevator services with 5+ years work experience team. 
              Safety, reliability, and customer satisfaction guaranteed.
            </p>
            {/* <div className="flex space-x-2">
              <div className="bg-red-600 p-2 rounded">
                <Phone size={16} />
              </div>
              <div className="bg-red-600 p-2 rounded">
                <Mail size={16} />
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Elevator Installation</li>
              <li>Maintenance & Repair</li>
              <li>Modernization</li>
              <li>Safety Inspections</li>
              <li>Emergency Service</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="text-red-400 mr-2 mt-1" size={16} />
                <div className="text-sm text-gray-300">
                  <div>+91 9177206440</div>
                  <div>+91 9182022800</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-red-400 mr-2 mt-1" size={16} />
                <div className="text-sm text-gray-300">
                  vaaraahielevators@gmail.com
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-red-400 mr-2 mt-1" size={16} />
                <div className="text-sm text-gray-300">
                  Sabhapathiroad, <br/>
                  Jahnavi purified drinking water<br />
                  Ngo colony, Kadapa, 516001
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-red-400 mr-2 mt-1" size={16} />
                <div className="text-sm text-gray-300">
                  24/7 Emergency Service
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vaaraahi Elevators. All rights reserved. Elevator Contractor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;