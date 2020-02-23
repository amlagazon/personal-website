import React, { Component } from "react";
import { Menu, Grid, Icon } from "semantic-ui-react";

class Sidebar extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <Menu compact icon="labeled" vertical>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="gamepad" />
                  Home
                </Menu.Item>

                <Menu.Item
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="video camera" />
                  Messages
                </Menu.Item>

                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="video play" />
                  Friends
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Sidebar;
