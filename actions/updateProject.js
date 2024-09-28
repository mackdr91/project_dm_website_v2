"use server";
import connectdb from "@/config/database";
import Project from "@/models/Projects";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";

async function updateProject(projectId,formData) {
  await connectdb();
  const existingProject = await Project.findById(projectId);

  if (!existingProject) {
    throw new Error("Project not found");
  }



  const projectData = {
    title: formData.get("title"), // Ensure this field is not null/undefined
    technologies: formData.get("technologies").split(",").map(tech => tech.trim()), // Split string by commas and trim spaces
    description: formData.get("description"),
    github_link: formData.get("github_link"),
    link: formData.get("link"),


  };

  await Project.findByIdAndUpdate(projectId, projectData, { new: true });


  revalidatePath("/projects", "/", "layout");
  redirect(`/projects`);
}
export default updateProject;
