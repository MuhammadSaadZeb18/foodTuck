import classes from "../../layout/shop/shop.module.css";
import React from "react";
import ShopProduct from "./ShopProduct";
import { Link } from "react-router-dom";

const ShopProducts = ({ products }) => {
  return (
    <ul className={classes.productsLayout}>
      {products.map((product) => (
        <Link key={product.id} to={`/shop/${product.id}`}>
          <ShopProduct
            img={product.image}
            name={product.name}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ShopProducts;
