import React from "react";
import "./Main.css";
import Skills from "../Skills/Skills"
import Pages from "./Pages";

const Main = ()=> {
    return (
      <main>
        <section className="imagen" id="inicio">
          <div className="title">
            <h1>Desarrollador Frontend</h1>
            <p>Jhonatan Quirama Pino</p>
            <div className="container6">
            {Skills.map((skill, index) => {
              return (
              <ul className="lista" key={index}>
                <li className="skill">
                  <i className={skill.icon} aria-hidden="true">
                    <h4>{skill.language}</h4>
                  </i>
                </li>
              </ul>
              )})}
            </div>
          </div>
        </section>
        <Pages/>
      </main>
    );
}

export default Main;
