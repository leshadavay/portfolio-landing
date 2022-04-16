import React, { FunctionComponent } from "react";
import { IconType } from "../constants/types";
import { getIcon } from "../constants/utils";

const Icon: FunctionComponent<IconType> = ({ iconName }) => {
  const IconComponent = getIcon(iconName);
  return <IconComponent />;
};

export default Icon;
