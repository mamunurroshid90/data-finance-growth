import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="cursor-pointer p-4">Home</li>
        <li className="cursor-pointer p-4">Analytics</li>
        <li className="cursor-pointer p-4">Newsletter</li>
        <li className="cursor-pointer p-4">Card</li>
        <li className="cursor-pointer p-4">Footer</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={30}></AiOutlineMenu>
        )}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-900 bg-[#000300]"
            : "fixed left-[-100%] duration-500 ease-in-out"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="border-b border-gray-600 p-4">Home</li>
          <li className="border-b border-gray-600 p-4">Analytics</li>
          <li className="border-b border-gray-600 p-4">Newsletter</li>
          <li className="border-b border-gray-600 p-4">Card</li>
          <li className="border-b border-gray-600 p-4">Footer</li>
        </ul>
      </div>
    </div>
  );
};
