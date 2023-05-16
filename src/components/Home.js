import React from "react";
import { HiLocationMarker, HiOutlineMail, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { skillsData } from "../data/skills";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div class="mb-4 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-4xl sm:text-4xl font-bold font-signature text-[#282e41]">
            Mustafa Haidari
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d4972e]">
            I'm a Front End Developer.
          </h2>
          <div>
            <p className="text-[#8892b0] pt-4 max-w-[700px] flex">
              <span className="mr-2">
                <HiLocationMarker />
              </span>
              Brisbane Australia
            </p>
            <p className="text-[#8892b0] pt-1 max-w-[700px] flex">
              <span className="mr-2">
                <HiOutlineMail />
              </span>
              mhaidarpoor@gmail.com
            </p>
          </div>
          <h1 className="text-2xl sm:text-2xl font-bold pt-6 pb-4 text-[#282e41]">
            Technologies I have worked with:
          </h1>
          <div class="items-center justify-center space-y-2 sm:flex sm:space-y-0 sm:space-x-2">
            <div className="w-full grid grid-cols-4 md:grid-cols-8 sm:grid-cols-4 gap-4 text-center py-0">
              {skillsData.map((skill) => (
                <div key={skill.id}>
                  <img
                    className="w-20 mx-auto p-2"
                    src={skill.icon}
                    alt="HTML icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="w-full p-4 bg-cyan-600 border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 place-items-center items-center">
            <Link to="about-me" className="w-full">
              <div className="menu-tiles">About me</div>
            </Link>
            <Link to="work-history" className="w-full">
              <div className="menu-tiles">Work history</div>
            </Link>
            <Link to="projects" className="w-full">
              <div className="menu-tiles">Projects</div>
            </Link>
            <Link to="skills" className="w-full">
              <div className="menu-tiles">Skills</div>
            </Link>
            <Link to="blog" className="w-full">
              <div className="menu-tiles">Blog</div>
            </Link>
            <Link to="contact" className="w-full">
              <div className="menu-tiles">Contact me</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
