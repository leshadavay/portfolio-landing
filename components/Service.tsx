import React, { FunctionComponent } from "react";
import { ServiceType } from "../constants/types";
import Icon from "./Icon";

const Service: FunctionComponent<{ service: ServiceType }> = ({
  service: { iconName, about, title },
}) => {
  return (
    <div className="box">
      <Icon iconName={iconName} />
      <div>
        <h4>{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Service;
