import {
  MdDevices,
  MdOutlineSportsHandball,
  MdOutlineCleaningServices,
} from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiBookmarklet } from "react-icons/gi";
import { BsCircleFill } from "react-icons/bs";
import { IconNameType } from "../constants/types";

const iconsMap = {
  MdDevices,
  MdOutlineSportsHandball,
  MdOutlineCleaningServices,
  SiPostman,
  AiOutlineDatabase,
  GiBookmarklet,
  BsCircleFill,
};

export const getIcon = (iconName: IconNameType) => {
  return iconsMap[iconName];
};
