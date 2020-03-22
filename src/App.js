import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioPage from "./component/pages/PortfolioPage";
import GalleryPage from "./component/pages/GalleryPage";
import HomePage from "./component/pages/HomePage";
import { useMediaQuery } from "react-responsive";
import Navbar from "./component/menu/Navbar";
import { Grid } from "semantic-ui-react";
import React from "react";
import "./App.css";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  if (isPortrait || isTabletOrMobileDevice) {
    return (
      <Grid>
        <Grid.Row columns={1} only="mobile">
          <Grid.Column>
            {/* <SidebarDrawer carousel={<ProjectCarousel />} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else if (isDesktopOrLaptop || isTabletOrMobile) {
    return (
      <Router>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Navbar />
            </Grid.Column>
          </Grid.Row>
          <div className="current-page">
            <Grid.Row>
              <Grid.Column>
                <Switch>
                  <Route path="/portfolio-page">
                    <PortfolioPage />
                  </Route>
                  <Route path="/artwork-gallery">
                    <GalleryPage />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </div>
        </Grid>
      </Router>
    );
  }
}

export default App;
