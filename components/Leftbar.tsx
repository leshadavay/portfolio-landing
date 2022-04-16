import React from "react";
import Image from "next/image";
import avatar from "../public/assets/avatar.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineDownload } from "react-icons/hi";
function Sidebar() {
  return (
    <div>
      <Image
        src={avatar}
        width={"100px"}
        height={"100px"}
        layout="intrinsic"
        className="w-32 h-32 mx-auto rounded-full "
        alt="Avatar"
      />
      <h3 className="my-4 text-5xl font-medium tracking-wider font-square">
        <span>Dummy</span>
        User
      </h3>
      <p className="px-2 py-1 mx-3 my-3 bg-gray-200 rounded-full">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 mx-3 my-3 bg-gray-200 rounded-full"
        href="#"
      >
        <HiOutlineDownload className="w-6" />
        My Resume
      </a>
      <div className="flex justify-around w-full mx-auto my-5 text-green-500 lg:w-9/12 md:w-6/12 ">
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div className="py-5 my-5 bg-gray-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Fergana, Uzbekistan</span>
        </div>
        <p className="my-2">ramic3323@gmail.com</p>
        <p className="my-2">1234543523</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-7/12 bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none "
        onClick={() => window.open("mailto:ramic3323@gmail.com")}
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-7/12 bg-gradient-to-r from-green-400 to-blue-400">
        Theme
      </button>
    </div>
  );
}

export default Sidebar;
