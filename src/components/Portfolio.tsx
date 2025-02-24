import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Portfolio() {
  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial', 'Family'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const portfolioItems = [
    {
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800',
      title: 'Beach Wedding',
      description: 'A beautiful celebration by the ocean',
    },
    {
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
      title: 'Studio Portrait',
      description: 'Professional studio photography',
    },
    {
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      title: 'Corporate Event',
      description: 'Business conference photography',
    },
    {
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      title: 'Product Shoot',
      description: 'Professional product photography',
    },
    {
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800',
      title: 'Family Portrait',
      description: 'Capturing family moments',
    },
    {
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
      title: 'Traditional Wedding',
      description: 'Cultural wedding photography',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Browse through our collection of professional photographs across various categories.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
              onClick={() => setSelectedImage(item.image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={selectedImage}
            alt="Selected photograph"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}

function PortfolioItem({ item, onClick }: { 
  item: { 
    image: string; 
    title: string; 
    category: string;
    description: string;
  };
  onClick: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
      onClick={onClick}
    >
      {inView && (
        <>
          {!imageLoaded && <Skeleton height="100%" />}
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-2">{item.description}</p>
              <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs">
                {item.category}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}