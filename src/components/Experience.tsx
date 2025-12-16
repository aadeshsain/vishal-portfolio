import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Palette, Users, Target } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Frontend Development',
      description: 'Building responsive websites using Tailwind CSS and Bootstrap'
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'UI/UX Design',
      description: 'Creating wireframes and prototypes in Figma for client projects'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Client Collaboration',
      description: 'Working directly with clients to understand requirements and deliver solutions'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Full-Stack Development',
      description: 'Developing complete web applications using PHP and Laravel framework'
    }
  ];

  const achievements = [
    // 'Successfully delivered 15+ client projects',
    'Improved website load times by 40% through optimization',
    'Developed reusable component library',
    'Mentored 2 junior developers'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My journey in web development, working on real projects and collaborating with teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">ItTechXpert</h3>
                  <p className="text-lg text-blue-400 font-medium">Web Developer</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end text-gray-400">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>2024 - 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote / Freelance</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                Working on freelance and real-world projects, focusing on creating exceptional user experiences 
                through modern web technologies. Responsible for the complete development lifecycle from 
                wireframing to deployment.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-6">Key Responsibilities</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="text-blue-400 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-green-600/10 rounded-lg border border-green-600/20"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-300">{achievement}</span>
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

export default Experience;