
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Programs = () => {
  const programs = [
    {
      title: "Toddler Gym",
      ageRange: "18 months - 3 years",
      duration: "30 minutes",
      classSize: "6 students max",
      price: "$80/month",
      description: "Our gentle introduction to movement and gymnastics for our youngest athletes. Parents participate alongside their toddlers in this fun, sensory-rich environment.",
      features: [
        "Parent-child participation",
        "Sensory play activities",
        "Basic motor skill development",
        "Social interaction with peers",
        "Flexible schedule options"
      ],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
    },
    {
      title: "Little Flippers",
      ageRange: "3 - 5 years",
      duration: "45 minutes",
      classSize: "8 students max",
      price: "$95/month",
      description: "Perfect for preschoolers ready to explore gymnastics independently. Focus on listening skills, following directions, and basic gymnastics movements.",
      features: [
        "Independent participation",
        "Basic gymnastics skills",
        "Coordination development",
        "Following instructions",
        "Fun obstacle courses"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Recreational Gymnastics",
      ageRange: "6 - 12 years",
      duration: "60 minutes",
      classSize: "10 students max",
      price: "$110/month",
      description: "Our most popular program! Students learn fundamental gymnastics skills on all four Olympic events: vault, bars, beam, and floor.",
      features: [
        "All four Olympic events",
        "Progressive skill development",
        "Strength and flexibility training",
        "Age-appropriate challenges",
        "Performance opportunities"
      ],
      image: "https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=400&h=300&fit=crop"
    },
    {
      title: "Teen Gymnastics",
      ageRange: "13 - 18 years",
      duration: "75 minutes",
      classSize: "8 students max",
      price: "$125/month",
      description: "Designed for older students who want to learn gymnastics in a mature, focused environment. Great for beginners and those returning to the sport.",
      features: [
        "Age-appropriate training",
        "Flexible skill levels",
        "Strength conditioning",
        "Self-confidence building",
        "Social connections"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Competitive Team",
      ageRange: "6+ years (by invitation)",
      duration: "2-4 hours",
      classSize: "Team based",
      price: "Contact for pricing",
      description: "Our competitive program for dedicated athletes ready to take their gymnastics to the next level. Multiple training levels available.",
      features: [
        "Invitation only program",
        "Professional coaching",
        "Competition opportunities",
        "Advanced skill development",
        "Team building activities"
      ],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      title: "Adult Gymnastics",
      ageRange: "18+ years",
      duration: "60 minutes",
      classSize: "12 students max",
      price: "$120/month",
      description: "Never too late to start! Our adult program welcomes beginners and former gymnasts looking to get back into the sport in a supportive environment.",
      features: [
        "Beginner friendly",
        "No experience required",
        "Injury prevention focus",
        "Flexible modifications",
        "Supportive community"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From toddlers taking their first steps to competitive athletes reaching for gold, we have the perfect program for every gymnast
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                    <span className="text-2xl font-bold text-purple-600">{program.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{program.ageRange}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{program.duration}</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{program.classSize}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                      <Link to="/contact">
                        Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90">
            Not sure which program is right for your child? We're here to help you find the perfect fit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact">Schedule a Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/schedule">View Class Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
