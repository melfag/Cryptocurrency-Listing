import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
function Footer() {
  return (
    <footer>
      Made with <FaHeart className="heart-icon" /> by
      <a href="https://github.com/melfag" target="_blank">
        <VscGithub className="github-icon" />
      </a>
    </footer>
  );
}

export default Footer;
