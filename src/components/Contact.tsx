import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 Real working submit (email open karega)
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    window.location.href = `mailto:vishalittechxpert@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'vishalittechxpert@gmail.com',
      link: 'mailto:vishalittechxpert@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 8852929028',
      link: 'tel:+918852929028'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Punjab, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get Clients / Hire Me
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Need help with PHP bugs, login systems or website development?  
            I’m available and ready to work on your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            {/* 🔥 WhatsApp CTA */}
            <a
              href="https://wa.me/918852929028"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition"
            >
              💬 Chat on WhatsApp (Fast Reply)
            </a>

            {/* Contact Info */}
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
                <div className="text-blue-400">{info.icon}</div>
                <div>
                  <h4 className="text-white">{info.title}</h4>
                  {info.link !== '#' ? (
                    <a href={info.link} className="text-gray-400 hover:text-blue-400">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* 🔥 Trust */}
            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-600/20">
              <p className="text-sm text-gray-300">
                ✔ Available for freelance work  
                ✔ Fast delivery  
                ✔ Clean & secure code
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-gray-800/50 rounded-xl p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;