import AnimatedSection from "./AnimatedSection";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const AboutSection = () => {
  return (
    <AnimatedSection>
    <section id="about" className="relative flex flex-col rounded-lg justify-center">
      <div className="container mx-auto p-6 md:p-24 ">
        <h2 className={`text-[10rem] absolute md:bottom-0 bottom-1/4 left-0 opacity-20 ${anton.className}`}>About Me</h2>
        <p className="mt-4 text-2xl text-center max-w-5xl mx-auto leading-[45px]">
          Hi, I’m Domonick Mack, a passionate web developer with a love for
          creativity and problem-solving.
      </p>
        <p className="mt-4 text-2xl text-center max-w-5xl mx-auto leading-[45px]">
          From my first exposure to web
          development in high school, I’ve evolved my skills and knowledge
          across various IT fields—ranging from web design and development to
          cloud services and AI automation.
        </p>
        <p className="mt-4 text-2xl text-center max-w-5xl mx-auto leading-[45px]">
           I enjoy crafting interactive and
          user-friendly web experiences that stand out, while ensuring they
          reflect my commitment to innovation, accessibility, and user
          experience.
        </p>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default AboutSection;
