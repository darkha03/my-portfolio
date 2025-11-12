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
    <div className="text-black scroll-smooth">
      <Navbar />
      <main>
        <div className="bg-white">
          <Hero />
        </div>

        <div className="bg-gray-50">
          <Skills />
        </div>

        <div className="bg-white">
          <WhyHire />
        </div>

        <div className="bg-gray-50">
          <Offer />
        </div>

        <div className="bg-white">
          <Education />
        </div>

        <div className="bg-gray-50">
          <Projects />
        </div>

        <div className="bg-gray-200">
          <Contact />
        </div>
      </main>
    </div>
  );
}
