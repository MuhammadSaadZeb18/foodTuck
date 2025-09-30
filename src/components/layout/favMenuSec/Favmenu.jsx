import React, { useState, useEffect } from "react";
import Center from "../../ui/center";
import Container from "../../ui/container";
import classes from "../favMenuSec/categories.module.css";
import { Menu } from "./Products";
// import cofeIcon from "../../../assets/icons/iconFav.png"
const categories = [
  "Coffee",
  "Drinks",
  "Junks",
  "Coffee1",
  "Drinks2",
  "Junks3",
];

const Favmenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coffee");

  return (
    <Container>
      <Center>
        <h2>Our Favorites Menu</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque
        </p>
      </Center>

      <div className={`${classes.layout} `}>
        {/* Sidebar list (desktop only) */}
        <ul
          className={`${classes.categories} ${classes.desktopOnly} rounded-lg  `}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${classes.categore} rounded-lg ${
                selectedCategory === category ? classes.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {/* <img src={cofeIcon} /> */}
              {category}
            </button>
          ))}
        </ul>

        {/* Dropdown (mobile only) */}
        <select
          className={`${classes.dropdown} ${classes.mobileOnly}`}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Menu products */}
        <Menu selectedCategory={selectedCategory} />
      </div>
    </Container>
  );
};

export default Favmenu;
