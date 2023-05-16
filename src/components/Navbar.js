import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold font-signature">
          Mustafa
        </h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex z-10">
        <li className="nav-link">
          <Link to="">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="about-me">About me</Link>
        </li>
        <li className="nav-link">
          <Link to="work-history">Work history</Link>
        </li>
        <li className="nav-link">
          <Link to="projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="skills">Skills</Link>
        </li>
        <li className="nav-link">
          <Link to="blog">Blog</Link>
        </li>
        <li className="nav-link">
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden text-3xl pr-4 pt-4 cursor-pointer z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about-me">
            About me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work-history">
            Work history
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects">
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="blog">
            Blog
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
