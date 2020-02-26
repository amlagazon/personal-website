import React, { Component } from "react";
import { Menu, Grid, Icon, Segment, Sidebar } from "semantic-ui-react";
import "./Menu.css";

class SidebarDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home", visible: false };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.show = this.show.bind(this);
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  show() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation="overlay"
                  icon="labeled"
                  inverted
                  onHide={() => this.show()}
                  vertical
                  visible={visible}
                  width="thin"
                >
                  <Menu.Item as="a">
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Icon name="gamepad" />
                    Games
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Icon name="camera" />
                    Channels
                  </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher className="side-bar-content">
                  <Menu pointing secondary>
                    <Menu.Item icon="content" onClick={this.show} />
                  </Menu>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SidebarDrawer;
