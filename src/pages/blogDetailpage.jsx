import Container from "../components/ui/container";
import HeroUi from "../components/ui/heroUi";
import Footer from "../components/ui/footers/Footer";
import BlogDetail from "../components/layout/blog/BlogDetail";
import React from "react";
const BlogDetailPage = () => {
  const heroConent = {
    title: "Blog Lists",
    prevPage: "Blog",
    activepage: "Blog Detail",
    prevLink: "/blog",
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
        <BlogDetail />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default BlogDetailPage;
