import p1 from "../../../assets/menuPage/p1.png";
import p2 from "../../../assets/menuPage/p2.png";
import p3 from "../../../assets/menuPage/p3.png";
import p4 from "../../../assets/menuPage/p4.png";
import React from "react";
import cofe from "../../../assets/menuPage/Coffee.png";
import classes from "../../layout/Menu/menu.module.css";
import { Link } from "react-router-dom";
import {
  mainCourseMenu,
  drinksMenu,
  dessertMenu,
  starterMenu,
} from "./MenuData";
import MenuProducts from "./MenuProducts";
import Container from "../../ui/container";

const menuSections = [
  { title: "Main Course", img: p2, data: mainCourseMenu },
  { title: "Desserts", img: p3, data: dessertMenu },
  { title: "Drinks", img: p4, data: drinksMenu },
  { title: "Starter Menu", img: p1, data: starterMenu },
];

const Menu = () => {
  return (
    <Container>
      {menuSections.map((section, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? classes.flexo : classes.flexReverse} // alternate layout
        >
          <img className={classes.productsImg} src={section.img} />
          <div className={classes.products}>
            <img src={cofe} />
            <h2>{section.title}</h2>
            {section.data.map((item) => (
              <Link
                className={classes.links}
                key={item.id}
                to={`/shop/${item.id}`}
              >
                <MenuProducts
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  calories={item.calories}
                  price={item.price}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Menu;
