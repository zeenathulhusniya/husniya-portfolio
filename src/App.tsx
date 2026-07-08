import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "certifications", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 160; // offset for better transition activation

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#030712] text-gray-100 flex flex-col justify-between overflow-x-hidden select-none selection:bg-blue-500/20 selection:text-blue-300">
      {/* Decorative backdrop glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-purple-500/20 z-40" />

      {/* Modern responsive navigation header */}
      <Navbar activeSection={activeSection} />

      {/* Main sections container */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* About Section */}
        <About />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Education Section */}
        <Education />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Certifications Section */}
        <Certifications />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Services Section */}
        <Services />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Divider graphic */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
