import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosApi('/posts.json');
        setPosts(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts().catch(e => console.error(e));
  }, []);

  return posts && (
    <div className="col-7 p-4">
      {Object.keys(posts).map(key => (
        <div className="alert alert-success" key={key}>
          <p>Created on: {posts[key].newPost.date}</p>
          <p>{posts[key].newPost.title}</p>
          <button type="button" className="btn btn-dark">Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;