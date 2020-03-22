import React, { Component } from "react";
import "./CustomizeButton.css";
class CustomizeButton extends Component {
  render() {
    return (
      <div>
        <div class="basicBox">
          DISCOVER NOW
          <svg
            width="130"
            height="65"
            viewBox="0 0 130 65"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" fill="none" width="130" height="65" />
          </svg>
        </div>
      </div>
    );
  }
}
export default CustomizeButton;
