import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink} from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await axiosApi('/posts.json');
        setPosts(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts().catch(e => console.error(e));
  }, []);

  return posts && (
    <>
      {!loading ?
        <div className="col-7 p-4">
        {Object.keys(posts).map(key => (
          <div className="alert alert-dark" key={key}>
            <p>Created on: {posts[key].newPost.date}</p>
            <p>{posts[key].newPost.title}</p>
            <button type="button" className="btn btn-dark">
              <NavLink to={'/posts/' + key}>Read more</NavLink>
            </button>
          </div>
        ))}
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

export default Posts;