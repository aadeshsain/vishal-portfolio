import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // For now, just log - you can replace with actual PDF download
    console.log('Resume download requested');
    alert('Resume download functionality - add your PDF link here!');
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 opacity-50"></div>
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Vishal Sain
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
              Web Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              "Crafting responsive websites with Tailwind, Laravel & Love for UI/UX"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleViewProjects}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <Eye size={20} />
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="group px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;