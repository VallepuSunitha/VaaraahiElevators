import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "VaraLakshmi",
      company: "Kadapa",
      content: "Good Elevator Service.I am very Thankful to Vaaraahi Elevators.",
      rating: 5,
       image: "user symbol.jpeg"},
    {
      name: "Ramana",
      company: "Badvel",
      content: "Very Professional Team with good service.",
      rating: 5,
       image: "user symbol.jpeg"},
    {
      name: "Siva",
      company: "Proddatur",
      content: "Thank you for your Quick Response and 24/7 Service.",
      rating: 5,
       image: "user symbol.jpeg"},
    {
      name: "Dheeraj",
      company: "Pulivendula",
      content: "Vaaraahi Elevators are the best service providers in kadapa.",
      rating: 5,
      image: "user symbol.jpeg"
      },
    {
      name: "Lokesh",
      company: "Rayachoti",
      content: "I requested for full project and your team completed it within the given time thank you so much.",
      rating: 5,
       image: "user symbol.jpeg"
      },
    {
      name: "Soumya",
      company: "Kadapa",
      content: "Good and Quick Service from your team.",
      rating: 5,
      image: "user symbol.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our elevator services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="text-red-600 mb-4" size={24} />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;