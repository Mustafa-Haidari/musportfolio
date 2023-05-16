import React from "react";

const ProjectModal = ({ handleClose, modalData }) => {
  const {
    title,
    id,
    description,
    created,
    status,
    frontendTechs,
    backendTechs,
    projectReflection,
    architecture,
  } = modalData;
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      key={id}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-2 sm:p-4 sm:pb-4">
              <div className="flex items-start justify-between border-b dark:border-gray-600 mb-2 pb-2">
                <h5 className="font-bold text-lg text-gray-800">
                  #{id + " " + title}{" "}
                  <span className="bg-sky-400 px-2 rounded text-sm pt-0.5 pb-0.5 text-white">
                    {status}
                  </span>
                </h5>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto pt-1 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="staticModal"
                  onClick={() => handleClose()}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <span className="text-sm text-gray-500">{created}</span>

              <div className="mt-2 mb-6">
                <p className="text-sm text-gray-500">{description}</p>
              </div>
              <p className="text-gray-600 text-sm font-bold">
                Project architecture:
              </p>
              <div
                className="overflow-hidden mb-6 bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-xl rounded-lg mx-4 mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {architecture && (
                  <a href={architecture} target="_blank" rel="noreferrer">
                    <img
                      src={architecture}
                      className="w-full"
                      alt="Project architecture"
                    />
                  </a>
                )}
                {!architecture && (
                  <p className="text-gray-600 text-sm p-3">
                    No architecture available for this project
                  </p>
                )}
              </div>
              <p className="text-gray-600 text-sm font-bold">
                Frontend techs used:
              </p>
              <div className="flex flex-wrap pt-1 pb-1 gap-1">
                {frontendTechs.map((tech) => {
                  return (
                    <span className="bg-orange-500 px-2 text-white text-sm rounded-md">
                      {tech}
                    </span>
                  );
                })}
              </div>
              <p className="text-gray-600 text-sm font-bold mt-4">
                Backend techs used:
              </p>
              <div className="flex flex-wrap pt-2 pb-2 gap-2">
                {backendTechs.length !== 0 ? (
                  backendTechs.map((tech, array) => (
                    <span
                      key={tech + array}
                      className="bg-green-500 px-2 text-white text-sm rounded-md"
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
              <p className="text-gray-600 text-sm font-bold mt-4">
                Project reflection:
              </p>
              <div className="flex flex-wrap pt-2 pb-2 gap-2">
                {projectReflection ? (
                  <p className="text-gray-600 text-sm">{projectReflection}</p>
                ) : (
                  <p className="text-gray-600 text-sm">No reflections added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
