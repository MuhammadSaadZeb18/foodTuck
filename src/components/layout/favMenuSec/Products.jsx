import classes from "../favMenuSec/categories.module.css";
import stars from "../../../assets/brands/Star.png";
import { products } from "./ProductData";
import React from "react";
export function ProductCard({ product }) {
  return (
    <li className={classes.menu}>
      <img
        src={product.image}
        alt={product.name}
        className={classes.productImage}
      />
      <div className="flex justify-between">
        <h6>{product.name}</h6>
        <img src={stars} width={`96px`} height={"16px"} />
      </div>
      <p>{product.price}</p>
    </li>
  );
}
export function Menu({ selectedCategory }) {
  return (
    <ul className={classes.meniues}>
      {products[selectedCategory].map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
