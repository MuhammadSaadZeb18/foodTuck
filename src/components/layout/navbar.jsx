import lgo from "../../assets/logo.png";
import cartImg from "../../assets/cartIcon.png";
import search from "../../assets/searchIcon.png";
import closeicon from "../../assets/icons/close.svg";
import menuicon from "../../assets/icons/menu.svg";
import classes from "./navbar.module.css";
import Container from "../ui/container";
import { Link } from "react-router-dom";
import React from "react";
import { CartContext } from "../../store/cart-context";
import { useContext, useState, useEffect } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [showNav, setShowNav] = useState(false); // ❌ default false
  const [animate, setAnimate] = useState(false);
  const cartCount = cart.length;

  const [isStict, setIsStatic] = useState(false);
  useEffect(() => {
    const target = document.querySelector("#aboutSec");
    if (!target) return; // ✅ nothing to observe

    const observer = new IntersectionObserver(([entry]) => {
      setIsStatic(!entry.isIntersecting);
    });

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target); // ✅ only unobserve if still valid
      }
      observer.disconnect(); // ✅ fully clean up
    };
  }, []);

  return (
    <Container>
      <header className={isStict ? "stictic" : ""}>
        <div className="flex justify-between items-center mb-9">
          <div>
            <img alt="logo here" src={lgo} />
          </div>
          <nav
            className={`${classes.navLinks} ${showNav ? classes.showMenu : ""}`}
          >
            <li>
              <Link
                className={`${classes.navLink} ${classes.activePage}`}
                to="/"
                onClick={() => setShowNav(false)}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="/menu"
                onClick={() => setShowNav(false)}
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="/blog"
                onClick={() => setShowNav(false)}
              >
                blog
              </Link>
            </li>

            <li>
              <Link
                className={classes.navLink}
                to="/shop"
                onClick={() => setShowNav(false)}
              >
                shop
              </Link>
            </li>
            {/* Close btn only in mobile */}
            <li className={classes.closeBox}>
              <img
                className={classes.closeicon}
                src={closeicon}
                alt="close"
                onClick={() => setShowNav(false)}
              />
            </li>
          </nav>
          <div className={`${classes.actions} ${animate ? classes.bump : ""}`}>
            <Link className={classes.link} to="/cart">
              <div className={classes.cartButton}>
                <img alt="cartIcon" src={cartImg} />
                <h3 className={classes.cartItems}>{cartCount}</h3>
              </div>
            </Link>
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
  );
};

export default Navbar;
