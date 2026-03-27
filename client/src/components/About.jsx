import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block">
            About Me
            <motion.div 
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-neonPurple to-neonBlue"
            />
          </h2>
          
          <div className="glass-card p-10 mt-8 relative overflow-hidden group">
            {/* Background Gradient Detail */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neonPurple/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              "I am a Tanvi Shreya <span className="text-white font-semibold">B.Tech CSE student</span> passionate about building intelligent <span className="text-neonBlue font-semibold">AI-powered systems</span> and scalable <span className="text-neonPurple font-semibold">full-stack applications</span>. I enjoy solving real-world problems using data-driven approaches and modern web technologies."
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { label: 'Innovative', icon: '💡' },
                { label: 'Fast Learner', icon: '⚡' },
                { label: 'Collaborative', icon: '🤝' },
                { label: 'Result-Oriented', icon: '🎯' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-gray-400 text-sm tracking-widest uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
