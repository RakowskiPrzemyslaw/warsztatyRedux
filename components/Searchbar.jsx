import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input
        type="text"
        className="form-control searchBar"
        placeholder="Enter name of ingredient"
        value={this.state.text}
        onChange={this.updateText}
      />
    );
  }
}

export default Searchbar;
