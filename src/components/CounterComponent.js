import React from "react";

export default class Counter extends React.Component {
  
  // Inicializar o estado do componente
  state = {
    contador: 0
  }

  render() {
    return <h2>{this.state.contador}</h2>
  }
}