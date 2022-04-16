import {
  MdDevices,
  MdOutlineSportsHandball,
  MdOutlineCleaningServices,
} from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { IconNameType } from "../constants/types";

const iconsMap = {
  MdDevices,
  MdOutlineSportsHandball,
  MdOutlineCleaningServices,
  SiPostman,
  AiOutlineDatabase,
  GiBookshelf,
};

export const getIcon = (iconName: IconNameType) => {
  return iconsMap[iconName];
};
