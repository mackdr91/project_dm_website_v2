// Ensure the component is marked as a client component
"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import deleteProject from '@/actions/deleteProject';

// Marking ProjectCard as a client component as well
const ProjectCard = ({ project, index, session, handleDeleteProject }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const maxLength = 200;

  // Animation variants
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={projectVariants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 border rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
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
        <p>No technologies listed</p>
      )}

      {project.github_link && (
        <a
          href={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      )}

      {!project.link ? (
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

      {session && (
        <Link href={`/projects/${project._id}/edit`} className="absolute top-4 right-12 md:top-2 text-blue-500 hover:underline">
          Edit
        </Link>
      )}

      {session && (
        <button
          onClick={() => handleDeleteProject(project._id)}
          className="absolute top-4 right-24 md:top-2 text-red-500 hover:underline"
        >
          Delete
        </button>
      )}
    </motion.div>
  );
};

const ProjectsBentoGrid = ({ projects }) => {
  const [projectList, setProjectList] = useState(projects); // Project list state
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const { data: session } = useSession();

  // Handle project deletion
  const handleDeleteProject = async (projectId) => {
    await deleteProject(projectId);
    const newProjectList = projectList.filter((project) => project._id !== projectId);
    setProjectList(newProjectList);
    toast.success("Project deleted successfully");
  };

  // Filter projects based on search query (title, description, or technologies)
  const filteredProjects = projectList.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Search Input */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search projects by technologies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border w-1/2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={index}
            session={session}
            handleDeleteProject={handleDeleteProject}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsBentoGrid;