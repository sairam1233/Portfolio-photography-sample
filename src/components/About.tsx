import React from 'react';
import { Camera, Heart, Star, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Camera, label: 'Photo Sessions', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '500+' },
    { icon: Star, label: 'Awards Won', value: '15+' },
    { icon: Users, label: 'Team Members', value: '8' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Capturing Life's Beautiful Moments</h2>
            <p className="text-gray-600 dark:text-gray-300">
              With over a decade of experience in photography, we've mastered the art of storytelling through our lens. Our passion lies in capturing authentic moments that tell your unique story.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that every moment is worth capturing, and every story deserves to be told beautifully. Our team of professional photographers brings creativity, technical expertise, and a keen eye for detail to every shoot.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="font-bold text-2xl">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80"
                alt="Wedding photography"
                className="rounded-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581574919402-5b7d733224d6?auto=format&fit=crop&q=80"
                alt="Portrait photography"
                className="rounded-lg h-40 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                alt="Event photography"
                className="rounded-lg h-40 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80"
                alt="Family photography"
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}