import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'Tailwind CSS',
    'Laravel',
    'PHP',
    'Bootstrap',
    'Figma',
    'Git',
    'WordPress',
    'JavaScript',
    'React',
    'MySQL'
  ];

  const languages = [
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Professional' }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Designing aesthetic and user-friendly experiences'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Solutions',
      description: 'Building complete web applications from scratch'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working effectively with teams and clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
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
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A highly motivated and self-taught Web Developer with strong frontend skills and hands-on experience in Tailwind, Bootstrap, Laravel, and design tools like Figma & Canva. Passionate about creating responsive and aesthetic UI/UX experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What I Bring to the Table</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-blue-400 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-gray-700/30 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-700/30 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-blue-400 text-sm">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;