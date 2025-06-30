
import React from 'react';
import { Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (age 7)",
      rating: 5,
      text: "FlipStar has been incredible for Emma's confidence! She started in Little Flippers and now she's in recreational gymnastics. The coaches are so patient and encouraging. Emma looks forward to class every week!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Parent of twins Alex & Zoe (age 5)",
      rating: 5,
      text: "Having twins in the same program has been wonderful. The coaches know each child individually and tailor their approach. The kids have learned so much and made great friends. Best decision we made!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      role: "Parent of Sophia (age 12)",
      rating: 5,
      text: "Sophia has been with FlipStar for 4 years now and has progressed so much! The progression through levels is well-structured, and the coaches really know their stuff. She's gained strength, flexibility, and most importantly, confidence.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Wilson",
      role: "Parent of Jake (age 9)",
      rating: 5,
      text: "As a single dad, I wasn't sure about gymnastics for Jake, but the coaches made us both feel so welcome. Jake has improved his coordination and strength tremendously. The boys' program is fantastic!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jennifer Kim",
      role: "Parent of Maya (age 4)",
      rating: 5,
      text: "Maya was very shy when we started, but now she runs into class with a huge smile! The Little Flippers program is perfect for her age. She's learned to follow directions and her physical skills have improved so much.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amanda Foster",
      role: "Adult Student (age 28)",
      rating: 5,
      text: "I never thought I'd do gymnastics as an adult, but the adult class is so welcoming! It's been amazing for my fitness and flexibility. The coaches are patient and help modify everything for different skill levels.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Garcia",
      role: "Parent of Team Athlete Lily (age 13)",
      rating: 5,
      text: "Lily made the competitive team last year and we couldn't be happier with the program. The coaching is top-notch and the team atmosphere is supportive rather than cutthroat. She's thriving!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Christine Lee",
      role: "Parent of Ben (age 6)",
      rating: 5,
      text: "Ben has ADHD and the structured environment at FlipStar has been perfect for him. The coaches are understanding and know how to channel his energy positively. His focus has improved both in gym and at school.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mark Thompson",
      role: "Grandfather of Grace (age 10)",
      rating: 5,
      text: "I bring Grace to class every week and love watching her progress. The coaches treat every child with respect and encouragement. The facility is clean, safe, and well-maintained. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "State Champions" },
    { number: "4.9", label: "Average Rating" }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">What Families Say</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who have made FlipStar part of their journey
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200" />
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">See What Our Families Say</h2>
            <p className="text-xl text-gray-600">Watch real families share their FlipStar experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Parent Interview: The Johnson Family</p>
                <p className="text-sm text-gray-500">3 minutes</p>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Student Spotlight: Competitive Team</p>
                <p className="text-sm text-gray-500">5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Prompt */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Share Your FlipStar Experience</h2>
          <p className="text-xl mb-12 opacity-90">
            We'd love to hear about your family's journey with us! Your feedback helps other families discover the joy of gymnastics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://google.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Leave a Google Review
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
