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
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="logout"
                    active={activeItem === "logout"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
