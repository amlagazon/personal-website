import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Portfolio.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 30
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class ProjectsCarousel extends Component {
  render() {
    return (
      <Carousel
        focusOnSelect={true}
        partialVisible={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Image
          size="large"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
      </Carousel>
    );
  }
}

export default ProjectsCarousel;
