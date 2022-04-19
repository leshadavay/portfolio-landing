export type IconNameType = string;

export type IconType = {
  iconName: IconNameType;
};

export interface ServiceType extends IconType {
  title: string;
  about: string;
}

export interface SkillType extends IconType {
  name: string;
  level: string;
}

export type CategoryType =
  | "all"
  | "react.js"
  | "next.js"
  | "node.js"
  | "html/css/js"
  | "mongo";

export interface ProjectType {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url?: string;
  category: CategoryType[];
  key_techs: string[];
}
