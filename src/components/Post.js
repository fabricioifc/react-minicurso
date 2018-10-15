import React from 'react';

const Post = ({post, onRemovePost}) => {
  
  return (
    <div className="post">
      <h3>{post.id} - {post.title}</h3>
      <small className="postMessage">{post.message}</small>
      <br />
      <button onClick={() => window.confirm("Tem certeza?") ? onRemovePost(post.id) : null }>
        Excluir
      </button>
    </div>
  )
}

export default Post;