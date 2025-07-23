import React from 'react';
import { Award, Users, Calendar, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar className="text-red-600" size={30}/>, number: "8+", label: "Years Work Experience Team" },
    { icon: <Users className="text-red-600" size={30} />, number: "80+", label: "Services" },
    { icon: <Award className="text-red-600" size={30} />, number: "150+", label: "Projects Completed" },
    { icon: <Target className="text-red-600" size={30} />, number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vaaraahi Elevators has been offering elevator services with 8 years work experience team.  
                Our skilled team works hard to make every project safe, reliable, and satisfying for our customers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We focus on quality work, new ideas, and great service.  
              Whether it's installing a new lift, doing regular checkups, or fixing urgent issues —  
              we are here to help you with care and expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://img.freepik.com/premium-photo/empty-black-elevator-business-building-generative-ai_845977-3342.jpg"
              alt="Professional elevator technician"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;