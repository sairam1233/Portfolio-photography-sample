import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & James Johnson',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'Our wedding day was captured perfectly by Vinay Photography. The attention to detail and professionalism was outstanding. The live streaming service allowed our overseas family to be part of our special day. Every photo tells a story and brings back beautiful memories.',
      rating: 5,
      date: 'December 2023'
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'The team did an amazing job at our corporate event. They were unobtrusive yet captured all the key moments. The photos were delivered promptly and exceeded our expectations. Their professionalism and creativity made our event look spectacular.',
      rating: 5,
      date: 'January 2024'
    },
    {
      name: 'Emily & David Rodriguez',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      content: 'Having our wedding live streamed was the best decision we made! The quality was exceptional, and our relatives abroad felt like they were right there with us. The photography team was incredible, capturing every emotion and special moment perfectly.',
      rating: 5,
      date: 'February 2024'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Read about the experiences of couples and clients who trusted us with their special moments.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full"
              >
                <Quote className="h-8 w-8 text-purple-600 mb-6" />
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-purple-600 text-sm">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">{testimonial.content}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Share Your Experience
          </motion.a>
        </div>
      </div>
    </section>
  );
}