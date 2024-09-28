import AnimatedSection from "./AnimatedSection";


const ProjectSection = () => {
  return (
    <section id="projects" className="mx-auto py-16">
    <AnimatedSection>
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <ul className="space-y-6">  {/* Add a list with spacing between items */}
        {/* Each project list item */}
        <li className="border-t border-gray-700 p-4 mx-2">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="mt-2">Description of project 1.</p>
        </li>
        <li className=" border-t border-gray-700 p-4 mx-2">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="mt-2">Description of project 2.</p>
        </li>

        <li className="border-t border-gray-700 p-4 mx-2">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p className="mt-2">Description of project 3.</p>
        </li>

        {/* Add more project list items as needed */}
      </ul>
    </AnimatedSection>
  </section>
  );
};

export default ProjectSection;
