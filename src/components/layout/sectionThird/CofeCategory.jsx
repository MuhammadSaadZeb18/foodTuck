import React from "react";
import Container from "../../ui/container";
import Center from "../../ui/center";
import classes from "../../layout/sectionThird/cofeCate.module.css";
import CofeProduct from "./CofeProduct";
import cofeImg from "../../../assets/cofecup.png";

const products = [
  [
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
  ],
  [
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
    {
      title: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.",
    },
  ],
];

const CofeCategory = () => {
  return (
    <Container>
      <Center>
        <h2>Coffee Category</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
      </Center>
      <div className={classes.cofeCategoryLayout}>
        <ul className={classes.cofesWraper}>
          {products[0].map((item, index) => (
            <CofeProduct
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
        <img className={classes.cofeBigImg} src={cofeImg} />
        <ul className={classes.cofesWraper}>
          {products[1].map((item, index) => (
            <CofeProduct
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default CofeCategory;
