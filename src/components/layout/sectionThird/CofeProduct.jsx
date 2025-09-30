import React from "react";
import classes from "../../layout/sectionThird/CofeProduct.module.css";
import img from "../../../assets/iconp1.png";
const CofeProduct = (props) => {
  return (
    <li className={classes.cofeProduct}>
      <div>
        <img className={`${classes.smallImg} border_radious`} src={img} />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default CofeProduct;
