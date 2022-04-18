import React, { FunctionComponent } from "react";
import { IconType } from "../constants/types";
import { getIcon } from "../constants/utils";

interface IconTypeExtended extends IconType {
  className?: string;
}

const Icon: FunctionComponent<IconTypeExtended> = ({ iconName, className }) => {
  const IconComponent = getIcon(iconName);
  return <IconComponent className={className} />;
};

export default Icon;
