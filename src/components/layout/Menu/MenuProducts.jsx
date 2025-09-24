import classes from "../../layout/Menu/menu.module.css";
import React from "react";
const MenuProducts = ({ name, description, calories, price }) => {
  return (
    <div className={classes.productLists}>
      <div>
        <h6>{name}</h6>
        <p className={classes.description}>{description}</p>
        <p className={classes.calories}>{calories}calc</p>
      </div>
      <div>
        <h6 className={classes.price}>{price}$</h6>
      </div>
    </div>
  );
};

export default MenuProducts;
