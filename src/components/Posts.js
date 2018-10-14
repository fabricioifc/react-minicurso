import React from "react";
import axios from "axios";

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      base_url: 'https://ifcblog-api.herokuapp.com',
      posts: [],
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Lista de Posts</h1>
      </div>
    )
  }
}

export default Posts;