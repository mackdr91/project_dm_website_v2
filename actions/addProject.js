"use server";
import connectdb from "@/config/database";
import Project from "@/models/Projects";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

async function addProject(formData) {
  await connectdb();



  const projectData = {
    title: formData.get("title"), // Ensure this field is not null/undefined
    technologies: formData.get("technologies").split(",").map(tech => tech.trim()), // Split string by commas and trim spaces
    description: formData.get("description"),
    github_link: formData.get("github_link"),
    link: formData.get("link"),


  };

  const newProject = new Project(projectData);
  await newProject.save();

  revalidatePath("/projects", "/", "layout");
  redirect(`/projects/${newProject._id}`);
}
export default addProject;
