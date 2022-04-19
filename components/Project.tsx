import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ProjectType } from "../constants/types";

const Project: FunctionComponent<{ project: ProjectType }> = ({
  project: {
    image_path,
    category,
    deployed_url,
    description,
    key_techs,
    name,
    github_url,
  },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        width={"200px"}
        height={"150px"}
        src={image_path}
        alt={name}
        objectFit="cover"
        className="cursor-pointer "
        onClick={() => setShowDetails(true)}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetails && (
        <div className="grid py-5 z-10 md:grid-cols-2 absolute top-0 p-5 left-0 w-full text-black bg-gray-100 gap-x-12 dark:text-white dark:bg-mydark-100 ">
          <div className="flex py-5 flex-col justify-center items-center">
            <Image
              width={"400px"}
              height={"250px"}
              src={image_path}
              alt={name}
              objectFit="cover"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-2 text-lg bg-gray-200 dark:bg-gray-800 dark:hover:bg-blue-400"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-2 text-lg bg-gray-200 dark:bg-gray-800 dark:hover:bg-blue-400"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h2 className="mb-3 font-medium">{description}</h2>
            <div className="flex flex-wrap mt-3 space-x-2 text-sm ">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
