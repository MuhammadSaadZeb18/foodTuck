// import classes from "../layout/hero.module.css";
// import Navbar from "../layout/navbar";
// import img from "../../assets/hero-cofe-bg.png";
// import React from "react";
// import Container from "../ui/container";
// import smilg from "../../assets/smIcon.png";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// const Hero = () => {
//   return (
//     <div className={classes.hero}>
//       <Navbar />
//       <Container>
//         <div className={classes.heroLayout} id="aboutSec">
//           <div className={classes.heroText}>
//             <p
//               className="rounded-r-2xl "
//               style={{
//                 display: "flex",
//                 gap: "1rem",
//                 border: "1px solid #bc9a6c",
//                 padding: "1rem",
//                 width: "fit-content",
//               }}
//             >
//               Welcome to coffee hut <img src={smilg} />
//             </p>
//             <h1>Heal the world with coffee</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
//               sed pharetra dictum neque massa conguei?
//             </p>
//             <div className={classes.actions}>
//               <button className={`${classes.special} + rounded-lg`}>
//                 order now
//               </button>
//               <Link to={"/menu"}>
//                 <button className={`rounded-lg`}>see menu</button>
//               </Link>
//             </div>
//           </div>
//           <div className={classes.heroImg}>
//             <img src={img} width={`100%`} height={`100%`} />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Hero;




import classes from "../layout/hero.module.css";
import Navbar from "../layout/navbar";
import img from "../../assets/hero-cofe-bg.png";
import React from "react";
import Container from "../ui/container";
import smilg from "../../assets/smIcon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Navbar />
      <Container>
        {/* Animate the hero layout */}
        <motion.div
          className={classes.heroLayout}
          id="aboutSec"
          initial={{ opacity: 0, y: 10 }}   // start invisible + below
          animate={{ opacity: 1, y: 0 }}    // fade in + slide up
          transition={{ duration: 1, ease: "easeOut" }} // smooth animation
        >
          <motion.div
            className={classes.heroText}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p
              className="rounded-r-2xl "
              style={{
                display: "flex",
                gap: "1rem",
                border: "1px solid #bc9a6c",
                padding: "1rem",
                width: "fit-content",
              }}
            >
              Welcome to coffee hut <img src={smilg} alt="smile" />
            </p>
            <h1>Heal the world with coffee</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa conguei?
            </p>
            <div className={classes.actions}>
              <motion.button
                className={`${classes.special} rounded-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                order now
              </motion.button>
              <Link to={"/menu"}>
                <motion.button
                  className={`rounded-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  see menu
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={classes.heroImg}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={img} width={`100%`} height={`100%`} alt="coffee hero" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
