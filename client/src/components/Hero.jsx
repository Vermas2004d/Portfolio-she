import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import profileImg from '../assets/tanvi.jpeg'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neonBlue font-semibold tracking-widest mb-4"
          >
            WELCOME TO MY WORLD
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Tanvi Shreya</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium text-gray-300 h-20">
            I am Tanvi Shreya 
            <span className="text-neonPurple font-bold">
              {/* <Typewriter
                words={['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              /> */}
            </span>
            <br />
            <span>
                <Typewriter
                words={['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                />
            </span>
          </div>

          <p className="text-gray-400 text-lg mb-10 max-w-lg">
             Building intelligent AI-powered systems and scalable full-stack applications with a focus on real-world problem solving.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-10 py-6 rounded-full bg-gradient-to-r from-neonPurple to-neonBlue text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all"
            >
              View Projects <FiArrowRight />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-10 py-6 rounded-full bg-white/5 border border-white/10 text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all"
            >
              Download CV <FiDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonBlue rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
            
            {/* Profile Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/5 p-2 shadow-2xl">
              <img 
                src={profileImg}
                alt="Tanvi Shreya" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badges/Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 glass-card border-neonPurple/50 bg-neonPurple/10 flex items-center justify-center"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 p-4 glass-card border-neonBlue/50 bg-neonBlue/10 flex items-center justify-center"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neonPurple/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neonBlue/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Hero;
