import React from "react";

export default class Counter extends React.Component {
  
  // Inicializar o estado do componente
  state = {
    contador: 0
  }

  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrementar = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.contador}</h2>
        <div>
          <button onClick={this.incrementar}>Incrementar</button>
          <button onClick={this.decrementar}>Decrementar</button>
        </div>
      </div>

    )
  }
}