import React from "react";
import axios from "axios";

//Componentes
import Post from "./Post";

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      base_url: 'https://ifcblog-api.herokuapp.com',
      posts: [],
    }
  }

  componentDidMount() {
    axios.get(`${this.state.base_url}/posts`)
      .then(response => {
        // console.log(response.data);
        this.setState({posts: response.data})
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <h1>Lista de Posts</h1>
        { this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  }
}

export default Posts;