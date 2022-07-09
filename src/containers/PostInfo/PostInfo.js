import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink} from "react-router-dom";

const PostInfo = ({match, history}) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi(`/posts/${match.params.id}.json`);
        setPost(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost().catch(e => console.error(e));
  }, [match.params.id]);

  const onRemove = async () => {
    try {
      await axiosApi.delete(`/posts/${match.params.id}.json`);
    } finally {
      history.push('/');
    }
  };

  return post && (
    <div className="alert alert-success m-5 col-6">
      <p>Created on: {post.newPost.date}</p>
      <h4>{post.newPost.title}</h4>
      <p>{post.newPost.description}</p>
      <button
        type="button"
        className="btn btn-danger mr-3"
        onClick={onRemove}
      >
        Remove
      </button>
      <button type="button" className="btn btn-dark">
        <NavLink to={`/posts/${match.params.id}/edit`}>Edit</NavLink>
      </button>
    </div>
  );
};

export default PostInfo;