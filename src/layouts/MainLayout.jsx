import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header className="shadow-sm bg-[#F5DDDD]">
        <Navbar className="max-w-7xl mx-auto"></Navbar>
      </header>
    </div>
  );
};

export default MainLayout;
