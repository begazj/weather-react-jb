import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Stars() {
  return (
    <div className="Stars">
      <FontAwesomeIcon
        icon={faStar}
        transform="left-23 down-15 grow-10 rotate-15"
        className="star-one-left fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-114 down-15 grow-10 rotate-50"
        className="star-one-right fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-123 down-93 grow-8 "
        className="star-two-left fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-159 down-93 grow-8 "
        className="star-two-right fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-193 down-208 grow-6"
        className="star-three-left fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-165 down-208 grow-6 "
        className="star-three-right fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-230 down-350 grow-4 "
        className="star-four-left fa-xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-110 down-350 grow-4 "
        className="star-four-right fa-xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-230 down-500 grow-2 "
        className="star-five-left fa-2xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-10 down-500 grow-2 "
        className="star-five-right fa-2xs"
      />
    </div>
  );
}
