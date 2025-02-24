import { useState, useEffect } from "react";
import { Sun, Moon, ChevronDown, ChevronRight, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import FollowCursor from "../components/FollowCursor";


export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const darkMode = savedTheme === "dark";
    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop",
      title: "Elegant Portraits",
    },
    {
      image:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop",
      title: "Wedding Bliss",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580892047528-7dfd384dce65?q=80&w=1932&auto=format&fit=crop",
      title: "Cinematic Events",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cursor Effect */}
      <FollowCursor color="rgba(128, 0, 128, 0.5)" />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute bottom-6 left-6 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Badge - Professional Photography Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            <Camera className="inline-block h-4 w-4 mr-2 text-purple-600" />
            Professional Photography Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white"
        >
          Capturing <span className="text-purple-600">Life's</span> Most Precious{" "}
          <span className="text-purple-600">Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pp text-lg text-gray-200 max-w-2xl mx-auto mt-4"
        >
          Through our lens, we transform fleeting moments into timeless memories.
        </motion.p>
      </div>

      {/* Action Buttons (Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-24 flex flex-col sm:flex-row gap-4 z-10 justify-center w-full"
      >
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
        >
          View Portfolio
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 group"
        >
           Contact Now
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0, y: -10 }}
        href="#about"
        animate={{ opacity: 1, y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
        className="arrow1  absolute bottom-6 text-center  transform -translate-x-1/2 text-white"
      >
        <ChevronDown className=" arrow1 h-10 w-10 opacity-80" />
      </motion.a>
    </div>
  );
}
