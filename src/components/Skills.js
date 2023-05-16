import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import PHP from "../assets/php.png";
import MySQL from "../assets/mysql.png";
import GitHub from "../assets/github.png";
import RESTfulAPI from "../assets/RESTful-api.png";
import API from "../assets/api.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="work" className="pt-20 text-gray-300">
      <div className=" mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full">
        <h1 className="mb-4 mt-6 text-4xl font-bold text-[#d4972e]">
          Projects
        </h1>
        <p className=" pb-8">
          {" "}
          // These are some of the technologies that I have worked with
        </p>

        <div className="h-screen">
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-4 ">
            <div className="skills-item">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="skills-item">
              <img
                className="w-20 mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
              />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={Node} alt="Node icon" />
              <p className="my-4">NODE</p>
            </div>
            <div className="skills-item">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-4">TAILWINDCSS</p>
            </div>
            <div className="skills-item">
              <img
                className="w-20 mx-auto"
                src={Bootstrap}
                alt="Bootstrap icon"
              />
              <p className="my-4">BOOTSTRAP</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={Mongo} alt="Mongo DB icon" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div className="skills-item">
              <img
                className="w-20 mx-auto"
                src={RESTfulAPI}
                alt="Mongo DB icon"
              />
              <p className="my-4">RESTful API</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={API} alt="Mongo DB icon" />
              <p className="my-4">Web API</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={PHP} alt="Mongo DB icon" />
              <p className="my-4">PHP</p>
            </div>
            <div className="skills-item">
              <img className="w-20 mx-auto" src={MySQL} alt="Mongo DB icon" />
              <p className="my-4">MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
