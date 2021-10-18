import React, { useState, useEffect } from "react";

import Header from "./header";
import Content from "./content";
import About from "./about";
import Projects from "./projects";
// import Contact from './contact';
import Footer from "./footer";

const Home = () => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(() => !alert);
    }, 3000);
  }, []);

  return (
    <div>
      {alert ? (
        <p style={{ color: "red" }}>
          NOTE: This website is not optimized for smaller devices.
        </p>
      ) : (
        ""
      )}
      <Header />
      <About />
      <Content />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
