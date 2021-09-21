import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Find your Book</h2>
      </Link>

      <ul>
        <li>
          <Link to="//linkedin.com/in/henriqueperoni/" target="_blank">
            <FaLinkedin className="linkedin" />
          </Link>
        </li>
        <li>
          <Link to="//github.com/Henriqueperoni" target="_blank">
            <FaGithub className="github" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
