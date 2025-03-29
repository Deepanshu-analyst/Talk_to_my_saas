import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'This ERP system has transformed how we manage our business. The web scraping and WhatsApp marketing features have helped us grow our customer base significantly.',
      image: '/images/testimonial-1.jpg',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, Global Trade Co.',
      content: 'The comprehensive suite of business applications has streamlined our operations. The support team is incredibly responsive and helpful.',
      image: '/images/testimonial-2.jpg',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, Innovation Labs',
      content: 'The WhatsApp marketing features have revolutionized our customer engagement. We\'ve seen a 300% increase in response rates since implementing this solution.',
      image: '/images/testimonial-3.jpg',
      rating: 4
    }
  ];

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-gradient-to-b from-primary-800 to-dark-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">Trusted by businesses worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-primary-100 hover:border-primary-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 text-lg">{testimonial.name}</h3>
                  <p className="text-primary-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-primary-700 italic mb-6">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-primary-300'}`}
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Client logos section with animations */}
        <div className={`mt-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-center text-primary-500 mb-8 text-sm uppercase tracking-wider">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${num * 100}ms` }}
              >
                <img 
                  src={`/images/company-logo-${num}.svg`} 
                  alt={`Company ${num}`} 
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;