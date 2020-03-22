import React, { Component } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  List,
  Container,
  Divider
} from "semantic-ui-react";
import "./HomePage.css";
import CustomizeButton from "../small/CustomizeButton";
import Footer from "../footer/Footer";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="background-gradient">
          <br />
          <h1 className="name">
            Louie Lagazon<span class="blinking-cursor">|</span>
          </h1>
          <p className="description">developer • artist</p>
          <CustomizeButton />
        </div>
        <body className="homepage-body">
          <div className="body-1">
            <Segment vertical>
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Help Companies and Companions
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      We can give your company superpowers to do things that
                      they never thought possible. Let us delight your customers
                      and empower your needs... through pure data analytics.
                    </p>
                    <br />
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Make Bananas That Can Dance
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Yes that's right, you thought it was the stuff of dreams,
                      but even bananas can be bioengineered.
                    </p>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Image
                      bordered
                      rounded
                      size="large"
                      src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
          <Divider />
          <div className="body-2">
            <Segment style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      "What a Company"
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      That is what they all say about us
                    </p>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      "I shouldn't have gone with their competitor."
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      <Image avatar src="/images/avatar/large/nan.jpg" />
                      <b>Nan</b> Chief Fun Officer Acme Toys
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
          <Divider />
          <div className="body-1">
            <Segment vertical>
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column floated="right" width={6}>
                    <Image
                      bordered
                      rounded
                      size="large"
                      src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Help Companies and Companions
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      We can give your company superpowers to do things that
                      they never thought possible. Let us delight your customers
                      and empower your needs... through pure data analytics.
                    </p>
                    <br />
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Make Bananas That Can Dance
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Yes that's right, you thought it was the stuff of dreams,
                      but even bananas can be bioengineered.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        </body>
        <Footer />
      </div>
    );
  }
}
export default HomePage;
