import React, { useState, useEffect } from "react";

import Container from "../../ui/container";
import classes from "../../layout/testimonal/testimonal.module.css";
import autImg from "../../../assets/icons/user1.png";
import autImg2 from "../../../assets/icons/user2.avif";
import autImg3 from "../../../assets/icons/user3.avif";
import autImg4 from "../../../assets/icons/user4.avif";
import User from "./User.";
import quote from "../../../assets/quote.png";
import testimonal from "../../../assets/testimonal.png";
import cofeVideo from "../../../assets/cofeVideo.mp4";

const ourUsers = [
  {
    userImg: autImg,
    userName: "Saad Zeb",
    userRole: "Founder",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nec blandit vulputate varius at quis non.",
  },
  {
    userImg: autImg2,
    userName: "Abdullah",
    userRole: "Engineer",
    description:
      " Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus loremhendrerit enim donec ut",
  },
  {
    userImg: autImg4,
    userName: "Maryum",
    userRole: "Ploice",
    description:
      "ltricies. Consectetur et faucibus vivamus loremhendrerit  consectetur adipiscing elit.Nec blandit vu",
  },
];

const Testimonal = () => {
  const [curUser, setCurUser] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurUser((prev) => (prev + 1 >= ourUsers.length ? 0 : prev + 1));
    }, 1500); // 1000ms = 1s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <Container>
      <div className={classes.testimonal}>
        <div className={classes.text}>
          <img src={testimonal} className="w-[100px] h-[25px]" />
          <h2>Our customer say</h2>
          <img src={quote} className="h-[70px] w-[70px]" />
          <p>{ourUsers[curUser].description}</p>

          <User
            role={ourUsers[curUser].userRole}
            name={ourUsers[curUser].userName}
            img={ourUsers[curUser].userImg}
          />
          <div className="flex gap-6 mt-4">
            {ourUsers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurUser(index)}
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  index === curUser ? "bg-[#bc9a6c]" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className={classes.video}>
          <video
            className={classes.videoS}
            src={cofeVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false} /* hide controls if not needed */
          />
        </div>
      </div>
    </Container>
  );
};

export default Testimonal;
