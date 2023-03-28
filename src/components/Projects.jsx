import React from "react";
import { projects_js } from "../data";
import { projects_react } from "../data";
import Title from "./Title";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section className="section" id="js">
        <Title title="JS" subTitle="Projects" />
        <div className="section-center featured-center">
          {projects_js.map((item) => {
            return <Project {...item} key={item.id} />;
          })}
        </div>
      </section>
      <section className="section" id="react">
        <Title title="REACT" subTitle="Projects" />
        <div className="section-center featured-center">
          {projects_react.map((item) => {
            return <Project {...item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
