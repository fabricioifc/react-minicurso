import React from "react";

export default class Counter extends React.Component {
  
  // Inicializar o estado do componente
  state = {
    contador: 0
  }

  incrementar = (valor) => {
    // console.log(valor);
    
    this.setState({
      contador: this.state.contador + valor
    })
  }

  decrementar = (valor) => {
    this.setState({
      contador: this.state.contador - valor
    })
  }

  render() {

    const {incrementarPor, decrementarPor} = this.props

    return (
      <div>
        <h2>{this.state.contador}</h2>
        <div>
          <button onClick={() => this.incrementar(incrementarPor)}>Incrementar</button>
          <button onClick={() => this.decrementar(decrementarPor)}>Decrementar</button>
        </div>
      </div>

    )
  }
}