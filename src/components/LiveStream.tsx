import { Wifi, Video, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LiveStream() {
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
          <div className="inline-flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-600 px-4 py-2 rounded-full mb-4">
            <Wifi className="h-4 w-4 mr-2 animate-pulse" />
            <span className="text-sm font-semibold">Wedding Live Stream</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Special Day</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let your loved ones be part of your wedding celebration from anywhere in the world with our professional live streaming service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
                alt="Wedding Live Stream"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center">
                <Video className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">Live Stream Service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Professional Wedding Live Streaming</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Video className="h-4 w-4 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">High-Quality Stream</h4>
                  <p className="text-gray-600 dark:text-gray-400">Professional HD quality streaming with multiple camera angles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Unlimited Viewers</h4>
                  <p className="text-gray-600 dark:text-gray-400">Share your special day with all your loved ones worldwide</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Recording Included</h4>
                  <p className="text-gray-600 dark:text-gray-400">Get a professional recording of your live stream</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto mt-8 inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Learn More About Live Streaming
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-16 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Stream Your Wedding?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contact us to discuss your wedding live streaming needs and get a customized quote.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Get a Quote
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}