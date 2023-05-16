import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";

const WorkHistory = () => {
  return (
    <div name="work" className="pt-20 text-gray-300">
      <div className=" mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full">
        <h1 className="mb-4 mt-6 text-4xl font-bold text-[#d4972e]">
          Work History
        </h1>
        <p className=" pb-8">// My professional work history</p>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 h-screen">
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 -left-3 bg-green-700 rounded-full ring-8 ring-green-700 dark:ring-gray-900 dark:bg-blue-900">
              <BsFillCalendarFill />
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">
              Kaakah Topup (side project)
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2022 - Now
            </time>
            <p>Full Stack Developer</p>
            <p class="mb-4 text-base font-normal mt-1 text-white dark:text-gray-400">
              Kaakah is a mobile topup service that allows you to send
              topups/credits in more than 150 countries worldwide. As the only
              developer, I designed, developed and deployed a complete
              user-facing application to production.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 -left-3 bg-yellow-700 rounded-full ring-8 ring-yellow-700 dark:ring-gray-900 dark:bg-blue-900">
              <BsFillCalendarFill />
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">
              Official Clothing
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2022 - February 2023
            </time>
            <p>Application Support / Software Developer</p>
            <p class="mb-4 text-base font-normal mt-1 text-white dark:text-gray-400">
              As an application support and software developer, I developed new
              components and maintained an in-house legacy app, whichinvolved
              creating new features and functionalities for the legacy app using
              PHP, MySQL, and React and ensuring the appremained up to date and
              secure. I worked alongside a senior developer and more than 10
              non-technical colleagues.
            </p>
          </li>
          <li class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 -left-3 bg-cyan-700 rounded-full ring-8 ring-cyan-700 dark:ring-gray-900 dark:bg-blue-900">
              <BsFillCalendarFill />
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">
              Brisbane Catholic Education
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2022 - February 2023
            </time>
            <p>Administrative Services Officer (5 Years+)</p>
            <p class="mb-4 text-base font-normal mt-1 text-white dark:text-gray-400">
              In this role, I was responsible for supporting the management of
              organisationalresources and assisting with the implementation of
              various projects. I worked closely with stakeholders to develop
              project plans,track progress, and ensure timely completion.
            </p>
            <p>ICT Officer (6 months)</p>
            <p class="mb-4 text-base font-normal mt-1 text-white dark:text-gray-400">
              As an ICT Officer, I was responsible for maintaining the Learning
              and Teaching department'sSharePoint 2010 portal. This platform was
              instrumental in sharing teaching materials with teachers across
              145+ Catholicschools. My responsibilities included creating new
              pages, developing modern frontend solutions, and identifying areas
              forimprovement to enhance the user experience.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkHistory;
