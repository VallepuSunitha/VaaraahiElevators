import React from 'react';
import { Wrench, Settings, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-red-600" size={40} />,
      title: "Installation",
      description: "Complete elevator installation services for new construction and existing buildings with precision and quality.",
      features: ["New construction", "Retrofit installations", "Custom solutions", "Code compliance"]
    },
    {
      icon: <Settings className="text-red-600" size={40} />,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to ensure your elevators run smoothly and safely year-round.",
      features: ["Preventive maintenance", "Regular inspections", "Parts replacement", "Safety checks"]
    },
    {
      icon: <Zap className="text-red-600" size={40} />,
      title: "Modernization", 
      description: "Upgrade your existing elevators with the latest technology for improved performance and efficiency.",
      features: ["Control system upgrades", "Energy efficiency", "ADA compliance", "Modern aesthetics"]
    },
    {
      icon: <Shield className="text-red-600" size={40} />,
      title: "Safety Inspections",
      description: "Thorough safety inspections and certifications to meet all regulatory requirements and standards.",
      features: ["Annual inspections", "Safety certifications", "Code compliance", "Violation corrections"]
    },
    {
      icon: <Clock className="text-red-600" size={40} />,
      title: "Emergency Repair",
      description: "24/7 emergency repair services to get your elevators back in service quickly and safely.",
      features: ["24/7 availability", "Rapid response", "Expert technicians", "Quality parts"]
    },
    {
      icon: <CheckCircle className="text-red-600" size={40} />,
      title: "Consultation",
      description: "Expert consultation services to help you make informed decisions about your elevator needs.",
      features: ["System evaluation", "Cost analysis", "Upgrade planning", "Compliance guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive elevator services 
            to keep your building moving safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;