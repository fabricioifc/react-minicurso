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
      post: {title: '', message: ''},
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
        this.setState({posts, post: {}});
      })
      .catch(error => alert(error))
  }

  salvar = post => {
    if (post.id == null) {
      axios
      .post(`${this.state.base_url}/posts`, {post: post})
      .then(response => {
        console.log(response.data);
        
        this.setState({
          posts: [...this.state.posts, response.data]
        })
      })
      .catch(error => alert(error)) 
    } else {
      this._atualizar(post)
    }

  }

  _atualizar = post => {
    this.setState({ post: { ...this.state.post } });
    axios
      .put(`${this.state.base_url}/posts/${post.id}`, { post: post })
      .then(response => {
        const posts = this.state.posts.map(
          p => (p.id === response.data.id ? (p = response.data) : p)
        );
        this.setState({ posts, post: {} });
      })
      .catch(error => alert(error));
  }

  editar = id => {
    this.setState({ post: { ...this.state.post } });
    axios
      .get(`${this.state.base_url}/posts/${id}`)
        .then(response => {
          this.setState({post: { ...response.data }});
        })
      .catch(error => alert(error));
  }

  render() {
    return (
      <div>
        <h1>Lista de Posts</h1>
        <PostForm 
          post={this.state.post} 
          onSalvar={this.salvar.bind(this)} />
        { this.state.posts.map(post => (
          <Post 
            key={post.id} post={post} 
            onRemovePost={this.removePost.bind(this)}
            onEditPost={this.editar.bind(this)} />
        ))}
      </div>
    )
  }
}

export default Posts;