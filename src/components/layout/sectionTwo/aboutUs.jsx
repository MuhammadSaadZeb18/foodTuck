import Container from "../../ui/container";
import React from "react";
import CofeMaker from "./CofeMaker";
import Check from "./check";
import classes from "../../layout/sectionTwo/aboutUs.module.css";
const AboutUs = (props) => {
  return (
    <Container>
      <section className={classes.layout}>
        <div className={classes.imgBox}>
          <img className={classes.img} src={props.mainImg} />
        </div>
        <div className={classes.text}>
          <img src={props.logo} height={props.height} width={props.width} />
          <h2>{props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pelle ntesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urn a, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          {props.isAbout ? <Check /> : <CofeMaker />}
          <button className={`${classes.learnMore} rounded-lg`}>
            Learn More
          </button>
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
