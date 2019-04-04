import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-4">
        <span className="card-title">{project.title}</span>
        <p>Post by the king of the world</p>
        <p className="grey-text">1st January 5pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
