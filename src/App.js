import React, { Component } from 'react';

import HelloWorld from './components/HelloComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="World" texto="Meu primeiro exemplo com props." />
      </div>
    );
  }
}

export default App;
