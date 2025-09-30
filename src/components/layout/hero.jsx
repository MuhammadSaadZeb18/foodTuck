import classes from "../layout/hero.module.css";
import Navbar from "../layout/navbar";
import img from "../../assets/hero-cofe-bg.png";
import React from "react";
import Container from "../ui/container";
import smilg from "../../assets/smIcon.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <Navbar />
      <Container>
        <div className={classes.heroLayout} id="aboutSec">
          <div className={classes.heroText}>
            <p
              className="rounded-r-2xl"
              style={{
                display: "flex",
                gap: "1rem",
                border: "1px solid #bc9a6c",
                padding: "1rem",
                width: "fit-content",
              }}
            >
              Welcome to coffee hut <img src={smilg} />
            </p>
            <h1>Heal the world with coffee</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa conguei?
            </p>
            <div className={classes.actions}>
              <button className={`${classes.special} + rounded-lg`}>
                order now
              </button>
              <Link to={"/menu"}>
                <button className={`rounded-lg`}>see menu</button>
              </Link>
            </div>
          </div>
          <div className={classes.heroImg}>
            <img src={img} width={`100%`} height={`100%`} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
