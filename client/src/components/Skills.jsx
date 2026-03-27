import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiDocker, 
  SiTailwindcss, SiGit, SiGithub, SiPostman, 
} from 'react-icons/si';
import { FaJava, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';

const SkillCategory = ({ title, skills, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 border-white/5 bg-white/2 hover:border-neonPurple/30 transition-all duration-500"
    >
      <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 group">
            <span className="text-2xl text-gray-400 group-hover:text-neonBlue transition-colors duration-300">
              {skill.icon}
            </span>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'C++', icon: <TbBrandCpp /> },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3 /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQL', icon: <SiMysql /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git/GitHub', icon: <SiGithub /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Postman', icon: <SiPostman /> },
        // { name: 'VS Code', icon: <SiVisualstudiocode /> },
      ],
    },
    {
        title: 'Core Concepts',
        skills: [
          { name: 'DSA', icon: '🧠' },
          { name: 'OOPs', icon: '🏗️' },
          { name: 'System Design', icon: '📐' },
          { name: 'Analytical', icon: '📈' },
        ],
      },
      {
        title: 'Soft Skills',
        skills: [
          { name: 'Leadership', icon: '👑' },
          { name: 'Communication', icon: '🗣️' },
          { name: 'Problem Solving', icon: '🧩' },
          { name: 'Thinking', icon: '🤔' },
        ],
      },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Prowess</h2>
          <div className="w-24 h-1 bg-neonPurple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
