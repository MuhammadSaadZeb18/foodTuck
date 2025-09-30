import classes from "../cheefs/cheefs.module.css";
import React from "react";
const CheefCard = (props) => {
  return (
    <li
      className={`${classes.cheef} rounded-lg  cursor-pointer hover:scale-95 transition-all duration-100 ease-in`}
    >
      <img src={props.img} className="rounded-lg " />
      <h6>{props.name}</h6>
      <p>{props.title}</p>
    </li>
  );
};

export default CheefCard;
