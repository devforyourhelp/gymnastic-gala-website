
import React, { useState } from 'react';
import { Play, X, Image as ImageIcon, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'classes',
      title: 'Toddler Gymnastics Fun',
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      type: 'image',
      category: 'events',
      title: 'Annual Showcase Performance',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      type: 'image',
      category: 'training',
      title: 'Balance Beam Practice',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      type: 'video',
      category: 'training',
      title: 'Floor Routine Training',
      src: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      type: 'image',
      category: 'classes',
      title: 'Little Flippers Class',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Competition Team Awards',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      type: 'image',
      category: 'training',
      title: 'Vault Practice',
      src: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=300&h=200&fit=crop'
    },
    {
      id: 8,
      type: 'video',
      category: 'events',
      title: 'Spring Showcase 2024',
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop'
    },
    {
      id: 9,
      type: 'image',
      category: 'classes',
      title: 'Teen Gymnastics',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      id: 10,
      type: 'image',
      category: 'training',
      title: 'Uneven Bars Training',
      src: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0bce2317e36?w=300&h=200&fit=crop'
    },
    {
      id: 11,
      type: 'video',
      category: 'classes',
      title: 'Adult Class Highlights',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop'
    },
    {
      id: 12,
      type: 'image',
      category: 'events',
      title: 'Holiday Party Fun',
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Media' },
    { value: 'classes', label: 'Classes' },
    { value: 'training', label: 'Training' },
    { value: 'events', label: 'Events' }
  ];

  const filteredMedia = mediaItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore moments of joy, achievement, and growth from our gymnastics programs. See our athletes in action!
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    filter === category.value
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map(item => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.type === 'video' ? (
                        <Play className="w-12 h-12 text-white" />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-white" />
                      )}
                    </div>
                  </div>
                  
                  {/* Media Type Badge */}
                  <div className="absolute top-2 right-2">
                    {item.type === 'video' ? (
                      <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </div>
                    ) : (
                      <div className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Photo
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full mt-2 capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMedia.title}</h3>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm capitalize">
                  {selectedMedia.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
