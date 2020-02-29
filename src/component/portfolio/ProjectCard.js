import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              alt="Avatar"
              height="300vh"
              width="300vh"
            />
          </div>
          <div className="flip-card-back">
            <div className="content">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectCard;
