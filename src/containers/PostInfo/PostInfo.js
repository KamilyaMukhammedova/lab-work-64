import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink} from "react-router-dom";

const PostInfo = ({match, history}) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      try {
        const response = await axiosApi(`/posts/${match.params.id}.json`);
        setPost(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchPost().catch(e => console.error(e));
  }, [match.params.id]);

  const onRemove = async () => {
    setRemoveLoading(true);
    try {
      await axiosApi.delete(`/posts/${match.params.id}.json`);
    } catch (e) {
      setRemoveLoading(false);
      console.error(e);
    } finally {
      setRemoveLoading(false);
      history.push('/');
    }
  };

  return post && (
    <>
      {!loading ?
        <div className="alert alert-success m-5 col-6">
          <p>Created on: {post.newPost.date}</p>
          <h4>{post.newPost.title}</h4>
          <p>{post.newPost.description}</p>
          <button
            type="button"
            className="btn btn-danger mr-3"
            onClick={onRemove}
            disabled={removeLoading}
          >
            {removeLoading ?
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                <span className="sr-only">Loading...</span>
              </> :
              <span>Remove</span>
            }
          </button>
          <button type="button" className="btn btn-dark">
            <NavLink to={`/posts/${match.params.id}/edit`} className="navLink">Edit</NavLink>
          </button>
        </div>
        :
        <div className="d-flex justify-content-center m-5">
          <div className="spinner-border" role="status" style={{width: '4rem', height: '4rem'}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    </>
  );
};

export default PostInfo;