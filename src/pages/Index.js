import React, { Component } from 'react';

import Header from '../components/navigation/Header';
import SearchUserInput from '../components/search/SearchUserInput';


class Index extends Component {
    render() {
      return (
        <div>
            <Header />
            <SearchUserInput />
        </div>
      );
    }
  }
export default Index