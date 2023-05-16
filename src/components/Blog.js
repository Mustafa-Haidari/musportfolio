import React from "react";

const Blog = () => {
  return (
    <div name="work" className="pt-20 text-gray-300">
      <div className=" mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full">
        <h1 className="mb-4 mt-6 text-4xl font-bold text-[#d4972e]">Blogs</h1>
        <p className=" pb-8">// Some of my recent blogs</p>
        <div className="h-screen">
          <p className="text-2xl text-white">
            No blogs available at the moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
