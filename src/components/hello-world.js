import React, { Component } from 'react';

// ###########################
// ####### IMPORTANT #########
// Removed `api_url` variable

// This is an over-simplified component
// which loads two strings via common
// `fetch` (ajax) calls.
//
// It is not meant to illustrate how
// react components should be built,
// in a real-world scenario data would
// be handled by a `Store` and managed
// by `Actions`.
class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: '',
      world: ''
    };
  }

  componentDidMount(){
    const self = this;

    // ###########################
    // ####### IMPORTANT #########
    // Removed `api_url` variable
    fetch('/api/v1/hello')
      .then(function(response) {
        return response.text();
      }).then(function(text) {
        self.setState({
          hello: text
        });
      });

    fetch('/api/v1/world')
      .then(function(response) {
        return response.text();
      }).then(function(text) {
        self.setState({
          world: text
        });
      });
    // ####### /IMPORTANT ########
    // ###########################
  }

  render() {
    return <h1>{this.state.hello} {this.state.world}!</h1>;
  }
}

export default HelloWorld;