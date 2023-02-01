import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mustafa Haidari
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#8892b0] pt-4 max-w-[700px]">Brisbane Australia</p>
        <p className="text-[#8892b0] mb-6 max-w-[700px]">
          mhaidarpoor@gmail.com
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View my work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
