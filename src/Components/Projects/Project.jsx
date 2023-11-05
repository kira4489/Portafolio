import React from "react";
import "./Project.css";
import Array from "./Array";
import Card from "./Card";

const Project = () => {
    return (
      <div className="proyectos" id="projects">
        <h2>Proyectos</h2>
        <div className="retos">
          {Card.map((card, index) => {
            return <Array key={index} titulo={card.titulo} imagen={card.imagen} link={card.link}/>
          })}
        </div>
      </div>
    );
  }

export default Project
