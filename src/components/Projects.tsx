import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Bug } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'SmartBlindHub (Ecommerce Website)',
      problem: 'Client needed a product showcase website with proper user experience and contact system.',
      solution: 'Built a responsive ecommerce website with clean UI, fast performance and working contact system using PHP & Laravel.',
      tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
      live: 'https://smartblindhub.com'
    },
    {
      id: 2,
      name: 'Crypto Dashboard (dlm.cash)',
      problem: 'Client needed real-time crypto price tracking system.',
      solution: 'Developed live dashboard with API integration (CoinGecko) showing real-time data and trends.',
      tech: ['PHP', 'Laravel', 'API', 'MySQL'],
      live: 'https://dlm.cash'
    },
    {
      id: 3,
      name: 'Login & Authentication System',
      problem: 'Many websites face login/security issues and session bugs.',
      solution: 'Created secure login system with validation, session handling and password protection.',
      tech: ['PHP', 'MySQL'],
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Work (Client Projects)
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects where I solved client problems using PHP, Laravel and backend development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl hover:scale-105 transition"
            >

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              {/* Problem */}
              <p className="text-red-400 text-sm mb-2">
                ❌ {project.problem}
              </p>

              {/* Solution */}
              <p className="text-green-400 text-sm mb-4">
                ✅ {project.solution}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 text-sm rounded">
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

                <a
                  href="https://wa.me/918852929028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  💬 Hire Me
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;