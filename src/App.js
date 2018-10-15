import React, { Component } from 'react';

import HelloWorld from './components/HelloComponent'
import Counter from './components/CounterComponent'
import Posts from "./components/Posts";

import './estilos.css'

class App extends Component {

  state = {
    incrementarPor: 1,
    decrementarPor: 1
  }

  _handleChangeIncrementarPor = event => {
    this.setState({
      incrementarPor: parseInt(event.target.value)
    })
  }

  _handleChangeDecrementarPor = event => {
    this.setState({
      decrementarPor: parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <HelloWorld name="World" texto="Meu primeiro exemplo com props." />
          
          <input type="text" 
            name="incrementarPor" 
            value={this.state.incrementarPor} 
            onChange={this._handleChangeIncrementarPor} />
            
          <input type="text" 
            name="decrementarPor" 
            value={this.state.decrementarPor} 
            onChange={this._handleChangeDecrementarPor} />

          <Counter incrementarPor={this.state.incrementarPor} decrementarPor={this.state.decrementarPor} />
        </div>

        <div className="right">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
