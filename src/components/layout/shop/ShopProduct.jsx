import classes from "../../layout/shop/shop.module.css";
import React from "react";

const ShopProduct = ({ name, img, price, oldPrice }) => {
  return (
    <li className={classes.product}>
      <div>
        <img src={img} />
      </div>
      <div className={classes.productConent}>
        <h2>{name}</h2>
        <p>
          ${price} <span>{oldPrice}</span>
        </p>
      </div>
    </li>
  );
};

export default ShopProduct;
