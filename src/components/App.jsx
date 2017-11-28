import React, { Component } from 'react';
import Searchbar from './Searchbar';
import DrinksList from './DrinksList';
import DrinkDetails from './DrinkDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <div className="wrapper">
          <DrinkDetails />
          <DrinksList />
        </div>
      </div>
    );
  }
}

export default App;
