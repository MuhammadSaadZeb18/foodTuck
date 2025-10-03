// import classes from "../cheefs/cheefs.module.css";
// import React from "react";
// const CheefCard = (props) => {
//   return (
//     <li
//       className={`${classes.cheef} rounded-lg  cursor-pointer hover:scale-95 transition-all duration-100 ease-in`}
//     >
//       <img src={props.img} className="rounded-lg " />
//       <h6>{props.name}</h6>
//       <p>{props.title}</p>
//     </li>
//   );
// };

// export default CheefCard;

import classes from "../cheefs/cheefs.module.css";
import React from "react";
import { motion } from "framer-motion";

const CheefCard = (props) => {
  return (
    <motion.li
      className={`${classes.cheef} rounded-lg cursor-pointer  transition-all duration-100 ease-in  hover:bg-gray-100`}
      initial={{ opacity: 0, y: 50 }} // hidden + below
      whileInView={{ opacity: 1, y: 0 }} // animate on scroll
      viewport={{ once: false, amount: 0.2 }} // 👈 re-animate when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // hover effect
    >
      <img src={props.img} className="rounded-lg " alt={props.name} />
      <h6>{props.name}</h6>
      <p>{props.title}</p>
    </motion.li>
  );
};

export default CheefCard;
