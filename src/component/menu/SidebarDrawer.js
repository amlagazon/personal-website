import React, { Component } from "react";
import {
  Menu,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Sidebar
} from "semantic-ui-react";

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

                <Sidebar.Pusher>
                  <Menu pointing secondary>
                    <Menu.Item name="menu" onClick={this.show} />
                  </Menu>
                  <Header as="h3">Application Content</Header>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
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
