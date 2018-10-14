import React, { Component } from 'react';

import HelloWorld from './components/HelloComponent'
import Counter from './components/CounterComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="World" texto="Meu primeiro exemplo com props." />
        <Counter />
      </div>
    );
  }
}

export default App;
