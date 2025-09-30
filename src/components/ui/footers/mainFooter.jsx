import React from "react";
import classes from "../../ui/footers/mainFooter.module.css";
import Container from "../container";
import social from "../../../assets/s.png";
import logo from "../../../assets/logo.png";
const MainFooter = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.bg}>
          <Container>
            <div className={`${classes.newsletter} rounded-lg`}>
              <h2>
                Subscribe <br /> To Our Newsletter
              </h2>

              <div className={classes.inputBox}>
                <input type="email" placeholder="Enter your mail" />
                <button>Subscribe now</button>
              </div>
              <img src={social} />
            </div>
            <div className={classes.footerContent}>
              <div className={classes.column}>
                <img src={logo} />
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old.
                </p>
              </div>

              <div className={classes.column}>
                <h3>Explore</h3>
                <ul>
                  <li>&gt; Home</li>
                  <li>&gt; About us</li>
                  <li>&gt; Contact us</li>
                  <li>&gt; Blog</li>
                  <li>&gt; Team</li>
                  <li>&gt; Our Menu</li>
                </ul>
              </div>

              <div className={classes.column}>
                <h3>Contact us</h3>
                <ul>
                  <li>📍 Kolkata India , 3rd Floor, Office 45</li>
                  <li>📞 00965 - 96659986</li>
                  <li>✉️ M.Alyaqout@4house.Co</li>
                  <li>⏰ Sun - Sat / 10:00 AM - 8:00 PM</li>
                </ul>
              </div>
            </div>
          </Container>

          <div className={classes.copy}>
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
