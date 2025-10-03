// import React from "react";
// import classes from "../cheefs/cheefs.module.css";
// import chef1 from "../../../assets/chef1.png";
// import chef2 from "../../../assets/chef2.png";
// import chef3 from "../../../assets/chef3.png";
// import chef4 from "../../../assets/chef4.png";
// import CheefCard from "./CheefCard";
// import Center from "../../ui/center";
// import Container from "../../ui/container";

// const Cheefs = () => {
//   const data = [
//     { title: "Chef", name: "Saad", img: chef1 },
//     { title: "Founder", name: "Talha", img: chef2 },
//     { title: "Specialist", name: "Uzair", img: chef3 },
//     { title: "Owner", name: "James", img: chef4 },
//   ];

//   return (
//     <Container>
//       <Center>
//         <h2>Meet our chef</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
//           pharetra dictum neque
//         </p>
//       </Center>

//       <ul className={classes.layout}>
//         {data.map((chef, i) => (
//           <CheefCard
//             key={i}
//             img={chef.img}
//             title={chef.title}
//             name={chef.name}
//           />
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default Cheefs;

import React from "react";
import classes from "../cheefs/cheefs.module.css";
import chef1 from "../../../assets/chef1.png";
import chef2 from "../../../assets/chef2.png";
import chef3 from "../../../assets/chef3.png";
import chef4 from "../../../assets/chef4.png";
import CheefCard from "./CheefCard";
import Center from "../../ui/center";
import Container from "../../ui/container";
import { motion } from "framer-motion";

const Cheefs = () => {
  const data = [
    { title: "Chef", name: "Saad", img: chef1 },
    { title: "Founder", name: "Talha", img: chef2 },
    { title: "Specialist", name: "Uzair", img: chef3 },
    { title: "Owner", name: "James", img: chef4 },
  ];

  return (
    <Container>
      <Center>
        <h2>Meet our chef</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque
        </p>
      </Center>

      <motion.ul
        className={classes.layout}
        // className="flex gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 re-animate when visible
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {data.map((chef, i) => (
          <CheefCard
            key={i}
            img={chef.img}
            title={chef.title}
            name={chef.name}
          />
        ))}
      </motion.ul>
    </Container>
  );
};

export default Cheefs;
