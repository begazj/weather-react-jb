import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Moon() {
  return (
    <div className="Moon">
      <FontAwesomeIcon
        icon={faMoon}
        transform="left-180 down-30 rotate--20"
        className="sun fa-sm"
      />
      <FontAwesomeIcon
        icon={faMoon}
        transform="right-180 down-30 rotate--20"
        flip="horizontal"
        className="moon fa-sm"
      />
    </div>
  );
}
