import React, { Component } from 'react';
import { Route } from "react-router-dom";


import Header from '../components/navigation/Header';
import SearchUserInput from '../components/search/SearchUserInput';
import SearchUser from '../components/search/SearchUser';


class Index extends Component {
    render() {
      return (
        <div>
            <Header />
            <SearchUserInput />

            <Route exact path="/user/:user" component={SearchUser} />
        </div>
      );
    }
  }
export default Index