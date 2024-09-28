import ProjectAddForm from "@/components/ProjectAddForm";
const ProjectAddPage = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container m-auto max-w-2xl py-24">
        <div className="p-6 rounded-lg shadow-md border m-4 md:m-0">
          <ProjectAddForm />
        </div>
      </div>
    </section>
  );
};

export default ProjectAddPage;
