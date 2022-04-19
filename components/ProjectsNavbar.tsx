import React, { FunctionComponent } from "react";
import { allCategories } from "../constants/data";
import { CategoryType } from "../constants/types";

const NavItem: FunctionComponent<{
  value: CategoryType;
  handleFilterCategory: Function;
}> = ({ value, handleFilterCategory }) => {
  return (
    <li
      className="cursor-pointer hover:text-blue-400 capitalize"
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{ handleFilterCategory: Function }> = (
  props
) => {
  return (
    <div className="flex px-3 py-2 space-x-3 list-none ">
      {allCategories.map((category: CategoryType) => (
        <NavItem key={category} value={category} {...props} />
      ))}
    </div>
  );
};

export default ProjectsNavbar;
