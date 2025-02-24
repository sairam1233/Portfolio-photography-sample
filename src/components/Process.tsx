import { Calendar, Camera, Image, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book a Session',
      description: 'Choose your preferred date and photography package that suits your needs.',
      features: ['Online booking system', 'Flexible scheduling', 'Package customization'],
    },
    {
      icon: Camera,
      title: 'Photo Session',
      description: 'We capture your special moments with our professional photography expertise.',
      features: ['Expert guidance', 'Multiple locations'],
    },
    {
      icon: Image,
      title: 'Post-Processing',
      description: 'Your photos are carefully edited to ensure the highest quality results.',
      features: ['Color correction', 'Retouching', 'Creative effects'],
    },
    {
      icon: Send,
      title: 'Delivery',
      description: 'Receive your beautifully edited photos in both digital and print formats.',
      features: ['Online gallery', 'High-resolution files', 'Print options'],
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth and enjoyable photography experience from start to finish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="card bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-200 dark:bg-purple-800" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}