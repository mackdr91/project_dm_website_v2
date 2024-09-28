import ProjectEditForm from "@/components/ProjectEditForm";
import connectdb from "@/config/database";
import Projects from "@/models/Projects";
import { convertToSerializedObject } from "@/utils/convertToObject";

const EditProject = async ({ params }) => {
    await connectdb();
    const projectDoc = await Projects.findById(params.id).lean();
    const project = convertToSerializedObject(projectDoc);
    return (
        <section>
        <div className="container m-auto max-w-2xl py-24">
          <div className=" px-6 py-8 rounded-lg shadow-md border m-4 md:m-0">
            <ProjectEditForm project={project} />
          </div>
        </div>
      </section>
     );
}

export default EditProject;