import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Ensure that title is required
  },
  technologies: {
    type: [String], // Define technologies as an array of strings
    required: true, // Add validation if necessary
  },
  description: {
    type: String,
    required: true,
  },
  github_link: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },

},{timestamps: true});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;