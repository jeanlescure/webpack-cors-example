import React, { Component } from 'react';

// #####################################
// ############ IMPORTANT ##############
// Here the `API_URL` env var is being
// injected by the `server.js` file
const api_url = process.env.API_URL || '';
// ############ /IMPORTANT #############
// #####################################

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

    fetch(api_url + '/api/v1/hello')
      .then(function(response) {
        return response.text();
      }).then(function(text) {
        self.setState({
          hello: text
        });
      });

    fetch(api_url + '/api/v1/world')
      .then(function(response) {
        return response.text();
      }).then(function(text) {
        self.setState({
          world: text
        });
      });
  }

  render() {
    return <h1>{this.state.hello} {this.state.world}!</h1>;
  }
}

export default HelloWorld;