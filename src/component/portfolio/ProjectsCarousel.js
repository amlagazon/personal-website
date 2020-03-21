import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
    partialVisibilityGutter: 30
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
        arrows={false}
        autoPlay
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Carousel>
    );
  }
}

export default ProjectsCarousel;
