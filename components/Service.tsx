import React, { FunctionComponent } from "react";
import { ServiceType } from "../constants/types";
import Icon from "./Icon";

const Service: FunctionComponent<{ service: ServiceType }> = ({
  service: { iconName, about, title },
}) => {
  return (
    <div className="flex items-center col-span-6 p-2 space-x-2">
      <div className="flex justify-center p-2">
        <Icon iconName={iconName} className="w-8 h-8 text-green-400" />
      </div>
      <div className="flex flex-col col-span-4">
        <h3>{title}</h3>
        <p className="">{about}</p>
      </div>
    </div>
  );
};

export default Service;
