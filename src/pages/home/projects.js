import React from "react";
import { Link } from "react-router-dom";

import markdown from "../../images/markdown.png";
import cocktails from "../../images/cocktails.png";
import grocery from "../../images/grocery.png";
import stripe from "../../images/stripe.png";
import shopping from "../../images/shopping.png";
import coming from "../../images/coming.png";
import movie from "../../images/movie.png";
import color from "../../images/color-generator.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="project-head">Projects</h2>
      <p className="project-desc">
        Here are a few projects I've worked on recently.
      </p>

      <div className="basic-projects">
        <div className="project-inside">
          <div className="project-img">
            <img src={markdown} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Markdown editor</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://markdown-editor09.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="project-inside">
          <div className="project-img">
            <img src={cocktails} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Cocktail search</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://cocktail-menu09.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="project-inside">
          <div className="project-img">
            <img src={grocery} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Grocery bud</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://grocery-list-app09.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="project-inside">
          <div className="project-img">
            <img src={stripe} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Stripe landing page</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://stripe-landing-page09.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <div className="intermediate">
        <div className="project-inside">
          <div className="project-img">
            <img src={movie} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Advanced movie app</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://advance-movie-app.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="project-inside">
          <div className="project-img">
            <img src={color} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Color generator</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://color-shade-generator09.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="project-inside">
          <div className="project-img">
            <img src={shopping} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Shopping website</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://short-shop.netlify.app/"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="project-inside">
          <div className="project-img">
            <img src={coming} alt="Project" />
          </div>
          <div className="project-text">
            <p>
              <strong>Project name</strong>
            </p>
            <div className="project-btns">
              <Link to="" className="about-btn">
                About
              </Link>
              <a
                href="https://annukul.netlify.app"
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
    </div>
  );
};

export default Projects;
