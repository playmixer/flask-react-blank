import React, { Component } from 'react';
import { render } from "react-dom";

class App extends Component {

  render() {
    return (
      <h1>template from react</h1>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);