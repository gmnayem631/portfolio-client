import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const MainLayout = () => {
  return (
    <div>
      <header className="shadow-sm bg-[#F5DDDD]">
        <Navbar className="max-w-7xl mx-auto"></Navbar>
      </header>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
};

export default MainLayout;
