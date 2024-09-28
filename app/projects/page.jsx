import ProjectsBentoGrid from "@/components/ProjectsBentoGrid";
import connectdb from "@/config/database";
import Project from "@/models/Projects";
import { convertToSerializedObject } from "@/utils/convertToObject";


const ProjectsPage = async () => {
  await connectdb();
  const projectDoc = await Project.find({}).lean();
  const projects = projectDoc.map(convertToSerializedObject);


  return (
    <div>
      <ProjectsBentoGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
