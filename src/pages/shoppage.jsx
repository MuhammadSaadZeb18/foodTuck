import Container from "../components/ui/container";
import HeroUi from "../components/ui/heroUi";
import Shop from "../components/layout/shop/Shop";
import React from "react";
import Footer from "../components/ui/footers/Footer";
const heroConent = {
  title: "Our Shop",
  prevPage: "Blog",
  activepage: "Shop",
  prevLink: "/blog",
  activeLink: "/shop",
};
const Menupage = () => {
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
        <Shop />
      </Container>
      <Footer />
    </>
  );
};

export default Menupage;
