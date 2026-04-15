import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Bug, ShieldCheck } from 'lucide-react';

const About = () => {

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Laravel',
    'MySQL',
    'Bootstrap',
    'Git',
    'WordPress'
  ];

  const languages = [
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Working / Client Communication' }
  ];

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Building secure and scalable backend systems using PHP & Laravel'
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'PHP Bug Fixing',
      description: 'Fixing errors, debugging code and improving performance'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Login & Security Systems',
      description: 'Creating secure authentication systems with sessions & validation'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Website Development',
      description: 'Building complete websites from frontend to backend'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* 🔥 Client-focused intro */}
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a self-taught PHP Developer specializing in building secure login systems,
            fixing bugs, and developing fast, scalable web applications using PHP and Laravel.
            I help clients solve real problems and improve their website performance.
          </p>

          {/* 🔥 Trust badges */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
            <span>✔ 10+ Projects</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Clean Code</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              What I Can Do For You
            </h3>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition"
              >
                <div className="text-blue-400 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Skills */}
            <div className="bg-gray-700/30 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30 hover:bg-blue-600/30 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-700/30 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Languages
              </h3>

              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-blue-400 text-sm">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔥 CTA */}
            <div className="text-center">
              <a
                href="https://wa.me/8852929028" // अपना नंबर डाल
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
              >
                Let’s Work Together 🚀
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;