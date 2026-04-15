import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowDown } from 'lucide-react';

const Hero = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/vishal-resume.pdf'; // ✔ fixed file name
    link.download = 'vishal-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 opacity-50"></div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Vishal Sain
          </h1>

          {/* 🔥 Updated role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-3">
            PHP Developer | Bug Fix & Login System Expert
          </h2>

          {/* 🔥 Client-focused text */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I help businesses fix PHP issues, build secure login systems, and improve website performance.
          </p>

          {/* 🔥 Trust line */}
          <p className="text-sm text-gray-500 mt-2">
            10+ Projects Completed
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          {/* View Projects */}
          <button
            onClick={handleViewProjects}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center gap-2"
          >
            <Eye size={20} />
            View Projects
          </button>

          {/* Download Resume */}
          <button
            onClick={handleDownloadResume}
            className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>

          {/* 🔥 NEW: Hire Me Button */}
          <a
            href="https://wa.me/8852929028" // 🔥 अपना नंबर डाल
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm flex flex-col items-center"
        >
          <span>Scroll down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;