import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-[100vh]  flex items-center justify-center bg-slate-500">
      <img
        src="./intro.jpg"
        alt="intro"
        className="w-full h-full bg-contain bg-center blur-sm opacity-50"
      />
      <div className="absolute flex mx-5 flex-col items-center justify-center">
        <p className="text-2xl text-white font-semibold md:text-6xl lg:text-8xl text-center sm:text-3xl">
          Comprehensive healthcare services under one roof
        </p>
        <p className="text-md sm:text-lg tracking-widest mt-10 text-center md:text-xl text-white">
          Explore a wide range of services we offer for your betterment
        </p>
        <Link href={"/services"}>
          <div className="p-4 px-8 bg-slate-800 text-white mt-10 rounded-full shadow-xl duration-500 cursor-pointer hover:bg-slate-600">
            Explore Services
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
