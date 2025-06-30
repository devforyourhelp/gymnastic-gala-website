
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What age do you start accepting students?",
          answer: "We welcome students starting at 18 months old in our Toddler Gym program. This parent-child class is perfect for introducing your little one to movement and basic motor skills in a fun, safe environment."
        },
        {
          question: "Do you offer trial classes?",
          answer: "Yes! We offer a FREE trial class for all new students. This allows your child to experience our programs and see if it's a good fit before committing to enrollment. Contact us to schedule your trial class."
        },
        {
          question: "What should my child wear to gymnastics class?",
          answer: "Comfortable athletic clothing that allows for easy movement is best. Avoid clothing with zippers, buttons, or belts. Hair should be pulled back securely. Gymnastics shoes or bare feet are preferred - no socks as they can be slippery."
        },
        {
          question: "Do I need to stay and watch my child's class?",
          answer: "For our Toddler Gym program (18mo-3yrs), parent participation is required. For all other programs, parents are welcome to watch but it's not required. We have a comfortable viewing area for parents."
        }
      ]
    },
    {
      category: "Programs & Classes",
      questions: [
        {
          question: "How do I know which program is right for my child?",
          answer: "Our programs are designed by age groups and skill levels. During your trial class, our coaches will assess your child's abilities and recommend the best program. We're also happy to discuss options during your initial consultation."
        },
        {
          question: "What's the difference between recreational and competitive gymnastics?",
          answer: "Recreational gymnastics focuses on fun, fitness, and fundamental skills with no pressure to compete. Competitive gymnastics involves more intensive training, higher skill development, and participation in meets. Students must be invited to join our competitive team program."
        },
        {
          question: "How many students are in each class?",
          answer: "Class sizes vary by program: Toddler Gym (6 max), Little Flippers (8 max), Recreational (10 max), Teen/Adult classes (8-12 max). Small class sizes ensure personalized attention for every student."
        },
        {
          question: "Can my child advance to a higher level during the year?",
          answer: "Absolutely! We evaluate students continuously and can move them to a more appropriate level when they're ready. We'll discuss any recommended changes with parents first."
        }
      ]
    },
    {
      category: "Scheduling & Attendance",
      questions: [
        {
          question: "What if my child misses a class?",
          answer: "We offer makeup classes for missed sessions due to illness or family emergencies. Makeups must be scheduled within the same month and are subject to availability in other classes of the same level."
        },
        {
          question: "Do you have classes during school holidays?",
          answer: "We typically continue regular classes during most school holidays, but we're closed on major holidays like Thanksgiving, Christmas week, and New Year's Day. We'll provide you with a full holiday schedule at enrollment."
        },
        {
          question: "Can I change my child's class time?",
          answer: "Class changes are possible based on availability. We ask for at least one week's notice, and there may be a small administrative fee for changes made after the first week of enrollment."
        },
        {
          question: "What happens if you need to cancel a class?",
          answer: "In rare cases where we must cancel (weather, facility issues), we'll notify parents as soon as possible and offer makeup options or credit toward the next month's tuition."
        }
      ]
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          question: "How does payment work?",
          answer: "We offer monthly or semester payment options. Monthly payments are due on the 1st of each month via automatic billing. Semester payments receive a 5% discount and are due at the beginning of each semester."
        },
        {
          question: "Is there a registration fee?",
          answer: "No! We don't charge registration fees. You only pay for tuition and any optional extras like team gear or special events."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We require 30 days written notice for cancellation. If you cancel mid-month, you're responsible for the full month's tuition. Semester payments are non-refundable after the first two weeks."
        },
        {
          question: "Do you offer sibling discounts?",
          answer: "Yes! We offer a 10% discount on tuition for second and additional siblings enrolled in our programs. The discount is automatically applied to your account."
        }
      ]
    },
    {
      category: "Safety & Facilities",
      questions: [
        {
          question: "What safety measures do you have in place?",
          answer: "Safety is our top priority. All coaches are certified in CPR/First Aid, we maintain low coach-to-student ratios, use professional-grade equipment, and follow USA Gymnastics safety guidelines. Our facility is regularly inspected and maintained."
        },
        {
          question: "Are parents allowed in the gym during classes?",
          answer: "For safety and to minimize distractions, parents are not allowed on the gym floor during classes (except Toddler Gym). We have a comfortable viewing area where you can watch your child's progress."
        },
        {
          question: "What equipment do you have?",
          answer: "Our facility features professional gymnastics equipment including: floor exercise area, balance beams (various heights), uneven bars, vault, rings, parallel bars, pommel horse, and foam pits for safe skill development."
        },
        {
          question: "How do you handle injuries?",
          answer: "All coaches are trained in injury prevention and response. For minor injuries, we provide basic first aid and notify parents immediately. For any serious concerns, we'll call emergency services if needed and contact parents right away."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about our programs, policies, and facilities. Can't find what you're looking for? Contact us!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const isOpen = openQuestion === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div key={questionIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-800 pr-8">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Still Have Questions?</h2>
          <p className="text-xl mb-12 opacity-90">
            We're here to help! Contact us directly and we'll be happy to answer any questions about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </a>
            <a 
              href="tel:555-123-3547"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block"
            >
              Call (555) 123-FLIP
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
