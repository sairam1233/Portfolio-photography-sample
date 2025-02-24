import React from 'react';
import { Users, Camera, Building2, Gift, Baby, ShoppingBag } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Wedding Photography',
      description: 'Capture your special day with our professional wedding photography services. We cover pre-wedding shoots, ceremonies, and receptions.',
      price: 'Starting from $1,999'
    },
    {
      icon: Camera,
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals, families, and corporate headshots. Perfect for social media, websites, or personal use.',
      price: 'Starting from $299'
    },
    {
      icon: Building2,
      title: 'Event Photography',
      description: 'Complete coverage of corporate events, conferences, parties, and social gatherings with quick turnaround time.',
      price: 'Starting from $599'
    },
    {
      icon: Gift,
      title: 'Special Occasions',
      description: 'Birthday parties, anniversaries, graduations, and other milestone events captured beautifully.',
      price: 'Starting from $399'
    },
    {
      icon: Baby,
      title: 'Maternity & Newborn',
      description: 'Cherish the precious moments of pregnancy and early parenthood with our specialized photography packages.',
      price: 'Starting from $449'
    },
    {
      icon: ShoppingBag,
      title: 'Commercial Photography',
      description: 'Professional product photography and commercial shoots for businesses and brands.',
      price: 'Starting from $799'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Photography Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of professional photography services to meet your needs. Each service is tailored to capture your special moments perfectly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <p className="text-purple-600 font-semibold">{service.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}