import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const Pricing = () => {
  const { emitUserAction } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      highlighted: false
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
      highlighted: true
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
      highlighted: false
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      {/* Floating elements - simplified and fixed */}
      <div className="absolute top-20 right-10 bg-white p-3 rounded-lg shadow-lg border border-gray-200 transform rotate-3 hover:rotate-0 transition-all duration-300 z-10 hidden md:block">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-gray-800 text-sm">Save 20% Annually</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-10 bg-white p-3 rounded-lg shadow-lg border border-gray-200 transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 hidden md:block">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-gray-800 text-sm">Free 14-day Trial</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 mb-8">
            <button 
              className={`px-4 py-2 rounded-l-lg font-medium transition-colors ${
                activeTab === 'monthly' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
                activeTab === 'annual' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('annual')}
            >
              Annual <span className="text-xs font-bold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 ${
                plan.highlighted 
                  ? 'transform scale-105 z-10 border-2 border-blue-500' 
                  : 'border border-gray-100 hover:border-blue-300'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-800">${plan.price[activeTab]}</span>
                  <span className="text-gray-600">/month</span>
                  {activeTab === 'annual' && (
                    <div className="text-sm text-green-600 mt-1">
                      Billed annually (${parseInt(plan.price[activeTab]) * 12})
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } transform hover:-translate-y-1`}
                onClick={() => handlePlanSelect(plan)}
              >
                Get Started
              </button>
              
              {plan.highlighted && (
                <p className="text-center text-sm text-gray-500 mt-4">No credit card required</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Feature comparison toggle */}
        <div className="mt-16 text-center">
          <button 
            className="text-blue-600 font-medium flex items-center mx-auto hover:text-blue-800 transition-colors"
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
          
          {/* Feature comparison table */}
          {showComparison && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-gray-50 border-b-2 border-gray-200">Feature</th>
                    <th className="p-3 bg-gray-50 border-b-2 border-gray-200">Starter</th>
                    <th className="p-3 bg-gray-50 border-b-2 border-gray-200 border-l border-r border-gray-200">Professional</th>
                    <th className="p-3 bg-gray-50 border-b-2 border-gray-200">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-700 border-b border-gray-200">{feature.name}</td>
                      <td className="p-3 text-center border-b border-gray-200">
                        <span className={feature.starter === '❌' ? 'text-red-500' : ''}>{feature.starter}</span>
                      </td>
                      <td className="p-3 text-center border-b border-gray-200 border-l border-r border-gray-200 bg-blue-50">
                        <span className={feature.professional === '❌' ? 'text-red-500' : feature.professional === '✅' ? 'text-green-500' : ''}>{feature.professional}</span>
                      </td>
                      <td className="p-3 text-center border-b border-gray-200">
                        <span className={feature.enterprise === '❌' ? 'text-red-500' : feature.enterprise === '✅' ? 'text-green-500' : ''}>{feature.enterprise}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade my plan later?",
                answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            onClick={() => emitUserAction('contact_sales_clicked', {})}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;