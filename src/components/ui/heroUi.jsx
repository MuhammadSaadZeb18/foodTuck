import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./container";
import { CartContext } from "../../store/cart-context";
import lgo from "../../assets/menuPage/Foodtuck.png";
import cartImg from "../../assets/cartIcon.png";
import closeicon from "../../assets/icons/close.svg";
import menuicon from "../../assets/icons/menu.svg";
import arrow from "../../assets/brands/left.png";
import classes from "../ui/heroUi.module.css";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/menu", label: "menu" },
  { to: "/blog", label: "blog" },
  { to: "/shop", label: "shop" },
];

const HeroUi = ({ title, prevLink, prevPage, activeLink, activepage }) => {
  const { cart: cartItems } = useContext(CartContext);
  const [animate, setAnimate] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const cartCount = cartItems.length;

  useEffect(() => {
    if (cartItems.length === 0) return;
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <div className={classes.menu}>
      <Container>
        <header className={classes.header}>
          <div className="flex justify-between items-center mb-9">
            <img alt="logo" src={lgo} />
            <nav
              className={`${classes.navLinks} ${
                showNav ? classes.showMenu : ""
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${classes.navLink} activePage`
                        : classes.navLink
                    }
                    to={link.to}
                    onClick={() => setShowNav(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className={classes.closeBox}>
                <img
                  className={classes.closeicon}
                  src={closeicon}
                  alt="close"
                  onClick={() => setShowNav(false)}
                />
              </li>
            </nav>
            <div
              className={`${classes.actions} ${animate ? classes.bump : ""}`}
            >
              <NavLink className={classes.link} to="/cart">
                <div className={classes.cartButton}>
                  <img alt="cartIcon" src={cartImg} />
                  <h3 className={classes.cartItems}>{cartCount}</h3>
                </div>
              </NavLink>
              <img
                className={classes.menuIcon}
                src={menuicon}
                alt="menu"
                onClick={() => setShowNav(true)}
              />
            </div>
          </div>
        </header>
      </Container>
      <div>
        <h2 className={classes.title}>{title}</h2>
        <div className="flex justify-center items-center">
          <Link to={prevLink}>
            <p className={`${classes.pageLink} text-white`}>{prevPage}</p>
          </Link>
          <img src={arrow} className="h-8 w-8" alt="arrow" />
          <Link to={activeLink}>
            <p className={`${classes.pageLink} text-[#ff9f0d]`}>{activepage}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroUi;
