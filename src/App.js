import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import AIChatbot from './components/AIChatbot';

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Inventario',
    description: 'Aplicación web para la gestión eficiente de inventarios, permitiendo el seguimiento de productos, control de stock y generación de informes.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/ajoca/inventory-management-system',
  },
  {
    id: 2,
    title: 'Plataforma de E-commerce (Frontend)',
    description: 'Interfaz de usuario moderna y responsiva para una tienda en línea, con carrito de compras, filtros de productos y pasarela de pago simulada.',
    tags: ['React', 'Redux', 'TailwindCSS', 'REST API'],
    githubLink: 'https://github.com/ajoca/ecommerce-frontend',
  },
  {
    id: 3,
    title: 'Aplicación de Tareas con Autenticación',
    description: 'Una aplicación de lista de tareas con funcionalidades de registro, inicio de sesión y persistencia de datos para usuarios autenticados.',
    tags: ['React', 'Firebase', 'Context API', 'Autenticación'],
    githubLink: 'https://github.com/ajoca/react-firebase-todo-auth',
  },
  {
    id: 4,
    title: 'Clon de Netflix (UI)',
    description: 'Recreación de la interfaz de usuario de Netflix, mostrando películas y series con un diseño adaptable y animaciones fluidas.',
    tags: ['React', 'Styled Components', 'API de Películas'],
    githubLink: 'https://github.com/ajoca/netflix-clone-ui',
  },
  {
    id: 5,
    title: 'Dashboard de Criptomonedas',
    description: 'Panel interactivo para visualizar datos en tiempo real de diversas criptomonedas, incluyendo gráficos y tendencias de precios.',
    tags: ['React', 'Chart.js', 'API de Cripto', 'Material UI'],
    githubLink: 'https://github.com/ajoca/crypto-dashboard',
  },
  {
    id: 6,
    title: 'Generador de Contenido con IA',
    description: 'Herramienta que utiliza modelos de lenguaje para generar ideas de contenido, titulares y descripciones para blogs o redes sociales.',
    tags: ['React', 'OpenAI API', 'Node.js', 'IA'],
    githubLink: 'https://github.com/ajoca/ai-content-generator',
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <motion.section
          id="projects"
          className="mb-12 pt-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-10">
            Mis Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>
      </main>
      <AIChatbot />
    </div>
  );
};

export default App;