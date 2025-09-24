import React, { useState, useEffect } from "react";
import classes from "../../layout/slider/slider.module.css";
import leftImg from "../../../assets/icons/left.png";
import rightImg from "../../../assets/icons/right.png";
import ShopProduct from "../shop/ShopProduct";
import Center from "../../ui/Center";
import {
  starterMenu,
  mainCourseMenu,
  drinksMenu,
  dessertMenu,
} from "../../layout/Menu/MenuData";

const Slider = () => {
  const allMenu = [
    ...starterMenu,
    ...mainCourseMenu,
    ...dessertMenu,
    ...drinksMenu,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1); // mobile
      } else {
        setItemsPerPage(3); // desktop/tablet
      }
    };

    updateItems(); // run on mount
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleProducts = allMenu.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < allMenu.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  return (
    <>
      <div className={classes.top}>
        <Center>
          <h4>Similar Products</h4>
          <div className={classes.actions}>
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <img src={leftImg} alt="Prev" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= allMenu.length}
            >
              <img src={rightImg} alt="Next" />
            </button>
          </div>
        </Center>
      </div>

      <div className={classes.products}>
        {visibleProducts.map((product, index) => (
          <ShopProduct
            key={index}
            img={product.image}
            name={product.name}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
