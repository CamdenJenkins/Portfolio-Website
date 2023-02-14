import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#portfolio">
        <BsCodeSlash />
      </a>
      <a href="#contact">
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;
