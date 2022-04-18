import React from "react";
import Image from "next/image";
import avatar from "../public/assets/avatar.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineDownload } from "react-icons/hi";
import { BsLinkedin, BsInstagram, BsGithub, BsTelegram } from "react-icons/bs";
import { useTheme } from "next-themes";

function Sidebar() {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h3 className="my-4 text-xl font-medium text-teal-400 font-noto ">
        <span> Dummy User</span>
      </h3>
      <nav className="p-3">
        <div className="flex justify-center mb-5">
          <Image
            src={avatar}
            width={"100px"}
            height={"100px"}
            className="w-32 h-32 mx-auto rounded-full "
            objectFit="cover"
            alt="Avatar"
          />
        </div>
        <p className="pb-2 my-3 ">
          Hi, my name is Abdulaziz and I'm a web developer. Welcome to my
          personal website!
        </p>
        <ul className="flex items-center justify-around text-teal-500">
          <li className="p-3 rounded-full cursor-pointer bg-slate-700 hover:bg-slate-600">
            <a href="#">
              <BsLinkedin className="w-5 h-5 " />
            </a>
          </li>
          <li className="p-3 rounded-full cursor-pointer bg-slate-700 hover:bg-slate-600">
            <a href="#">
              <BsGithub className="w-5 h-5 " />
            </a>
          </li>
          <li className="p-3 rounded-full cursor-pointer bg-slate-700 hover:bg-slate-600">
            <a href="#">
              <BsInstagram className="w-5 h-5 " />
            </a>
          </li>
          <li className="p-3 rounded-full cursor-pointer bg-slate-700 hover:bg-slate-600">
            <a href="#">
              <BsTelegram className="w-5 h-5 " />
            </a>
          </li>
        </ul>
        <hr className="my-6 border-gray-600" />

        {/*  <div className="flex justify-around w-full mx-auto my-5 text-green-500 lg:w-9/12 md:w-6/12 ">
          <a href="#">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="#">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="#">
            <AiFillYoutube className="w-8 h-8 cursor-pointer" />
          </a>
        </div> */}
        <div className="py-5 my-5 bg-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <GoLocation />
            <span>Fergana, Uzbekistan</span>
          </div>
          <p className="my-2">ramic3323@gmail.com</p>
          <p className="my-2">1234543523</p>
        </div>
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-7/12 bg-gradient-to-r from-teal-400 to-blue-500 focus:outline-none "
          onClick={() => window.open("mailto:ramic3323@gmail.com")}
        >
          Email me
        </button>
        <button
          onClick={handleChangeTheme}
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-7/12 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
        >
          Theme
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
