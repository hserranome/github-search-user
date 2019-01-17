import React, { Component } from 'react';

// import {Route} from 'react-router-dom'
// import SearchUser from '../components/search/SearchUser';

import Header from '../components/navigation/Header';
import SearchUserInput from '../components/search/SearchUserInput';


class Index extends Component {
    render() {
      return (
        <div>
            <Header />
            <SearchUserInput />
            {/* <Route path="/user/:user" component={SearchUser} /> */}
        </div>
      );
    }
  }
export default Index