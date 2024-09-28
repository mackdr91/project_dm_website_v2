import AnimatedSection from "./AnimatedSection";
const ContactSection = () => {
  return (
    <AnimatedSection>
    <section id="contact" className="flex flex-col items-center justify-center py-16 h-screen">

        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <p className="mt-4 text-center">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <a href="mailto:domonick.r.mack@gmail.com" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Email Me
        </a>

    </section>
    </AnimatedSection>
  );
};

export default ContactSection;
