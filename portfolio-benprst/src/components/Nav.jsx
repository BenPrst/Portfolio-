import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="flex justify justify-between items-center py-5">
      <h1 className="text-5xl ml-8">BP</h1>
      <nav className="flex justify-around text-2xl md:max-w-[700px] items-center w-2/3 max-sm:hidden">
        <a>About</a>
        <a>Projects</a>
        <a>Skills</a>
        <a>Contact</a>
      </nav>
      <AiOutlineMenu className="sm:hidden text-4xl mr-8" />
    </div>
  );
};

export default Nav;
