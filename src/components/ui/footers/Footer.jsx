import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import Container from "../../ui/container";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        {/* Newsletter Section */}
        <div className={classes.newsletter}>
          <h2 className={classes.titles}>
            <span>Sti</span>ll You Need Our Support ?
          </h2>
          <p>
            Don’t wait make a smart &amp; logical quote here. It’s pretty easy.
          </p>
          <form className={classes.form}>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>

        <div className={classes.divider}></div>

        {/* Footer Content */}
        <div className={classes.container}>
          {/* About */}
          <div className={classes.about}>
            <h4 className={classes.titles}>About Us.</h4>
            <p>
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className={classes.opening}>
              <div className={classes.icon}>⏲</div>
              <div>
                <p>Opening Hours</p>
                <span>Mon - Sat (8.00 - 6.00)</span>
                <br />
                <span>Sunday - Closed</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className={classes.links}>
            <h4 className={classes.titles}>Useful Links</h4>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className={classes.help}>
            <h4 className={classes.titles}>Help?</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/">Term & Condition</Link>
              </li>
              <li>
                <Link to="/">Reporting</Link>
              </li>
              <li>
                <Link to="/">Documentation</Link>
              </li>
              <li>
                <Link to="/">Support Policy</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts
          <div className={classes.posts}>
            <h4 className={classes.titles}> Recent Post</h4>
            <div className={classes.post}>
              <img src="/images/food1.jpg" alt="Post" />
              <div>
                <p>Is fastfood good for your body?</p>
                <span>February 28, 2022</span>
              </div>
            </div>
            <div className={classes.post}>
              <img src="/images/food2.jpg" alt="Post" />
              <div>
                <p>Change your food habit with organic food</p>
                <span>February 28, 2022</span>
              </div>
            </div>
            <div className={classes.post}>
              <img src="/images/food3.jpg" alt="Post" />
              <div>
                <p>Do you like fastfood for your life?</p>
                <span>February 28, 2022</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className={classes.bottom}>
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
