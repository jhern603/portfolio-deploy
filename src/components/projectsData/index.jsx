import React from 'react';
import Data from './data.json';
const ProjectsData = () => {
  return Data.map((project) => {
    return (
      <li
        className={`project__item ${
          project.id % 2 === 1 ? 'project__item__even' : ''
        }`}
      >
        <img src={project.image} alt="" className="project__image" />
        <div className="right">
          <header className="project__header">{project.name}</header>
          <span className="project__description">{project.description}</span>
        </div>
      </li>
    );
  });
};
export default ProjectsData;
