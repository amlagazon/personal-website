import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import "./Menu.css";
class Navbar extends Component {
  state = { activeItem: "home", scrolled: false };
  handleItemClick = (_e, { name }) => this.setState({ activeItem: name });
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 300) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div className={this.state.scrolled ? "nav-bar-scrolled" : "nav-bar"}>
        <Menu
          pointing
          secondary
          inverted={!this.state.scrolled}
          size={this.state.scrolled ? "mini" : "huge"}
        >
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="portfolio"
            active={activeItem === "portfolio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="experience"
            active={activeItem === "experience"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="education"
            active={activeItem === "education"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <Button inverted size="tiny" icon="github" />
            <Button
              inverted
              size="tiny"
              style={{ marginLeft: "0.5em" }}
              icon="deviantart"
            />
            <Button
              size="tiny"
              inverted
              style={{ marginLeft: "0.5em" }}
              icon="linkedin"
            />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
