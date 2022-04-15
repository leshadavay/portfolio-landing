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
        width={"8 rem"}
        height={"8 rem"}
        className="mx-auto rounded-full "
        alt="Avatar"
      />
      <h3>
        <span>Dummy</span>
        User
      </h3>
      <p>Web Developer</p>
      <p>
        <HiOutlineDownload className="w-6" />
        My Resume
      </p>
      <div>
        <a href="#">
          <AiFillGithub />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiFillYoutube />
        </a>
      </div>
      <div>
        <div>
          <GoLocation />
          <span>Fergana, Uzbekistan</span>
        </div>
        <p>ramic3323@gmail.com</p>
        <p>1234543523</p>
      </div>
      <button>Email me</button>
      <button></button>
    </div>
  );
}

export default Sidebar;
