import Cart from "../components/layout/cart/Cart";
import Container from "../components/ui/container";
import HeroUi from "../components/ui/heroUi";
import Footer from "../components/ui/footers/Footer";
import React from "react";
const CartPage = () => {
  const heroConent = {
    title: "Shopping Cart",
    prevPage: "Home",
    activepage: "",
    prevLink: "/",
    activeLink: "/menu",
  };
  return (
    <>
      <HeroUi
        title={heroConent.title}
        prevPage={heroConent.prevPage}
        activepage={heroConent.activepage}
        prevLink={heroConent.prevLink}
        activeLink={heroConent.activeLink}
      />
      <Container>
        <Cart />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default CartPage;
