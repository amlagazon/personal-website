import React, { Component } from "react";
import { Menu, Grid } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (_e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row columns={1} only="desktop">
            <Grid.Column>
              <Menu pointing secondary>
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
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
