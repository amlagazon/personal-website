import React, { Component } from "react";
import {
  Grid,
  Divider,
  Image,
  Card,
  List,
  Segment,
  Container,
  Header
} from "semantic-ui-react";
import PageTitle from "../headers/PageTitle";
import "./PortfolioPage.css";
import Footer from "../footer/Footer";
class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="portfolio-body">
          <Grid>
            <Grid.Row>
              <PageTitle
                title="Artwork Gallery"
                description="Discover all the artworks I made"
              />
            </Grid.Row>
            <Grid.Column width={13}>
              <Divider />
            </Grid.Column>
            <Grid.Row />
            <Grid.Row>
              <Grid centered>
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row />
                <Grid.Row />
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      header="Elliot Baker"
                      meta="Friend"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default GalleryPage;
