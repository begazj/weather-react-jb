import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Moon() {
  return (
    <div className="Moon">
      <FontAwesomeIcon
        icon={faMoon}
        transform="left-220 down-10 rotate--30"
        className="sun fa-sm"
      />
      <FontAwesomeIcon
        icon={faMoon}
        transform="right-220 down-10 rotate--30"
        flip="horizontal"
        className="moon fa-sm"
      />
    </div>
  );
}
