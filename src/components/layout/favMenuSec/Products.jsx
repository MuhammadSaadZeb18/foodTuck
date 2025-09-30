import classes from "../favMenuSec/categories.module.css";
import stars from "../../../assets/brands/Star.png";
import { products } from "./ProductData";
import React from "react";
export function ProductCard({ product }) {
  return (
    <li className={`${classes.menu} rounded-lg `}>
      <img
        src={product.image}
        alt={product.name}
        className={`${classes.productImage} rounded-lg `}
      />
      <div className="flex justify-between">
        <h6>{product.name}</h6>
        <img
          className="border_radious"
          src={stars}
          width={`96px`}
          height={"16px"}
        />
      </div>
      <p>{product.price}</p>
    </li>
  );
}
export function Menu({ selectedCategory }) {
  return (
    <ul className={`${classes.meniues} rounded-lg `}>
      {products[selectedCategory].map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
