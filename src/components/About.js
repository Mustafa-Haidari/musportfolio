import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Mustafa, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Enthusiastic entrepreneur and web developer with a passion for all
              things web and open source. Attentive to details with over 1 year
              of experience in tech industry and various other roles. I have
              experience in React, NodeJS, PHP, MySQL, MongoDB, WordPress and so
              many other open source technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
