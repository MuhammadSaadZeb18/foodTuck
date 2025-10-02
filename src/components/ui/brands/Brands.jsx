import React from "react";
import Container from "../container";
import Center from "../center";

import b1 from "../../../assets/brands/b1.png";
import b2 from "../../../assets/brands/b2.png";
import b3 from "../../../assets/brands/b3.png";
import b4 from "../../../assets/brands/b4.png";
import b5 from "../../../assets/brands/b5.png";
import b6 from "../../../assets/brands/b6.png";

import classes from "../../ui/brands/brands.module.css";
const Brands = () => {
  const imgs = [b1, b2, b3, b4, b5, b6];
  return (
    <Container>
      <Center>
        <p>Partners & Clients</p>
        <h2>We work with the best pepole</h2>
      </Center>
      <div className={classes.brands}>
        {imgs.map((i, index) => (
          <img className={classes.brandImg} src={i} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Brands;
