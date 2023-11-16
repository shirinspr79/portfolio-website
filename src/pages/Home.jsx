import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

const Home = () => {
  return (
    <div class="flex min-h-screen justify-center bg-gradient-to-l from-pink-100 to-zinc-300">
      <div class="fixed top-0 z-10 w-full sm:w-4/5 max-w-5xl shadow-md">
        <Navbar />
      </div>
      <div class="flex w-full sm:w-4/5 max-w-5xl flex-col shadow-xl ">
        <div class="h-20"></div>
        <HeroSection />
        <Experience id="s-experience" />
        <Skills id="s-skills" />
        <Projects id="s-projects" />
        <Certifications id="s-certifications" />
        <Education id="s-education" />
        <ContactMe id="s-contactme" />
        <div class="h-40"></div>
      </div>
      <div class="fixed bottom-0 z-10 w-full sm:w-4/5 max-w-5xl shadow-md">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
