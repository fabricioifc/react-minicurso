import React, {  } from "react";

class HelloWorld extends React.Component {

  render() {

    const {name, texto} = this.props;

    return (
      <div style={containerStyle}>
        <h1 style={{color: 'red'}}>Hello {name}!</h1>
        <p>{texto}</p>
      </div>
    )
  }
}

const containerStyle = {
  color: '#4CAF50',
  backgroundColor: '#dedede',
  padding: '20px',
  marginBottom: '10px',
}

export default HelloWorld;