import Menu from "../components/layout/Menu/Menu";
import HeroUi from "../components/ui/heroUi";

import React from "react";
import Brands from "../components/ui/brands/Brands";
import Footer from "../components/ui/footers/Footer";
const heroConent = {
  title: "Our Menu",
  prevPage: "Home",
  activepage: "Menu",
  prevLink: "/",
  activeLink: "/menu",
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

      <Menu />
      {/* <img src={cus} style={{ width: "100%", height: "460px" }} /> */}

      <Brands />
      <Footer />
    </>
  );
};

export default Menupage;
