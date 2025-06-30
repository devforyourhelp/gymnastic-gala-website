
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Toddler Gym",
      age: "18mo - 3yrs",
      price: "$80",
      duration: "30 min",
      popular: false,
      features: [
        "Parent-child participation",
        "Sensory play activities",
        "Basic motor skills",
        "Flexible scheduling",
        "Small class sizes (6 max)"
      ]
    },
    {
      name: "Little Flippers",
      age: "3 - 5yrs",
      price: "$95",
      duration: "45 min",
      popular: true,
      features: [
        "Independent participation",
        "Basic gymnastics skills",
        "Coordination development",
        "Fun obstacle courses",
        "Class size limit: 8 students"
      ]
    },
    {
      name: "Recreational",
      age: "6 - 12yrs",
      price: "$110",
      duration: "60 min",
      popular: true,
      features: [
        "All four Olympic events",
        "Progressive skill development",
        "Strength & flexibility training",
        "Performance opportunities",
        "Class size limit: 10 students"
      ]
    },
    {
      name: "Teen Gymnastics",
      age: "13 - 18yrs",
      price: "$125",
      duration: "75 min",
      popular: false,
      features: [
        "Age-appropriate training",
        "Flexible skill levels",
        "Strength conditioning",
        "Self-confidence building",
        "Class size limit: 8 students"
      ]
    },
    {
      name: "Adult Classes",
      age: "18+ years",
      price: "$120",
      duration: "60 min",
      popular: false,
      features: [
        "Beginner friendly",
        "No experience required",
        "Injury prevention focus",
        "Supportive community",
        "Class size limit: 12 students"
      ]
    }
  ];

  const additionalOptions = [
    {
      title: "Free Trial Class",
      price: "$0",
      description: "Perfect for new students to experience our programs",
      features: ["One-time trial", "All ages welcome", "No commitment required"]
    },
    {
      title: "Drop-in Class",
      price: "$35",
      description: "Flexible option for occasional participation",
      features: ["Single class rate", "Subject to availability", "No membership required"]
    },
    {
      title: "Sibling Discount",
      price: "10% off",
      description: "When you enroll multiple children",
      features: ["Automatic discount", "Applies to 2nd+ child", "All programs eligible"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Pricing & Memberships</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Affordable programs designed to fit your family's needs. No registration fees, flexible payment options available.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.age}</p>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{plan.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Options</h2>
            <p className="text-xl text-gray-600">Flexible choices to fit your family's needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{option.price}</div>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Flexible Payment Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Monthly Payment</h3>
              <p className="text-gray-600 mb-6">Pay month-to-month with no long-term commitment required</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cancel anytime with 30-day notice</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>No registration fees</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Automatic monthly billing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Semester Payment</h3>
              <p className="text-gray-600 mb-6">Pay for the full semester and save 5% on tuition</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>5% discount on tuition</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Guaranteed class spot</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Make-up classes included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Team Pricing */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Competitive Team Program</h2>
          <p className="text-xl mb-12 opacity-90">
            Our competitive program offers comprehensive training for dedicated gymnasts. Pricing varies by level and training hours.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Level 3-4</h3>
                <p className="text-2xl font-bold">$180/month</p>
                <p className="opacity-90">6 hours/week</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Level 5-6</h3>
                <p className="text-2xl font-bold">$240/month</p>
                <p className="opacity-90">9 hours/week</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Level 7+</h3>
                <p className="text-2xl font-bold">$320/month</p>
                <p className="opacity-90">12+ hours/week</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link to="/contact">Contact for Team Information</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
