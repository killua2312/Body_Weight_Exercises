import React from "react";
import {
  AiFillHome,
  AiFillContacts,
  AiFillGithub,
  AiOutlineSearch,
} from "react-icons/ai";

import "./Nav.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav__container">
        <a href="#">
          <AiFillHome />
        </a>
        <a href="#">
          <AiOutlineSearch />
        </a>
        <a href="#">
          <AiFillContacts />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
