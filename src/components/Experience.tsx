import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Target, MessageCircle, BookOpen } from 'lucide-react';

const Education = () => {

  const skills = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Problem Solving',
      description: 'Finding solutions for real client problems like bugs, errors and system issues'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Client Communication',
      description: 'Understanding requirements clearly and delivering exactly what client needs'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Logical Thinking',
      description: 'Writing clean and optimized backend logic using PHP & MySQL'
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Self Learning',
      description: 'Learning new tools and improving skills continuously with real projects'
    }
  ];

  const learning = [
    'PHP & Laravel Development',
    'Login & Authentication Systems',
    'API Integration (Payment / Data)',
    'Database Design (MySQL)',
    'Website Performance Optimization'
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Learning & Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a self-taught developer who learned web development by building real-world projects
            and solving practical problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >

            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" />
              <h3 className="text-2xl text-white font-semibold">
                Self-Taught Developer
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              Instead of traditional education, I focused on learning by building real projects,
              fixing bugs and working on practical problems in PHP & Laravel.
            </p>

            {/* Learning */}
            <div className="space-y-3">
              {learning.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-green-600/10 border border-green-600/20 p-3 rounded-lg">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >

            <h3 className="text-2xl text-white font-semibold mb-6">
              Core Strengths
            </h3>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-blue-400">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-medium">{skill.title}</h4>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/918852929028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
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

export default Education;