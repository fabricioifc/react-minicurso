import React from "react";
import axios from "axios";

//Componentes
import Post from "./Post";
import PostForm from "./PostForm";

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

  removePost = id => {
    axios
      .delete(`${this.state.base_url}/posts/${id}`)
      .then(response => {
        const posts = this.state.posts.filter(post => post.id !== id);
        this.setState({posts: posts});
      })
      .catch(error => alert(error))
  }

  salvar = post => {
    axios
      .post(`${this.state.base_url}/posts`, {post: post})
      .then(response => {
        console.log(response.data);
        
        this.setState({
          posts: [...this.state.posts, response.data]
        })
      })
      .catch(error => alert(error))

  }

  render() {
    return (
      <div>
        <h1>Lista de Posts</h1>
        <PostForm onSalvar={this.salvar.bind(this)} />
        { this.state.posts.map(post => (
          <Post key={post.id} post={post} onRemovePost={this.removePost.bind(this)} />
        ))}
      </div>
    )
  }
}

export default Posts;