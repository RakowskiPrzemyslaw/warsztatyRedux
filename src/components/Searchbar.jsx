import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDrinks } from "../actions";


class Searchbar extends Component {
  state = {
    text: '',
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  checkIfSend = (e) => {
    if (e.key === 'Enter') {
      this.props.getDrinks(this.state.text);
    }
  }

  render() {
    return (
      <input
        type="text"
        className="form-control searchBar"
        placeholder="Enter name of ingredient"
        value={this.state.text}
        onChange={this.updateText}
        onKeyPress={this.checkIfSend}
      />
    );
  }
}



export default connect(null, { getDrinks })(Searchbar);
