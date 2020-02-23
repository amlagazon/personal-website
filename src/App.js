import React from 'react';
import Navbar from "./component/menu/Navbar";
import Sidebar from "./component/menu/Sidebar";
import {Grid} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
    <Grid>
      <Grid.Row columns={1} only="mobile">
        <Grid.Column>
          <Sidebar/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row columns={1} only="desktop">
        <Grid.Column>
          <Navbar/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );
}

export default App;
