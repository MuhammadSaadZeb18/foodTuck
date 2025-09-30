import React, { useRef, useEffect, useState } from "react";
import leftImg from "../../../assets/icons/left.png";
import rightImg from "../../../assets/icons/right.png";
import ShopProduct from "../shop/ShopProduct";
import Center from "../../ui/center";

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
  const elementRef = useRef(null);

  const handlePrev = () => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      elementRef.current.scrollLeft -= width;
    }
  };

  const handleNext = () => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      elementRef.current.scrollLeft += width;
    }
  };

  return (
    <div className="flex-col w-[85%] margin">
      <div className="mb-4">
        <Center>
          <h4 className="text-lg font-semibold">Similar Products</h4>
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              className="cursor-pointer p-2 rounded-full"
            >
              <img src={leftImg} alt="Prev" className="w-10 h-10" />
            </button>
            <button
              onClick={handleNext}
              className="cursor-pointer p-2 rounded-full"
            >
              <img src={rightImg} alt="Next" className="w-10 h-10" />
            </button>
          </div>
        </Center>
      </div>

      <div
        ref={elementRef}
        className="flex overflow-x-auto scroll-smooth gap-6 px-2 no-scrollbar"
      >
        {allMenu.map((product, index) => (
          <div key={index}>
            <ShopProduct
              img={product.image}
              name={product.name}
              oldPrice={product.oldPrice}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
