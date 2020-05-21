import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LeftSideBar } from './components/side-bar-left/side-bar-left.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      sectionTitle: '01 - HomePage',
      logoVersion: 'regular' 
    }
  }

  render() {
    return (
      <div>
        <LeftSideBar 
          sectionTitle={this.state.sectionTitle}
          logoVersion={this.state.logoVersion}
        />
        <div class='spacer' />
        
      </div>
    )
  }
}

export default App;
