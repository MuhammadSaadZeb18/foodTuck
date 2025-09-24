import React, { useState } from "react";
import classes from "../../layout/shop/shop.module.css";
import ShopProducts from "./ShopProducts";
import SideBar from "../../layout/blog/SideBar";
import {
  starterMenu,
  mainCourseMenu,
  drinksMenu,
  dessertMenu,
} from "../../layout/Menu/MenuData";

const Shop = () => {
  const [sortOrder, setSortOrder] = useState("low-high");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const products = [
    ...starterMenu,
    ...mainCourseMenu,
    ...drinksMenu,
    ...dessertMenu,
  ];

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-low") {
      return b.price - a.price;
    } else if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "descending") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={currentPage === i ? classes.activePage : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <div className={classes.sortBox}>
        <label htmlFor="price">Sort by:</label>
        <select
          id="price"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="ascending">Name: A–Z</option>
          <option value="descending">Name: Z–A</option>
        </select>
      </div>
      <ShopProducts products={currentProducts} />=
      <div className={classes.pagination}>{renderPagination()}</div>
    </div>
  );
};

export default Shop;
