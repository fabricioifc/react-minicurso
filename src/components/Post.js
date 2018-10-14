import React from 'react';

const Post = ({post}) => {
  
  return (
    <div className="post">
      <h3>{post.id} - {post.title}</h3>
      <small className="postMessage">{post.message}</small>
    </div>
  )
}

export default Post;