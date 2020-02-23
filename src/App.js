import React from "react";
import Navbar from "./component/menu/Navbar";
import Sidebar from "./component/menu/Sidebar";
import { Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
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
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else if (isDesktopOrLaptop || isTabletOrMobile) {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Navbar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
