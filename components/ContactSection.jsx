import AnimatedSection from "./AnimatedSection";
const ContactSection = () => {
  return (
    <AnimatedSection>
    <section id="contact" className="flex flex-col items-center justify-center py-16 h-screen">

        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <p className="mt-4 text-center">
          Feel free to reach out for collaborations or just to say hi!
        </p>

    </section>
    </AnimatedSection>
  );
};

export default ContactSection;
