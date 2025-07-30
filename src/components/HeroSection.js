import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaRobot } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 overflow-hidden bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <motion.div
        className="relative z-10 bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-3xl border border-gray-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
      >
        <motion.img
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0BkcoRtmarwVexSvg49LJmunA1yQfBY37iOHM"
          alt="Alan Canto"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-600 shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.8 }}
        />
        <h1 className="text-5xl font-extrabold text-gray-100 mb-4 leading-tight">
          Hola, soy <span className="text-blue-400">Alan Canto</span>
        </h1>
        <p className="text-2xl text-gray-300 font-medium mb-6">
          <TypeAnimation
            sequence={[
              'Desarrollador Web, Mobile, Desktop.',
              2000,
              'Entusiasta de la Inteligencia Artificial.',
              2000,
              'Creador de soluciones innovadoras.',
              2000,
              'Tu próximo colaborador.',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-blue-400"
          />
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Me especializo en construir aplicaciones robustas y escalables, con un fuerte enfoque en la experiencia de usuario y la implementación de tecnologías de IA. Explora mis proyectos y descubre cómo transformo ideas complejas en soluciones funcionales.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;