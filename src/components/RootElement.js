import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootElement = () => {
  return (
    <>
      <Navbar />
      <main className="h-full bg-[#0a192f] w-full">
        <div className="max-w-[1000px] mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootElement;
