
import React, { useState } from 'react';
import { Calendar, Clock, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Schedule = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const scheduleData = [
    { day: 'Monday', time: '9:00 AM', program: 'Toddler Gym', age: '18mo-3yrs', level: 'beginner', instructor: 'Emma', spots: 4 },
    { day: 'Monday', time: '10:00 AM', program: 'Little Flippers', age: '3-5yrs', level: 'beginner', instructor: 'Sarah', spots: 2 },
    { day: 'Monday', time: '4:00 PM', program: 'Recreational', age: '6-8yrs', level: 'beginner', instructor: 'Mike', spots: 6 },
    { day: 'Monday', time: '5:00 PM', program: 'Recreational', age: '9-12yrs', level: 'intermediate', instructor: 'Alex', spots: 3 },
    { day: 'Monday', time: '6:00 PM', program: 'Teen Gymnastics', age: '13-18yrs', level: 'all', instructor: 'Sarah', spots: 8 },
    
    { day: 'Tuesday', time: '9:30 AM', program: 'Toddler Gym', age: '18mo-3yrs', level: 'beginner', instructor: 'Emma', spots: 5 },
    { day: 'Tuesday', time: '4:30 PM', program: 'Little Flippers', age: '3-5yrs', level: 'beginner', instructor: 'Emma', spots: 1 },
    { day: 'Tuesday', time: '5:30 PM', program: 'Recreational', age: '6-8yrs', level: 'intermediate', instructor: 'Mike', spots: 4 },
    { day: 'Tuesday', time: '6:30 PM', program: 'Adult Gymnastics', age: '18+yrs', level: 'all', instructor: 'Alex', spots: 7 },
    
    { day: 'Wednesday', time: '9:00 AM', program: 'Little Flippers', age: '3-5yrs', level: 'beginner', instructor: 'Sarah', spots: 3 },
    { day: 'Wednesday', time: '4:00 PM', program: 'Recreational', age: '6-8yrs', level: 'beginner', instructor: 'Emma', spots: 5 },
    { day: 'Wednesday', time: '5:00 PM', program: 'Recreational', age: '9-12yrs', level: 'advanced', instructor: 'Alex', spots: 2 },
    { day: 'Wednesday', time: '6:00 PM', program: 'Competitive Team', age: '6+yrs', level: 'advanced', instructor: 'Sarah', spots: 0 },
    
    { day: 'Thursday', time: '9:30 AM', program: 'Toddler Gym', age: '18mo-3yrs', level: 'beginner', instructor: 'Emma', spots: 6 },
    { day: 'Thursday', time: '4:30 PM', program: 'Little Flippers', age: '3-5yrs', level: 'intermediate', instructor: 'Mike', spots: 3 },
    { day: 'Thursday', time: '5:30 PM', program: 'Recreational', age: '6-8yrs', level: 'intermediate', instructor: 'Emma', spots: 4 },
    { day: 'Thursday', time: '6:30 PM', program: 'Teen Gymnastics', age: '13-18yrs', level: 'all', instructor: 'Alex', spots: 9 },
    
    { day: 'Friday', time: '9:00 AM', program: 'Adult Gymnastics', age: '18+yrs', level: 'all', instructor: 'Sarah', spots: 10 },
    { day: 'Friday', time: '4:00 PM', program: 'Recreational', age: '6-8yrs', level: 'beginner', instructor: 'Mike', spots: 2 },
    { day: 'Friday', time: '5:00 PM', program: 'Recreational', age: '9-12yrs', level: 'intermediate', instructor: 'Alex', spots: 1 },
    
    { day: 'Saturday', time: '9:00 AM', program: 'Little Flippers', age: '3-5yrs', level: 'beginner', instructor: 'Emma', spots: 4 },
    { day: 'Saturday', time: '10:00 AM', program: 'Recreational', age: '6-8yrs', level: 'all', instructor: 'Sarah', spots: 6 },
    { day: 'Saturday', time: '11:00 AM', program: 'Recreational', age: '9-12yrs', level: 'all', instructor: 'Mike', spots: 3 },
    { day: 'Saturday', time: '12:00 PM', program: 'Competitive Team', age: '6+yrs', level: 'advanced', instructor: 'Alex', spots: 0 },
  ];

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '18mo-3yrs', label: 'Toddlers (18mo-3yrs)' },
    { value: '3-5yrs', label: 'Preschool (3-5yrs)' },
    { value: '6-8yrs', label: 'Kids (6-8yrs)' },
    { value: '9-12yrs', label: 'Pre-teens (9-12yrs)' },
    { value: '13-18yrs', label: 'Teens (13-18yrs)' },
    { value: '18+yrs', label: 'Adults (18+)' },
  ];

  const skillLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const filteredSchedule = scheduleData.filter(item => {
    const ageMatch = selectedAge === 'all' || item.age === selectedAge;
    const levelMatch = selectedLevel === 'all' || item.level === selectedLevel || item.level === 'all';
    return ageMatch && levelMatch;
  });

  const getDaysOfWeek = () => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Class Schedule</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Find the perfect class time for your schedule. We offer classes throughout the week for all ages and skill levels.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-800">Filter Classes:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                <select 
                  value={selectedAge} 
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {ageGroups.map(group => (
                    <option key={group.value} value={group.value}>{group.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
                <select 
                  value={selectedLevel} 
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {skillLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-7 gap-6">
            {getDaysOfWeek().map(day => (
              <div key={day} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">{day}</h3>
                </div>
                
                <div className="p-4 space-y-3">
                  {filteredSchedule
                    .filter(item => item.day === day)
                    .map((item, index) => (
                      <div key={index} className="border-l-4 border-purple-500 pl-3 py-2 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.time}
                        </div>
                        <div className="font-semibold text-gray-800 mb-1">{item.program}</div>
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-2">
                            {item.age}
                          </span>
                          <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                            {item.level}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500">
                            Coach: {item.instructor}
                          </div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            item.spots === 0 ? 'bg-red-100 text-red-800' :
                            item.spots <= 3 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.spots === 0 ? 'Full' : `${item.spots} spots`}
                          </div>
                        </div>
                      </div>
                    ))}
                  
                  {filteredSchedule.filter(item => item.day === day).length === 0 && (
                    <p className="text-gray-500 text-center py-4">No classes match your filters</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join a Class?</h2>
          <p className="text-xl mb-12 opacity-90">
            Contact us to reserve your spot or schedule a free trial class to see which program is the best fit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <a href="/contact">Register for Classes</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <a href="/contact">Schedule Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
