import React from "react";
import { FaHeart } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      Made with <FaHeart className="heart-icon" /> by
      <a href="https://github.com/melfag" target="_blank">
        <div className="github">
          <VscGithub className="github-icon" />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
