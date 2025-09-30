import classes from "../../layout/shop/shop.module.css";
import React from "react";

const ShopProduct = ({ name, img, price, oldPrice }) => {
  return (
    <li className={`${classes.product} rounded-lg`}>
      <div>
        <img src={img} className="rounded-lg" alt={name} />
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
