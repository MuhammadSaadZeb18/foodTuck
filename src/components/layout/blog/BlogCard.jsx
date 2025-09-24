import React from "react";
import calender from "../../../assets/blog/Calendar.png";
import autIcon from "../../../assets/blog/User.png";
import classes from "../../layout/blog/blog.module.css";
const BlogCard = ({ img, title, aut }) => {
  const today = new Date(); // current date
  const formatted = today.toLocaleDateString("en-US", {
    month: "short", // "Feb"
    day: "numeric", // 14
    year: "numeric", // 2022
  });
  const formattedEdit = today.toLocaleDateString("en-US", {
    month: "short", // "Feb"
    day: "numeric", // 14
  });

  return (
    <div
      className={`${classes.blogCard} relative flex flex-col gap-y-4 md:gap-y-7  mb-16 w-[100%]  md:w-[65%]  shadow-2xl cursor-pointer  `}
    >
      <img src={img} className="w-full" />
      <div className="flex items-center gap-x-5 ">
        <div className="flex items-center gap-x-3 ">
          <img src={calender} className="w-[24px] h-[24px]" />
          <p>{formatted}</p>
        </div>
        <div className="flex items-center  gap-x-3">
          <img src={autIcon} className="w-[24px] h-[24px]" />
          <p>{aut}</p>
        </div>
      </div>
      <h4>{title}</h4>
      <p className="text-[#4F4F4F]">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>

      <div
        className={`bg-[#FF9F0D] text-white  absolute top-8"  ${classes.dateBox}`}
      >
        <p className="px-11">{formattedEdit}</p>
      </div>
    </div>
  );
};

export default BlogCard;
