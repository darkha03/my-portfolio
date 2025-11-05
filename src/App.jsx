import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { WhyHire } from "./components/WhyHire";
import { Offer } from "./components/Offer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    document.title = "My Portfolio";
    Aos.init({
      duration: 1000,
      once: true, // Animation only happens once
      
    });
  }, []);

  return (
    <div className="bg-white text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <WhyHire />
        <Offer />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
