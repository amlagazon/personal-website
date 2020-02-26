import React, { Component } from "react";
import { Menu, Grid, Segment, Sidebar, Icon } from "semantic-ui-react";
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
    const { visible, activeItem } = this.state;
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
                  <Menu.Item>
                    <Icon name="question circle" />
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="about"
                    active={activeItem === "about"}
                    onClick={this.handleItemClick}
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="portfolio"
                    active={activeItem === "portfolio"}
                    onClick={this.handleItemClick}
                  >
                    Portfolio
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="experience"
                    active={activeItem === "experience"}
                    onClick={this.handleItemClick}
                  >
                    Experience
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="education"
                    active={activeItem === "education"}
                    onClick={this.handleItemClick}
                  >
                    Education
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                  >
                    Contact
                  </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher className="side-bar-content">
                  <Menu pointing secondary>
                    <Menu.Item icon="sidebar" onClick={this.show} />
                  </Menu>
                  {this.props.carousel}
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
