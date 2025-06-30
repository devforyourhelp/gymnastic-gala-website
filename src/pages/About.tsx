
import React from 'react';
import { Trophy, Heart, Star, Users, Award, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const coaches = [
    {
      name: "Sarah Johnson",
      title: "Head Coach & Owner",
      experience: "15+ years",
      specialties: ["Competitive Team", "Coaching Development"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      title: "Boys Program Director",
      experience: "12 years",
      specialties: ["Men's Artistic", "Strength Training"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      title: "Recreational Coordinator",
      experience: "8 years",
      specialties: ["Toddler Programs", "Beginner Classes"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Alex Rodriguez",
      title: "Team Coach",
      experience: "10 years",
      specialties: ["Competitive Levels", "Tumbling"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "50+ State Champions", description: "Trained over 50 state-level champions" },
    { icon: Award, title: "Safety Excellence Award", description: "Recognized for outstanding safety practices" },
    { icon: Users, title: "2000+ Students Trained", description: "Helped over 2000 students learn gymnastics" },
    { icon: Star, title: "15 Years of Excellence", description: "Serving the community since 2009" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About FlipStar Gymnastics</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to nurturing young athletes and building confidence through the art of gymnastics
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                At FlipStar Gymnastics, we believe every child has the potential to soar. Our mission is to provide a safe, supportive, and fun environment where young athletes can develop physical skills, mental toughness, and lifelong friendships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Excellence in Coaching</h3>
                    <p className="text-gray-600">Our certified coaches bring passion and expertise to every class</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Individual Growth</h3>
                    <p className="text-gray-600">We celebrate each student's unique journey and achievements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Family Community</h3>
                    <p className="text-gray-600">Building lasting relationships with students and families</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="Gymnastics training" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating our success and the success of our students</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Coaches</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your child's success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{coach.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{coach.title}</p>
                  <p className="text-gray-600 mb-3">{coach.experience} experience</p>
                  <div className="space-y-1">
                    {coach.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
