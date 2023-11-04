import React from "react";
import "./Main.css";
import About from "../About/About";
import Project from "../Projects/Project";
import Experience from "../Experiences/Experience";
import Contact from "../Contact/Contact";
import ScrollToUp from "../ScrollToUp/ScrollToup"

const Pages = ()=> {
    return (
      <>
        <About />
        <Project />
        <Experience/>
        <ScrollToUp/>
        <Contact />
      </>
    );
}

export default Pages;
