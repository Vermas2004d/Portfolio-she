import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass-card group overflow-hidden border-white/5 flex flex-col h-full hover:border-neonBlue/30 shadow-xl"
    >
      {/* Decorative Image Area */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neonPurple/20 to-neonBlue/20">
        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50 group-hover:scale-125 transition-transform duration-500">
          {project.icon}
        </div>
        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <a href={project.gitHubLink} className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-neonBlue transition-colors group/btn">
            <FiGithub /> Source Code
          </a>
          <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-neonBlue/20 hover:text-neonBlue transition-all">
            <FiExternalLink />
          </a> 
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Disaster Management App',
      description: 'A robust platform for real-time incident reporting, volunteer coordination, and relief management with automated alerts.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      icon: '🌊',
      gitHubLink: 'https://github.com/tan-she/Disaster_Management_'
    },
    {
      title: 'Clean Earth Dashboard',
      description: 'Sustainability dashboard for waste management featuring AI-based classification and real-time carbon footprint tracking.',
      tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      icon: '🌍',
      gitHubLink: 'https://github.com/tan-she/Waste-Management'
    },
    {
      title: 'AI Performance Analyzer',
      description: 'System monitoring tool that uses predictive analytics to detect CPU/Memory bottlenecks and optimize OS performance.',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      icon: '⚡',
      gitHubLink: 'https://github.com/tan-she/AI-powered-performance-Analyzer-for-OS-Processes-'
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonBlue rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md">
            Here are some of my recent works where I've combined intelligent logic with modern design patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
