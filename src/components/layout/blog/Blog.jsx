import React from "react";

// import Center from "../../ui/center";
import Container from "../../ui/container";
import BlogCard from "./BlogCard";
import classes from "../blog/blog.module.css";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../blog/blogsData";
import Sidebar from "../blog/SideBar";
const Blog = () => {
  return (
    <Container>
      <div className={classes.layout}>
        <div className="flex flex-col w-full">
          {blogs.map((blog, index) => (
            <Link key={index} to={`/blog/${blog.id}`}>
              <BlogCard
                img={blog.img}
                title={blog.title}
                key={index}
                aut={blog.aut}
              />
            </Link>
          ))}
        </div>
        <Sidebar />
      </div>
    </Container>
  );
};

export default Blog;
