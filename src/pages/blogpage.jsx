import Cart from "../components/layout/cart/Cart";
import Container from "../components/ui/container";
import HeroUi from "../components/ui/heroUi";
import Footer from "../components/ui/footers/Footer";
import React from "react";
import Blog from "../components/layout/blog/Blog";
const BlogPage = () => {
  const heroConent = {
    title: "Blog Lists",
    prevPage: "Home",
    activepage: "Blog",
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
        <Blog />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default BlogPage;
