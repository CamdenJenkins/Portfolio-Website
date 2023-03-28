import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/heistcoffee.png";
import IMG2 from "../../assets/tictactoe.png";
import IMG3 from "../../assets/Qwirty.png";
import IMG4 from "../../assets/fitnessTracker.png";
import IMG5 from "../../assets/DogShow.png";
import IMG6 from "../../assets/coffeeClicker.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="comtainer portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project__title" />
          </div>
          <h3>Heist Coffee Shop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Coffee-Mug-Bandits/graceShopper"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a href="https://heistcoffee8.fly.dev/" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project__title" />
          </div>
          <h3>Tic-Tac-Toe</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CamdenJenkins"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://tourmaline-paprenjak-f730b7.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project__title" />
          </div>
          <h3>Qwirty</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CamdenJenkins"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://keen-pastelito-40a392.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project__title" />
          </div>
          <h3>Fitness Tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CamdenJenkins/fitnessTrackerBackend"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://fitnesstracker12.fly.dev/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project__title" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CamdenJenkins/Puppy-Bowl-React"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://thunderous-cassata-4f206e.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="project__title" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CamdenJenkins/coffeeClicker"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://heartfelt-quokka-356fa9.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
