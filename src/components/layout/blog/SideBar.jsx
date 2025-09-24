import React from "react";
import classes from "./sidebar.module.css";
import authorImg from "../../../assets/icons/user1.png"; // replace with your image

import p1 from "../../../assets/post1.png";
import p2 from "../../../assets/post2.png";
import p3 from "../../../assets/post3.png";
import p4 from "../../../assets/post4.png";
import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";
import { Search } from "lucide-react";
const Sidebar = () => {
  const recentPosts = [
    {
      id: 1,
      img: p1,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit...",
    },
    {
      id: 2,
      img: p2,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit...",
    },
    {
      id: 3,
      img: p3,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit...",
    },
    {
      id: 4,
      img: p4,
      date: "June 22, 2020",
      title: "Lorem ipsum dolor sit...",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Chicken Fry",
      count: 26,
      img: c1,
    },
    {
      id: 2,
      name: "Burger Food",
      count: 48,
      img: c2,
    },
    { id: 3, name: "Pizza", count: 16, img: c5 },
    {
      id: 4,
      name: "Fresh Fruits",
      count: 36,
      img: c3,
    },
    {
      id: 5,
      name: "Vegetables",
      count: 18,
      img: c4,
    },
  ];

  const tags = [
    "Sandwich",
    "Tikka",
    "Blog",
    "Restaurant",
    "Chicken Shawarma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  const gallery = [p1, p2, p3, p4, p1, p2];

  return (
    <aside className={classes.sidebar}>
      {/* Search */}
      <div className={classes.searchBox}>
        <input type="text" placeholder="Search Your Keyword..." />
        <button>
          <Search size={24} color="#fff" />
        </button>
      </div>

      {/* Author */}
      <div className={classes.authorCard}>
        <img src={authorImg} alt="Author" className={classes.authorImg} />
        <h3>Prince Miyako</h3>
        <p>Blogger/Photographer</p>
        <p>⭐⭐⭐⭐⭐ (1 Review)</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {/* <div className={classes.socials}>
          <i>🐦</i> <i>📷</i> <i>📌</i> <i>👍</i>
        </div> */}
      </div>

      {/* Recent Posts */}
      <div className={classes.widget}>
        <h4>Recent Post</h4>
        <div className={classes.recentposts}>
          {recentPosts.map((post) => (
            <div key={post.id} className={classes.recentPost}>
              <img src={post.img} alt={post.title} />
              <div>
                <p className={classes.date}>{post.date}</p>
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className={classes.widget}>
        <h4>Filter By Menu</h4>
        {categories.map((cat) => (
          <div key={cat.id} className={classes.category}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
            <span>{cat.count}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className={classes.widget}>
        <h4>Popular Tags</h4>
        <div className={classes.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className={classes.widget}>
        <h4 className="text-center">Photo Gallery</h4>
        <div className={classes.gallery}>
          {gallery.map((img, i) => (
            <img key={i} src={img} alt="gallery" />
          ))}
        </div>
      </div>

      {/* Follow Us */}
      {/* <div className={classes.widget}>
        <h4>Follow Us</h4>
        <div className={classes.socialIcons}>
          <span>🐦</span>
          <span>▶</span>
          <span>📌</span>
          <span>📷</span>
          <span>👍</span>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
