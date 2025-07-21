import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, MessageCircle, Brain, Target } from 'lucide-react';

const Education = () => {
  const skills = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Communication',
      description: 'Effective verbal and written communication with clients and team members'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Critical Thinking',
      description: 'Analyzing complex problems and developing innovative solutions'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Problem-Solving',
      description: 'Breaking down challenges into manageable components and finding optimal solutions'
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Self-Learning',
      description: 'Continuously learning new technologies and adapting to industry changes'
    }
  ];

  const certifications = [
    'Web Development Fundamentals',
    'Laravel Framework Mastery',
    'Responsive Web Design',
    'UI/UX Design Principles'
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Development
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My educational background and the core skills I've developed through continuous learning.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Formal Education</h3>
                  <p className="text-gray-400">Academic Foundation</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-white">12th Grade</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>2023</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Completed higher secondary education with focus on science and mathematics
                  </p>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-white">10th Grade</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>2022</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Strong foundation in core subjects with emphasis on analytical thinking
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Self-Taught Skills</h4>
                <div className="grid grid-cols-1 gap-2">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-green-600/10 rounded-lg border border-green-600/20"
                    >
                      <Award className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
                  <p className="text-gray-400">Essential Abilities</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-blue-400 mt-0.5">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">{skill.title}</h4>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learning Philosophy */}
              <div className="mt-8 p-4 bg-blue-600/10 rounded-lg border border-blue-600/20">
                <h4 className="font-semibold text-white mb-2">Learning Philosophy</h4>
                <p className="text-sm text-gray-300">
                  "Continuous learning is the key to staying relevant in the ever-evolving tech industry. 
                  I believe in learning by doing and constantly challenging myself with new technologies."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;