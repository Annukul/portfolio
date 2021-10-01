import React from "react";
import { Link } from "react-router-dom";

import markdown from "../../images/markdown.png";
import cocktails from "../../images/cocktails.png";
import grocery from "../../images/grocery.png";
import stripe from "../../images/stripe.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="project-head">Projects</h2>
      <p className="project-desc">Here are a few projects I've worked on recently.</p>

      <div className="basic-projects">
            <div className="basic-inside">
            <div className="basic-img">
                <img src={markdown} alt="Project" />
            </div>
            <div className="basic-text">
                <p>
                <strong>Markdown editor</strong>
                </p>
                <div className="basic-btns">
                <Link to="" className="about-btn">About</Link>
                <Link to="" className="visit-btn">Visit</Link>
                </div>
            </div>
            </div>

            <div className="basic-inside">
            <div className="basic-img">
                <img src={cocktails} alt="Project" />
            </div>
            <div className="basic-text">
                <p>
                <strong>Cocktail search</strong>
                </p>
                <div className="basic-btns">
                <Link to="" className="about-btn">About</Link>
                <Link to="" className="visit-btn">Visit</Link>
                </div>
            </div>
            </div>

            <div className="basic-inside">
            <div className="basic-img">
                <img src={grocery} alt="Project" />
            </div>
            <div className="basic-text">
                <p>
                <strong>Grocery bud</strong>
                </p>
                <div className="basic-btns">
                <Link to="" className="about-btn">About</Link>
                <Link to="" className="visit-btn">Visit</Link>
                </div>
            </div>
            </div>

            <div className="basic-inside">
            <div className="basic-img">
                <img src={stripe} alt="Project" />
            </div>
            <div className="basic-text">
                <p>
                <strong>Stripe landing page</strong>
                </p>
                <div className="basic-btns">
                <Link to="" className="about-btn">About</Link>
                <Link to="" className="visit-btn">Visit</Link>
                </div>
            </div>
            </div>
      </div>
      <br />
      <h2>More coming...</h2>
    </div>
  );
};

export default Projects;
