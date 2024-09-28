import AnimatedSection from "./AnimatedSection";
import { Anton } from "next/font/google";
import Image from "next/image";
import profile from "@/assets/images/domonick.png";
import styles from "@/assets/styles/bgImage.css";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const Hero = () => {
  return (
    <>
    <div className={styles.bgImage}>

    </div>

    <AnimatedSection>
      <section
        id="home"

        className="flex flex-col items-center justify-center  mx-4 border border-red-500"
      >
        <Image
          src={profile}
          alt="Domonick Mack"
          width={400}
          height={400}
          className="rounded-full"
        />
        <div className="text-center">
          <h1 className={`text-[10rem] ${anton.className}`}>
            Hi, I’m Domonick Mack
          </h1>
          <p className=" px-4 text-4xl max-w-5xl mx-auto text-gray-500 leading-[50px]">
            AI | Web Developer
          </p>
          <p className=" px-4 text-2xl max-w-7xl mx-auto text-gray-500 leading-[50px]">
            I work on front-end, back-end web development, AI automation and AI development
          </p>
        </div>
      </section>
    </AnimatedSection>
    </>
  );
};

export default Hero;
