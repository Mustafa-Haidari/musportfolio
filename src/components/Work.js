import React from "react";

import workData from "../WorkData";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>

          <p className="py-6">// Check our some of my recent work</p>
        </div>

        {/* container */}
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-x-12">
          {/* Grid item */}
          {workData.map((work) => {
            return (
              <div key={work.id} className="mb-6 lg:mb-0">
                <div className="block bg-gray-200 rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-xl rounded-lg mx-4 mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img src={work.image} className="w-full" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-gray-500">{work.created}</span>
                    <h5 className="font-bold text-lg mb-3 text-gray-800">
                      {work.title}{" "}
                      <span className="bg-sky-400 px-2 rounded text-sm pt-0.5 pb-0.5 text-white">
                        {work.status}
                      </span>
                    </h5>
                    <p className="mb-4 pb-2 text-gray-800">
                      {work.description.length >= 200
                        ? work.description.substring(0, 200) + "..."
                        : work.description}
                    </p>
                    <p className="text-gray-700 font-bold">
                      Frontend techs used:
                    </p>
                    <div className="flex flex-wrap pt-1 pb-1 gap-1">
                      {work.frontendTechs.map((tech) => {
                        return (
                          <span className="bg-amber-500 px-2 text-gray-600 text-sm font-bold rounded-md">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-gray-700 font-bold mt-2">
                      Backend techs used:
                    </p>
                    <div className="flex flex-wrap pt-2 pb-2 gap-2">
                      {work.backendTechs.length !== 0 ? (
                        work.backendTechs.map((tech, array) => (
                          <span
                            key={tech + array}
                            className="bg-green-500 px-2 text-white text-sm font-bold rounded-md"
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-600 text-sm">
                          No backend tech is used
                        </p>
                      )}
                    </div>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
