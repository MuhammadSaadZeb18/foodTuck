import classes from "../cheefs/cheefs.module.css";
import React from "react";
const CheefCard = (props) => {
  return (
    <li className={classes.cheef}>
      <img src={props.img} />
      <h6>{props.name}</h6>
      <p>{props.title}</p>
    </li>
  );
};

export default CheefCard;
