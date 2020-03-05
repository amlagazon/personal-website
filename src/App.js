import { useMediaQuery } from "react-responsive";
import Navbar from "./component/menu/Navbar";
import PortfolioPage from "./component/pages/PortfolioPage";
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
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Navbar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10}>
            <PortfolioPage />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
