import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Creating</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Welcome to my website! My name is Camden Jenkins, and I'm a
            fullstack software developer. I have a passion for building software
            that solves real-world problems and makes people's lives easier.
            Whether it's creating a website, developing a mobile app, or
            building a complex software system, I'm always up for a challenge.
            In my free time, I love listening to music and discovering new
            artists. I find that music is a great way to unwind after a long day
            of coding, and it often helps me to think more creatively about my
            work. I also have two dogs that I adore, and I enjoy spending time
            with them whenever I can. On this website, you'll find information
            about my skills and experience as a software developer, as well as
            some of my personal projects and interests. I hope you enjoy
            browsing around, and please don't hesitate to contact me if you have
            any questions or would like to work together on a project.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
