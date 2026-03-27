import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'B.Tech CSE',
    institution: 'Lovely Professional University',
    duration: '2021 – 2025',
    grade: 'CGPA: 7.5/10',
    desc: 'Specializing in Full Stack Development and AI.',
  },
  {
    title: 'Intermediate',
    institution: 'St. Lawrence Academy',
    duration: '2019 – 2021',
    grade: 'Percentage: 79%',
    desc: 'Science Stream (PCM).',
  },
  {
    title: 'Matriculation',
    institution: 'Prarambhika',
    duration: '2018 – 2019',
    grade: 'Percentage: 80.2%',
    desc: 'General Science & Mathematics.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-20 text-center">Academic Journey</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neonPurple via-neonBlue to-transparent md:-translate-x-1/2"></div>
          
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-neonBlue md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-12 md:ml-0 p-8 glass-card border-white/5 hover:border-white/20 transition-all ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <span className="inline-block px-4 py-1 rounded-full bg-neonPurple/20 text-neonPurple text-xs font-bold mb-4 uppercase tracking-[0.2em]">
                  {item.duration}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-neonBlue font-semibold mb-4">{item.institution}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="text-white font-bold text-sm bg-white/5 inline-block px-4 py-2 rounded-lg border border-white/10">
                    {item.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
