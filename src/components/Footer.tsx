import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/vishu660'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/vishal-ittechxpert-aaa305369/'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:vishalittechxpert@gmail.com'
    }
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">

      <div className="container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Vishal Sain
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              PHP Developer specializing in bug fixing, login systems and backend development.
              I help clients solve real problems and improve their websites.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded hover:bg-gray-600 text-gray-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Contact Me
            </h4>

            <p className="text-gray-400 text-sm mb-2">
              📧 vishalittechxpert@gmail.com
            </p>

            <p className="text-gray-400 text-sm mb-4">
              📞 +91 8852929028
            </p>

            {/* 🔥 WhatsApp CTA */}
            <a
              href="https://wa.me/918852929028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded text-sm font-semibold"
            >
              💬 Chat on WhatsApp
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vishal Sain
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Vishal</span>
          </div>

        </div>

      </div>

      {/* Scroll Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
      >
        ↑
      </button>

    </footer>
  );
};

export default Footer;