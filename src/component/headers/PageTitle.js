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
        <h1>Portfolio Gallerry</h1>
        <h4>Curious about the story of each of my projects</h4>
      </div>
    );
  }
}
export default PageTitle;
