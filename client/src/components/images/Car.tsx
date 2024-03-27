import React from "react";
import car from "../images/car.png";
import cash from "../images/cashback.png";
import award from "../images/award.png";
import clock from "../images/clock.png";
import group from "../images/group.png";

const Car = () => {
  return (
    <div>
      <img src={car.src} alt="" />
    </div>
  );
};
const Cash = () => {
  return (
    <div>
      <img src={cash.src} alt="" />
    </div>
  );
};
const Award = () => {
  return (
    <div>
      <img src={award.src} alt="" />
    </div>
  );
};
const Clock = () => {
  return (
    <div>
      <img src={clock.src} alt="" />
    </div>
  );
};
const Group = () => {
  return (
    <div className="flex justify-center">
      <img src={group.src} alt="" />
    </div>
  );
};

export { Car, Cash, Award, Clock, Group };
