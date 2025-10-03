import React from "react";
import calender from "../../../assets/blog/Calendar.png";
import autIcon from "../../../assets/blog/User.png";
import classes from "../../layout/blog/blog.module.css";
import { Link } from "react-router-dom";
import { HiChatAlt2 } from "react-icons/hi";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
const BlogCard = ({ img, title, aut, id }) => {
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
      className={`rounded-lg relative flex flex-col gap-y-4 md:gap-y-7  mb-[2rem] w-[100%] shadow-md   cursor-pointer p-3  `}
    >
      <img src={img} className="w-full rounded-lg" />
      <div className="flex items-center gap-x-5 ">
        <div className="flex  gap-x-3 ">
          <FaCalendarDays size={20} color="#FF9F0D" />
          <p className="text-[#4F4F4F]">{formatted}</p>
        </div>
        <div className="flex items-center  gap-x-3">
          <FaRegUserCircle size={20} color="#FF9F0D" />
          <p className="text-[#4F4F4F]">{aut}</p>
        </div>
        <div className="flex items-center  gap-x-3">
          <HiChatAlt2 size={20} color="#FF9F0D" />
          <p className="text-[#4F4F4F]">3</p>
        </div>
      </div>
      <h4>{title}</h4>
      <div className="w-[70%] h-[1px] bg-[#8282821b]"></div>
      <p className="text-[#4F4F4F]">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>
      <Link to={`/blog/${id}`}>
        <button className="self-start text-[#FF9F0D] text-2xl font-normal px-8 py-4 border-[#FF9F0D] border-[1px] rounded-lg hover:bg-[#FF9F0D] cursor-pointer hover:text-white transition duration-100 ease-in">
          Detail Page
        </button>
      </Link>
      <div
        className={`bg-[#FF9F0D] rounded-b-xl text-white  absolute top-6 left-6 p-3  transition ease-in duration-100 hover:bg-white hover:text-black`}
      >
        <p>{formattedEdit}</p>
      </div>
    </div>
  );
};

export default BlogCard;
