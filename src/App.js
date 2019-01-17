import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import { GlobalStyle } from './components/styles/styles';
import AppContainer from './components/containers/AppContainer';

import Index from './pages/Index';
import SearchUser from './components/search/SearchUser';

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <GlobalStyle />
          <Route path="/" component={Index} />
          <Route exact path="/user/:user" component={SearchUser} />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
