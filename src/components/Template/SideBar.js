import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Siyuan Zhao.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Siyuan Zhao</h2>
        <p>
          <a href="mailto:szhao4@wpi.edu">szhao4@wpi.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, My name is Siyuan Zhao. Building things is what I like. Now, I am a{" "}
        <a href="https://www.wpi.edu/academics/study/masters-information-technology">WPI Information Technology</a>{" "}
        graduate student. Before WPI I was at Hsoft , and Kumi.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
