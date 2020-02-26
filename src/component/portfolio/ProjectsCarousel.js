import React, { Component } from "react";
import { Image, Segment } from "semantic-ui-react";
import Carousel from "semantic-ui-carousel-react";
import "./Portfolio.css";
let elements = [
  {
    render: () => {
      return (
        <Image
          id="img"
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          fluid
        />
      );
    }
  },
  {
    render: () => {
      return (
        <Image
          id="img"
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          fluid
        />
      );
    }
  }
];
class ProjectsCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <Segment basic>
          <Carousel
            elements={elements}
            duration={5000}
            animation="fade left"
            showNextPrev={false}
            showIndicators={true}
          />
        </Segment>
      </div>
    );
  }
}

export default ProjectsCarousel;
