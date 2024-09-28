'use client'; // This will be a client-side component
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ProjectsBentoGrid = ({ projects }) => {
  const maxLength = 200;

  // Animation variants
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <div className="container mx-auto p-12">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const controls = useAnimation();
          const { ref, inView } = useInView({ triggerOnce: true });

          useEffect(() => {
            if (inView) {
              controls.start('visible');
            }
          }, [inView, controls]);

          return (

            <motion.div
              key={project._id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 border rounded-lg shadow-lg bg-black/50 hover:bg-gray-900 transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description.substring(0, maxLength)}...</p>

              {/* Check if project.technologies exists and is an array */}
              {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                <div className="flex flex-wrap space-x-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block mb-6 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : (
                <p>No technologies listed</p> // Fallback if technologies array is empty or not present
              )}

              { project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              )}

              { !project.link ?  (
                <span className="absolute bottom-4 right-4 text-red-500 font-bold ml-4">Not Live</span>
              ) : (
                <>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 text-blue-500 hover:underline"
              >
                View Project
              </a>
               <div className="w-4 absolute top-4 right-4 h-4 bg-green-500 rounded-full shadow-lg animate-pulseLight"></div>

                </>
              )}


            </motion.div>

          );
        })}
      </div>
    </div>
  );
};

export default ProjectsBentoGrid;