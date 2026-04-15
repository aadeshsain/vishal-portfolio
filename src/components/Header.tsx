import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/v-sain.pdf'; // rename file without space
    link.download = 'Vishal-Sain-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed w-full z-50 transition ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur border-b border-gray-700' : ''
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <div
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Code className="text-blue-400" />
          <span className="text-white font-bold text-lg">
            Vishal Sain
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-blue-400"
            >
              {item.name}
            </button>
          ))}

          {/* Resume */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-500 hover:text-white"
          >
            Resume
          </button>

          {/* 🔥 MAIN CTA */}
          <a
            href="https://wa.me/918852929028"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold"
          >
            Hire Me
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">

          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Download Resume
          </button>

          <a
            href="https://wa.me/918852929028"
            className="block text-center bg-green-600 text-white py-2 rounded"
          >
            💬 Hire Me on WhatsApp
          </a>

        </div>
      )}
    </header>
  );
};

export default Header;