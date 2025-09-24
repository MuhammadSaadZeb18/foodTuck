import HeroUi from "../components/ui/heroUi";
import Container from "../components/ui/container";
import ProductDetail from "../components/layout/Menu/ProductDetail";
import Footer from "../components/ui/footers/Footer";
import React from "react";

const heroConent = {
  title: "Our Product",
  prevPage: "Menu",
  activepage: "Product",
  prevLink: "/menu",
  activeLink: "/products/:id",
};
const ProductDetailPage = () => {
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
        <ProductDetail />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
