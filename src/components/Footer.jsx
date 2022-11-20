import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      name="footer"
      id="footer"
      className="mx-auto grid max-w-[1240px] gap-8 py-16 px-4 text-gray-300 lg:grid-cols-3"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          officiis dignissimos consequatur eos alias cumque.
        </p>
        <div className="my-6 flex justify-between md:w-[75%]">
          <FaDribbbleSquare size={30}></FaDribbbleSquare>
          <FaFacebookSquare size={30}></FaFacebookSquare>
          <FaGithubSquare size={30}></FaGithubSquare>
          <FaInstagram size={30}></FaInstagram>
          <FaTwitterSquare size={30}></FaTwitterSquare>
        </div>
      </div>
      <div className="flex justify-between lg:col-span-3">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentations</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
