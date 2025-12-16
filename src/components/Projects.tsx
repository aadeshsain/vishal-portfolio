import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, TrendingUp, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'SmartBlindHub.com',
      techStack: ['Laravel', 'Bootstrap', 'PHP', 'MySQL'],
      description: 'A comprehensive product showcase website with responsive design and integrated contact form. Features modern UI/UX with smooth animations and mobile-first approach.',
      liveUrl: 'https://smartblindhub.com',
      codeUrl: '#',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 2,
      name: 'Dlm.cash',
      techStack: ['Laravel', 'Bootstrap', 'PHP', 'MySQL', 'CSS3'],
      description: 'Real-time cryptocurrency price dashboard with interactive charts and market data. Integrated with CoinGecko API for live price updates and trend analysis.',
      liveUrl: 'https://dlm.cash',
      codeUrl: '#',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500'
    },
    // {
    //   id: 3,
    //   name: 'E-Commerce Platform',
    //   techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   description: 'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include cart management and order tracking.',
    //   liveUrl: '#',
    //   codeUrl: '#',
    //   icon: <Code className="w-6 h-6" />,
    //   color: 'from-orange-400 to-red-500',
    //   comingSoon: true
    // },
    // {
    //   id: 4,
    //   name: 'Design Portfolio',
    //   techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    //   description: 'Collection of UI/UX design projects including mobile apps, web interfaces, and branding materials. Showcases design thinking and user-centered approach.',
    //   liveUrl: '#',
    //   codeUrl: '#',
    //   icon: <Palette className="w-6 h-6" />,
    //   color: 'from-teal-400 to-cyan-500',
    //   comingSoon: true
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {project.comingSoon && (
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (project.liveUrl !== '#') {
                        window.open(project.liveUrl, '_blank');
                      } else {
                        console.log(`Live preview for ${project.name}`);
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      project.comingSoon 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                    }`}
                    disabled={project.comingSoon}
                  >
                    <ExternalLink size={16} />
                    {project.comingSoon ? 'Coming Soon' : 'Live Preview'}
                  </button>
                  
                  <button
                    onClick={() => {
                      if (project.codeUrl !== '#') {
                        window.open(project.codeUrl, '_blank');
                      } else {
                        console.log(`View code for ${project.name}`);
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      project.comingSoon 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white hover:scale-105'
                    }`}
                    disabled={project.comingSoon}
                  >
                    <Github size={16} />
                    View Code
                  </button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;