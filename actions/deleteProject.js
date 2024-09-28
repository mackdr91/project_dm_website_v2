'use server';
import Projects from "@/models/Projects";
import { revalidatePath } from "next/cache";

async function deleteProject(projectId) {
  try {
    // Find the project by ID and delete it
    await Projects.findByIdAndDelete(projectId);

    // Revalidate the path where the projects list is shown
    revalidatePath("/projects");

  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project");
  }
}

export default deleteProject;