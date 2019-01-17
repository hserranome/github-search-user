import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import { GlobalStyle } from './components/styles/styles';
import AppContainer from './components/containers/AppContainer';

import Index from './pages/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <GlobalStyle />
          <Route path="/" component={Index} />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
