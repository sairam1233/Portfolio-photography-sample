import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: 'Best Wedding Photography',
      organization: 'International Photography Awards',
      year: '2024',
    },
    {
      icon: Award,
      title: 'Excellence in Portrait Photography',
      organization: 'Professional Photographers Association',
      year: '2023',
    },
    {
      icon: Star,
      title: 'Top 10 Event Photographers',
      organization: 'Photography Magazine',
      year: '2023',
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading organizations in the photography industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card1 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{award.organization}</p>
                <p className="text-purple-600 font-semibold">{award.year}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}