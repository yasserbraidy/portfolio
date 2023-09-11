import Header from "./sections/header";
import About from "./sections/about";
import { useRef } from "react";
import Resume from "./sections/resume";
import Services from "./sections/services";
import Contact from "./sections/contact";
function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        about={aboutRef}
        resume={resumeRef}
        services={servicesRef}
        contact={contactRef}
      />

      <section id="about" className="about" ref={aboutRef}>
          <About />
      </section>

      <section id="resume" className="resume" ref={resumeRef}>
        <Resume />
      </section>

      <section id="services" className="services" ref={servicesRef}>
        <Services />
      </section>

      {/* <section id="portfolio">
        <Container></Container>
      </section> */}

      <section id="contact" className="contact" ref={contactRef}>
        <Contact />
      </section>

      {/* <section id="credits">
        <Container></Container>
      </section> */}
    </>
  );
}

export default App;
