import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Live",
    "Music",
    "Playlists",
    "Plants",
    "CSS",
    "HTML",
    "Javascript",
    "Melodies",
    "Cooking",
    "Asian",
  ];
  return (
    <div className="flex">
      {btnList.map((btn, index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
