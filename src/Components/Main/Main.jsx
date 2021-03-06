import React, { Component } from "react";
import "./Main.css";
import About from "../About/About";
import Project from "../Projects/Project";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Main = ()=> {
    return (
      <main>
        <section className="imagen" id="inicio">
          <div className="title">
            <h1>Desarrollador Frontend</h1>
            <p>Jhonatan Quirama Pino</p>
            <div className="container6">
              <ul className="lista">
                <li className="skill">
                  <i className="fab fa-html5" aria-hidden="true">
                    <h4>Html</h4>
                  </i>
                </li>
                <li className="skill">
                  <i className="fab fa-css3-alt" aria-hidden="true">
                    <h4>Css</h4>
                  </i>
                </li>
                <li className="skill">
                  <i className="fab fa-js" aria-hidden="true">
                    <h4>Js</h4>
                  </i>
                </li>
                <li className="skill">
                  <i className="fab fa-react" aria-hidden="true">
                    <h4>React</h4>
                  </i>
                </li>
                <li className="skill">
                  <i className="fab fa-git-square" aria-hidden="true">
                    <h4>Git</h4>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <About />
        <Project />
        <Experience/>
        <Contact />
      </main>
    );
}

export default Main;
