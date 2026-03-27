import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCheckCircle, FiMaximize2, FiX } from 'react-icons/fi';
import Img2  from "../assets/vector.png"
import Img3 from "../assets/coursera.png"
import Img1 from "../assets/Madras.png"

const AchievementCard = ({ title, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-6 flex items-center gap-6 border-white/5 hover:border-neonPurple/40"
  >
    <div className="text-4xl text-neonPurple bg-neonPurple/10 p-4 rounded-2xl">{icon}</div>
    <h3 className="text-lg font-bold text-gray-200">{title}</h3>
  </motion.div>
);

const CertificateCard = ({ cert, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="glass-card group relative overflow-hidden cursor-pointer"
    onClick={() => onClick(cert)}
  >
    <div className="h-40 bg-gradient-to-br from-neonBlue/20 to-neonPurple/20 flex items-center justify-center">
        <FiCheckCircle className="text-4xl text-white/50 group-hover:text-neonBlue transition-colors" />
    </div>
    <div className="p-4 bg-white/5">
      <h4 className="text-sm font-bold text-white truncate">{cert.title}</h4>
      <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
    </div>
    <div className="absolute inset-0 bg-neonBlue/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <FiMaximize2 className="text-white text-3xl" />
    </div>
  </motion.div>
);

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  const achievements = [
    { title: '100 Days LeetCode Challenge 2025', icon: <FiAward /> },
    { title: '5-Star Rating in Python (HackerRank)', icon: <FiCheckCircle /> },
  ];

  const certificates = [
    { title: 'BS Data Science', issuer: 'IIT Madras', img: Img1 },
    { title: 'MongoDB Vector Search', issuer: 'MongoDB University', img: Img2 },
    { title: 'Computer Communication', issuer: 'Coursera', img: Img3 },
  ];

  return (
    <section className="py-20  bg-white/2" id="achievements">
      <div className="container mx-auto px-6 mb-10">
        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-neonPurple rounded-full"></span> Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, i) => (
              <AchievementCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div id="certificates" className='mt-5'>
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-neonBlue rounded-full"></span> Certificates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <CertificateCard key={cert.title} cert={cert} index={i} onClick={setSelectedCert} />
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full glass-card p-4 border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <FiX className="text-white text-2xl" />
              </button>
              <img src={selectedCert.img} alt={selectedCert.title} className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-neonBlue font-semibold mt-2">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
