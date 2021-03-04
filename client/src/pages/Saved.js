import React, { Component } from "react";
import Results from "../components/Results";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h2>Books that are Saved</h2>
        <Results books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
