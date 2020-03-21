import React, { Component } from "react";
import "./Headers.css";
class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-title">
        <h1>Portfolio Gallery</h1>
        <p>Curious about the story of each of my projects?</p>
      </div>
    );
  }
}
export default PageTitle;
