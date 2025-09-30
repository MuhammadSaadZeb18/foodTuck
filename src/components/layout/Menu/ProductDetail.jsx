import classes from "../../layout/Menu/productdetail.module.css";
import plus from "../../../assets/Plus.png";
import minus from "../../../assets/Minus.png";
import stars from "../../../assets/menuPage/Star.png";
import p1 from "../../../assets/menuPage/p1.png";
import p2 from "../../../assets/menuPage/p2.png";
import p3 from "../../../assets/menuPage/p3.png";
import p4 from "../../../assets/menuPage/p4.png";
import React from "react";
import Slider from "../slider/Slider";
import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  starterMenu,
  mainCourseMenu,
  drinksMenu,
  dessertMenu,
} from "../../layout/Menu/MenuData";
import { CartContext } from "../../../store/cart-context";

const allMenus = [
  ...starterMenu,
  ...mainCourseMenu,
  ...drinksMenu,
  ...dessertMenu,
];

const imgs = [p1, p2, p3, p4];
const ProductDetail = () => {
  const { id } = useParams();
  const product = allMenus.find((item) => item.id === Number(id));
  const [counter, setCounter] = useState(1);

  const [selectedImg, setSelectedImg] = useState(product?.image || imgs[0]);

  const { addToCart } = useContext(CartContext);

  const increaseHandler = () => setCounter((prev) => prev + 1);
  const decreaseHandler = () => setCounter((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addHandler = () => {
    addToCart({ ...product, quantity: counter });
  };

  return (
    <>
      <div className={classes.producdetailLayout}>
        <div className={classes.imgsBox}>
          {/* 🟢 Show selected image as big one */}
          <img
            className={`${classes.prodcutImage}  rounded-lg`}
            src={selectedImg}
            alt={product.name}
          />
          <div className={classes.smallImgs}>
            {imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImg(img)} // 🟢 Change main image
                className={`${classes.thumbnail} ${
                  selectedImg === img ? classes.activeThumb : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className={classes.prodcutContentLayout}>
          <div className={classes.productText}>
            <h2 className={classes.productName}>{product.name}</h2>
            <p className={classes.description}>{product.description}</p>
          </div>
          <div className={classes.priceBox}>
            <h4>{product.price}$</h4>
            <div className={classes.rating}>
              <img src={stars} alt="stars" />
              <p>5.0 Ratings</p>
              <p>22 Reviews</p>
            </div>
            <div className={classes.actions}>
              <div className={classes.counter}>
                <button onClick={decreaseHandler}>
                  <img src={minus} alt="decrease" />
                </button>
                <div className={classes.counterValue}>
                  <h6>{counter}</h6>
                </div>
                <button onClick={increaseHandler}>
                  <img src={plus} alt="increase" />
                </button>
              </div>
              <div className={classes.actions}>
                <button className={classes.cart} onClick={addHandler}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Slider product={product} /> */}
    </>
  );
};

export default ProductDetail;
