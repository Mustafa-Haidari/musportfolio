import React, { useState } from "react";

import workData from "../data/WorkData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [modalOn, setModalOn] = useState(false);
  const [modalData, setModalData] = useState();

  const handleClose = () => {
    setModalOn(false);
  };
  return (
    <div name="work" className="pt-20 text-gray-300">
      <div className=" mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full">
        <h1 className="mb-4 mt-6 text-4xl font-bold text-[#d4972e]">
          Projects
        </h1>
        <p className=" pb-8">// Check our some of my recent work</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-x-4">
          {/* Grid item */}
          {workData.map((work) => {
            return (
              <div key={work.id} className=" lg:mb-0">
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
                    <p className="mb-2 text-gray-800 text-sm">
                      {work.description.length >= 100
                        ? work.description.substring(0, 100) + "..."
                        : work.description}
                    </p>

                    {work.architecture && (
                      <a
                        href={work.architecture}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                          Project architecture
                        </button>
                      </a>
                    )}

                    {!work.architecture && (
                      <button
                        className="bg-transparent  text-gray-400 text-sm py-1 px-2 border border-gray-400 rounded"
                        disabled
                      >
                        No architecture available
                      </button>
                    )}

                    <div className="flex gap-2">
                      <div
                        onClick={() => {
                          setModalData({
                            title: work.title,
                            created: work.created,
                            image: work.image,
                            status: work.status,
                            id: work.id,
                            description: work.description,
                            frontendTechs: work.frontendTechs,
                            backendTechs: work.backendTechs,
                            projectReflection: work.projectReflection,
                            architecture: work.architecture,
                          });
                          setModalOn(true);
                        }}
                        className="cursor-pointer text-center w-full mt-4 py-2 px-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Read more
                      </div>
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="text-center w-full mt-4 py-2 px-2 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modalOn && (
        <ProjectModal modalData={modalData} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Projects;
