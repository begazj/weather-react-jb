import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Stars() {
  return (
    <div className="Stars">
      <FontAwesomeIcon
        icon={faStar}
        transform="left-30 down-3 grow-10 rotate-15"
        className="star-one-left fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-120 down-3 grow-10 rotate-50"
        className="star-one-right fa-lg"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-145 down-85 grow-8 "
        className="star-two-left fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-175 down-85 grow-8 "
        className="star-two-right fa-md"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-217 down-215 grow-6 rotate-75"
        className="star-three-left fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-185 down-215 grow-6 rotate-55"
        className="star-three-right fa-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-250 down-370 grow-4 "
        className="star-four-left fa-xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-135 down-370 grow-4 "
        className="star-four-right fa-xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="left-230 down-535 grow-2 "
        className="star-five-left fa-2xs"
      />
      <FontAwesomeIcon
        icon={faStar}
        transform="right-10 down-536 grow-2 "
        className="star-five-right fa-2xs"
      />
    </div>
  );
}
