import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Web3 Guy
      </motion.h1>
      
      <motion.p 
        className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Shiping Cool Stuffs 
      </motion.p>
      
      <motion.div 
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a href="#projects" className="px-6 py-3 bg-cyan-500 text-black rounded-full font-medium hover:bg-cyan-400 transition-colors">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-full font-medium hover:bg-cyan-500/10 transition-colors">
          Contact Me
        </a>
      </motion.div>
      
      <motion.div 
        className="mt-12 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="https://github.com/Ransom070400" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/eze-ransom-281640295" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://x.com/ezeransome" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Twitter size={24} />
        </a>
      </motion.div>
    </motion.div>
  );
}