import Hero from "../components/layout/hero";
import React from "react";
import CofeCategory from "../components/layout/sectionThird/CofeCategory";
import AboutUs from "../components/layout/sectionTwo/aboutUs";
import mainImg from "../assets/s2-main-img.png";
import logo from "../assets/s2-logo.png";
import logo3 from "../assets/s3-logo.png";
import Favmenu from "../components/layout/favMenuSec/Favmenu";
import Cheefs from "../components/layout/cheefs/Cheefs";
import Brands from "../components/ui/brands/Brands";
import MainFooter from "../components/ui/footers/mainFooter.jsx";
// import Blog from "../components/layout/blog/Blog.jsx";

import glassImg from "../assets/glass.png";
import Testimonal from "../components/layout/testimonal/Testimonal.jsx";

const HomePage = () => {
  const isAbout = true;
  return (
    <>
      <Hero />
      <AboutUs
        isAbout={isAbout}
        mainImg={mainImg}
        logo={logo}
        height={`20px`}
        width={`70px`}
        title={"We are the best qualityCoffee maker"}
      />
      <CofeCategory />

      <AboutUs
        isAbout={!isAbout}
        mainImg={glassImg}
        logo={logo3}
        height={`30px`}
        width={`130px`}
        title={"Best quality food and coffee maker"}
      />

      <Favmenu />
      <Cheefs />
      <Testimonal />
      {/* <Blog /> */}
      <Brands />
      <MainFooter />
    </>
  );
};

export default HomePage;
