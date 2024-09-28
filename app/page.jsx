import Hero from "@/components/Hero";
import connectdb from "@/config/database";
import Project from "@/models/Projects";
import { convertToSerializedObject } from "@/utils/convertToObject";

const Home = async () => {
  await connectdb();
  const projectDoc = await Project.find({}).lean();
  const projects = projectDoc.map(convertToSerializedObject);

  return (
    <>
      <Hero />
    </>
  );
};
export default Home;
