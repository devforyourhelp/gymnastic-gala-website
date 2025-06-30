
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            FlipStar Gymnastics
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Where Dreams Take Flight and Champions Are Born
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">Book Your Trial Class</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
              <Link to="/programs">View Our Classes</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose FlipStar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, we've helped thousands of children discover their potential through gymnastics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Coaches</h3>
              <p className="text-gray-600">
                Our certified coaches bring years of competitive experience and a passion for teaching
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Class Sizes</h3>
              <p className="text-gray-600">
                Maximum 8 students per class ensures personalized attention for every gymnast
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Safe Environment</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and safety protocols ensure a secure learning environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Class Overview */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Programs</h2>
          <p className="text-xl mb-12 opacity-90">From tiny tots to competitive athletes, we have programs for every age and skill level</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Toddler Gym</h3>
              <p className="text-sm opacity-90">Ages 18mo-3yrs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Little Flippers</h3>
              <p className="text-sm opacity-90">Ages 3-5yrs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Recreational</h3>
              <p className="text-sm opacity-90">Ages 6-18yrs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Competitive</h3>
              <p className="text-sm opacity-90">Team Program</p>
            </div>
          </div>
          
          <Button asChild className="mt-12 bg-white text-purple-600 hover:bg-gray-100" size="lg">
            <Link to="/programs">
              View All Programs <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join hundreds of families who have discovered the joy of gymnastics at FlipStar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">Schedule Your Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <Link to="/schedule">View Class Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
