import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const { emitUserAction } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '49', annual: '39' },
      description: 'Perfect for small businesses just getting started',
      features: [
        'Basic Web Scraping',
        'WhatsApp Broadcasting (up to 1000 contacts)',
        'Basic CRM Features',
        'Email Support',
        '2 Team Members'
      ],
      highlighted: false,
      badge: 'BASIC'
    },
    {
      name: 'Professional',
      price: { monthly: '99', annual: '79' },
      description: 'Ideal for growing businesses with more needs',
      features: [
        'Advanced Web Scraping',
        'WhatsApp Broadcasting (up to 5000 contacts)',
        'Full CRM Suite',
        'Priority Email Support',
        '5 Team Members',
        'API Access',
        'Advanced Analytics'
      ],
      highlighted: true,
      badge: 'POPULAR'
    },
    {
      name: 'Enterprise',
      price: { monthly: '199', annual: '159' },
      description: 'For large organizations requiring maximum capabilities',
      features: [
        'Custom Web Scraping Solutions',
        'Unlimited WhatsApp Broadcasting',
        'Enterprise CRM Features',
        '24/7 Priority Support',
        'Unlimited Team Members',
        'Custom API Integration',
        'Advanced Analytics & Reports',
        'Dedicated Account Manager'
      ],
      highlighted: false,
      badge: 'PREMIUM'
    }
  ];

  // Feature comparison data
  const featureComparison = [
    { name: 'Web Scraping', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
    { name: 'WhatsApp Contacts', starter: '1,000', professional: '5,000', enterprise: 'Unlimited' },
    { name: 'CRM Features', starter: 'Basic', professional: 'Full Suite', enterprise: 'Enterprise' },
    { name: 'Support', starter: 'Email', professional: 'Priority Email', enterprise: '24/7 Priority' },
    { name: 'Team Members', starter: '2', professional: '5', enterprise: 'Unlimited' },
    { name: 'API Access', starter: '❌', professional: '✅', enterprise: '✅' },
    { name: 'Analytics', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced' },
    { name: 'Dedicated Manager', starter: '❌', professional: '❌', enterprise: '✅' },
  ];

  const handlePlanSelect = (plan) => {
    emitUserAction('plan_selected', { plan: plan.name, pricing: plan.price[activeTab] });
  };

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gradient-to-b from-primary-800 to-dark-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating elements - dashboard style */}
      <div className="absolute top-20 right-10 bg-dark-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-dark-700 transform rotate-3 hover:rotate-0 transition-all duration-300 z-10 hidden md:block text-white">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm">Save 20% Annually</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-10 bg-dark-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-dark-700 transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 hidden md:block">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-gray-800 text-sm">Free 14-day Trial</span>
        </div>
      </div>

      // Add social proof to pricing section
      <div className="text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div className="inline-block bg-primary-100 px-3 py-1 rounded-full text-primary-600 text-sm font-medium mb-4">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Simple Pricing
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white mt-2 mb-4">Choose Your Perfect Plan</h2>
        
        {/* Billing toggle with dashboard style */}
        <div className="flex items-center justify-center mt-8 mb-8 bg-dark-800/80 backdrop-blur-sm p-1 rounded-lg inline-flex border border-dark-700">
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'monthly' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md' 
                : 'bg-transparent text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center ${
              activeTab === 'annual' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md' 
                : 'bg-transparent text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('annual')}
          >
            Annual
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative ${
              plan.highlighted 
                ? 'bg-dark-800/90 backdrop-blur-sm text-white border border-dark-700' 
                : 'bg-white text-primary-800 border border-primary-100 hover:border-primary-300'
            } rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl ${
              plan.highlighted 
                ? 'transform scale-105 z-10' 
                : 'hover:-translate-y-2'
            } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Badge */}
            <div className={`absolute top-0 right-0 ${
              plan.highlighted 
                ? 'bg-secondary-500' 
                : 'bg-primary-600'
            } text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold`}>
              {plan.badge}
            </div>
            
            <div className="text-center">
              <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-300'} mb-2`}>{plan.name}</h3>
              <p className={`${plan.highlighted ? 'text-primary-700' : 'text-primary-600'} mb-6`}>{plan.description}</p>
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary-800'}`}>${plan.price[activeTab]}</span>
                <span className={plan.highlighted ? 'text-gray-300' : 'text-primary-600'}>/month</span>
                {activeTab === 'annual' && (
                  <div className={`text-sm ${plan.highlighted ? 'text-green-400' : 'text-green-600'} mt-1`}>
                    Billed annually (${parseInt(plan.price[activeTab]) * 12})
                  </div>
                )}
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={`flex items-center ${plan.highlighted ? 'text-gray-300' : 'text-primary-600'}`}>
                  <svg className={`w-4 h-4 ${plan.highlighted ? 'text-secondary-400' : 'text-green-500'} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-glow'
                  : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
              } transform hover:-translate-y-1`}
              onClick={() => handlePlanSelect(plan)}
            >
              Get Started
            </button>
            
            {plan.highlighted && (
              <div className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                No credit card required
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Feature comparison toggle with dashboard style */}
      <div className="mt-16 text-center">
        <button 
          className="bg-dark-800/80 backdrop-blur-sm text-white font-medium flex items-center mx-auto px-4 py-2 rounded-lg border border-dark-700 hover:bg-dark-700 transition-all"
          onClick={() => setShowComparison(!showComparison)}
        >
          {showComparison ? 'Hide' : 'Show'} Feature Comparison
          <svg 
            className={`w-5 h-5 ml-1 transition-transform ${showComparison ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Feature comparison table with dashboard style */}
        {showComparison && (
          <div className={`mt-8 overflow-x-auto transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <table className="w-full border-collapse bg-dark-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-dark-700 text-primary-700">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-dark-900 border-b border-dark-700">Feature</th>
                  <th className="p-3 bg-dark-900 border-b border-dark-700">Starter</th>
                  <th className="p-3 bg-dark-900 border-b border-dark-700 border-l border-r border-dark-700">Professional</th>
                  <th className="p-3 bg-dark-900 border-b border-dark-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-dark-800' : 'bg-dark-800/50'}>
                    <td className="p-3 font-medium text-gray-300 border-b border-dark-700">{feature.name}</td>
                    <td className="p-3 text-center border-b border-dark-700">
                      <span className={feature.starter === '❌' ? 'text-red-500' : feature.starter === '✅' ? 'text-green-500' : 'text-gray-300'}>{feature.starter}</span>
                    </td>
                    <td className="p-3 text-center border-b border-dark-700 border-l border-r border-dark-700 bg-dark-700/50">
                      <span className={feature.professional === '❌' ? 'text-red-500' : feature.professional === '✅' ? 'text-green-500' : 'text-gray-300'}>{feature.professional}</span>
                    </td>
                    <td className="p-3 text-center border-b border-dark-700">
                      <span className={feature.enterprise === '❌' ? 'text-red-500' : feature.enterprise === '✅' ? 'text-green-500' : 'text-gray-300'}>{feature.enterprise}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* FAQ Section with dashboard style */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "Can I upgrade my plan later?",
              answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle.",
              badge: "Flexibility"
            },
            {
              question: "Is there a free trial available?",
              answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
              badge: "Risk-Free"
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              badge: "Convenience"
            },
            {
              question: "Can I cancel my subscription?",
              answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              badge: "No Lock-in"
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className={`bg-dark-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-dark-700 transition-all duration-500 transform hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="absolute -top-2 -right-2 bg-dark-700/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-dark-600 transform rotate-3 hover:rotate-0 transition-all duration-300 z-10">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${
                    index === 0 ? 'bg-green-400' : 
                    index === 1 ? 'bg-blue-400' : 
                    index === 2 ? 'bg-yellow-400' : 
                    'bg-purple-400'
                  } rounded-full ${index % 2 === 0 ? 'animate-pulse' : ''}`}></div>
                  <span className="text-white text-xs">{faq.badge}</span>
                </div>
              </div>
              
              <h4 className="font-semibold text-white mb-3">{faq.question}</h4>
              <p className="text-white">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA with dashboard style */}
      <div className="mt-16 text-center">
        <p className="text-primary-600 mb-4">Still have questions?</p>
        <button 
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1 inline-flex items-center"
          onClick={() => emitUserAction('contact_sales_clicked', {})}
        >
          <span>Contact Sales</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Pricing;