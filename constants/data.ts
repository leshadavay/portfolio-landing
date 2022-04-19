import { ProjectType, ServiceType, SkillType } from "./types";

export const services: ServiceType[] = [
  {
    title: "Frontend Development",
    about:
      "Build awesome SPA/MPA websites using latest technologies and frameworks.",
    iconName: "MdDevices",
  },
  {
    title: "API Development",
    about:
      "Able to develop scalable robust REST API using Node.js, Laravel, CodeIgniter",
    iconName: "SiPostman",
  },
  {
    title: "Backend Development",
    about:
      "Build fast & scalable servers, services, databases using popular framewors ",
    iconName: "AiOutlineDatabase",
  },
  {
    title: "Web Sraping",
    about: "Need to get any information from the specific website? No problem!",
    iconName: "MdOutlineCleaningServices",
  },
  {
    title: "Daily Challenge",
    about:
      "Every programmer should practise and improve their thinkings and problem solving skills. -Me-",
    iconName: "GiBookmarklet",
  },
  {
    title: "Boost your energy",
    about: "Time to move body and get some refreshment",
    iconName: "MdOutlineSportsHandball",
  },
];

export const languages: SkillType[] = [
  { name: "C/C++", level: "50%", iconName: "BsCircleFill" },
  { name: "Java", level: "60%", iconName: "BsCircleFill" },
  { name: "Python", level: "80%", iconName: "BsCircleFill" },
  { name: "PHP", level: "80%", iconName: "BsCircleFill" },
  { name: "Mysql", level: "80%", iconName: "BsCircleFill" },
  { name: "Javascript", level: "85%", iconName: "BsCircleFill" },
  { name: "HTML/Css", level: "90%", iconName: "BsCircleFill" },
];

export const framewords: SkillType[] = [
  { name: "Django", level: "40%", iconName: "BsCircleFill" },
  { name: "Laravel", level: "70%", iconName: "BsCircleFill" },
  { name: "jQuery", level: "80%", iconName: "BsCircleFill" },
  { name: "Next.js", level: "70%", iconName: "BsCircleFill" },
  { name: "Node.js", level: "80%", iconName: "BsCircleFill" },
  { name: "React.js", level: "85%", iconName: "BsCircleFill" },
  { name: "Codeigniter", level: "90%", iconName: "BsCircleFill" },
];

export const projects: ProjectType[] = [
  {
    name: "한글 공부",
    description: "Learn korean alphabets in fast & efficient way",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["html/css/js"],
    key_techs: ["spa", "javascript", "pwa", "bootstrap", "jquery"],
  },
  {
    name: "Hotel booking",
    description: "Sample of hotel rooms booking system",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["next.js", "mongo"],
    key_techs: ["next.js", "bootstrap", "mongo", "stripe"],
  },
  {
    name: "Landing Website",
    description: "Sample of landing page",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["next.js"],
    key_techs: ["react.js", "bootstrap"],
  },
  {
    name: "한글 공부",
    description: "Learn korean alphabets in fast & efficient way",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["next.js"],
    key_techs: ["react.js", "bootstrap"],
  },
  {
    name: "Hotel booking",
    description: "Sample of hotel rooms booking system",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["next.js"],
    key_techs: ["react.js", "bootstrap"],
  },
  {
    name: "Landing Website",
    description: "Sample of landing page",
    image_path: "/assets/youtube.png",
    deployed_url: "",
    github_url: "",
    category: ["next.js"],
    key_techs: ["react.js", "bootstrap"],
  },
];

export const defaultCategory = "all";
export const allCategories = [
  defaultCategory,
  "react.js",
  "next.js",
  "html/css/js",
  "mongo",
];
