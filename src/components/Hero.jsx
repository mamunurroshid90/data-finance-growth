import React from "react";

export const Hero = () => {
  return (
    <div name="home" id="home" className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="text-bold p-2 text-xl text-[#00df9a]">
          Growing with Data Analytics
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          Grow with data
        </h1>
        <div>
          <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">
            Fast, Flexible Financing for
          </p>
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Monitor your data Analytics to increase revenue for BTB, BTC && SASS
          Platforms
        </p>
        <button className="my-6 mx-auto w-[200px] rounded-md bg-[#00df9a] py-3 font-bold text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
};
