import React from "react";

import { motion } from "framer-motion";
const SecAnimation = ({ children, classes }) => {
  return (
    <motion.section
      className={classes}
      initial={{ opacity: 0, y: 50 }} // hidden + below
      whileInView={{ opacity: 1, y: 0 }} // animate on scroll
      viewport={{ once: false, amount: 0.2 }} // 👈 re-animate when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SecAnimation;
