import React from "react";

export const Analytics = () => {
  return (
    <div name="analytics" id="analytics" className="w-full bg-white py-16 px-4">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img
          className="mx-auto my-4 w-[500px]"
          src="/assets/laptop.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            accusantium itaque dolores, officiis iure, laborum, sapiente vero
            perferendis soluta deleniti explicabo praesentium modi
            exercitationem eveniet unde facere vel natus. Doloremque.
          </p>

          <button className="mx-auto my-6 w-[200px] rounded-md bg-black py-3 font-bold text-[#00df9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
