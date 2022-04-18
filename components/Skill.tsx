import React, { FunctionComponent } from "react";
import { SkillType } from "../constants/types";
import Icon from "./Icon";

const Skill: FunctionComponent<{
  skill: SkillType;
}> = ({ skill: { name, level, iconName } }) => {
  return (
    <div className="my-3 text-white bg-gray-300 rounded-full dark:bg-gray-800">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-600"
        style={{ width: level }}
      >
        <Icon iconName={iconName} className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Skill;
