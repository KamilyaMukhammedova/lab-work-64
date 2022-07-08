import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import parse from 'html-react-parser';

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
      <>
        {parse(post.newPost.description)}
      </>
      <button
        type="button"
        className="btn btn-danger mr-3"
        onClick={onRemove}
      >
        Remove
      </button>
      <button type="button" className="btn btn-dark">Edit</button>
    </div>
  );
};

export default PostInfo;