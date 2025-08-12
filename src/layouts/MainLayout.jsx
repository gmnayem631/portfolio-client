import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const MainLayout = () => {
  return (
    <div>
      <header className="shadow-sm bg-[#F5DDDD]">
        <Navbar className="max-w-7xl mx-auto"></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </main>
    </div>
  );
};

export default MainLayout;
