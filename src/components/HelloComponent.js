import React, {  } from "react";

class HelloWorld extends React.Component {

  render() {

    const {name, texto} = this.props;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{texto}</p>
      </div>
    )
  }
}

export default HelloWorld;