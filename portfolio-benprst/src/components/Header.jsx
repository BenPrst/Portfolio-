import React from "react";
import Nav from "./Nav";
import Image from "../assets/222.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-black flex flex-col h-screen">
      <Nav />
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <h1 className="text-white text-4xl text-center md:text-left md:text-5xl m-10">
          Hello my name is Benjamin !
        </h1>
        <img
          className="w-40 h-40 rounded-full object-cover self-center mt-5"
          src={Image}
          alt=""
        />
        <IoIosArrowDown className="text-[80px] self-center" />
      </div>
    </div>
  );
};

export default Header;
