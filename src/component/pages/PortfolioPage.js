import React, { Component } from "react";
import {
  Grid,
  Item,
  Button,
  Icon,
  Image,
  Label,
  Divider
} from "semantic-ui-react";
// import ProjectCarousel from "../portfolio/ProjectsCarousel";
import PageTitle from "../headers/PageTitle";
import "./PortfolioPage.css";
import Footer from "../footer/Footer";
const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);
class PortfolioPae extends Component {
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
                title="Project Portfolio"
                description="Curious about the story of each of my projects?"
              />
            </Grid.Row>
            <Grid.Column width={13}>
              <Divider />
            </Grid.Column>
            <Grid.Row />
            <Grid.Row>
              <Item.Group divided>
                <Item>
                  <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  <Item.Content>
                    <Item.Header as="a">12 Years a Slave</Item.Header>
                    <Item.Meta>
                      <span className="cinema">Union Square 14</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                      <Button primary floated="right">
                        Buy tickets
                        <Icon name="right chevron" />
                      </Button>
                      <Label>Limited</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  <Item.Content>
                    <Item.Header as="a">My Neighbor Totoro</Item.Header>
                    <Item.Meta>
                      <span className="cinema">IFC Cinema</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                      <Button primary floated="right">
                        Buy tickets
                        <Icon name="right chevron" />
                      </Button>
                      <Label>Limited</Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  <Item.Content>
                    <Item.Header as="a">Watchmen</Item.Header>
                    <Item.Meta>
                      <span className="cinema">IFC</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                      <Button primary floated="right">
                        Buy tickets
                        <Icon name="right chevron" />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PortfolioPae;
