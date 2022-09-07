import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Stars() {
  return (
    <div className="Stars">
      <FontAwesomeIcon
        icon={faStar}
        transform="left-15 down-3 grow-10 rotate-15"
        className="star-one-left fa-xl"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-100 down-3 grow-10 rotate-50"
        className="star-one-right fa-xl"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-110 down-70 grow-8 "
        className="star-two-left fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-140 down-70 grow-8 "
        className="star-two-right fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-195 down-185 grow-6 rotate-75"
        className="star-three-left fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-155 down-185 grow-6 rotate-55"
        className="star-three-right fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-227 down-309 grow-4 "
        className="star-four-left fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-100 down-309 grow-4 "
        className="star-four-right fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-215 down-437 grow-2 "
        className="star-five-left fa-xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-12 down-437 grow-2 "
        className="star-five-right fa-xs"
      />
    </div>
  );
}
