import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";

const Form = ({history, match}) => {
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    date: dayjs().format('DD.MM.YYYY HH:mm:ss'),
  });

  const [isEdited, setIsEdited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      setIsEdited(true);

      const fetchEditedPost = async () => {
        try {
          const response = await axiosApi(`/posts/${match.params.id}.json`);

          await setNewPost(response.data.newPost);
        } catch (e) {
          console.error(e);
        }
      };

      fetchEditedPost().catch(e => console.error(e));
    } else {
      setIsEdited(false);
      setNewPost({
        title: '',
        description: '',
        date: dayjs().format('DD.MM.YYYY HH:mm:ss'),
      });
    }

  }, [match.params.id]);


  const onChange = (e) => {
    const {name, value} = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewPost = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!match.params.id) {
        await axiosApi.post('/posts.json', {newPost});
      } else {
        await axiosApi.patch(`/posts/${match.params.id}.json`, {newPost});
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    } finally {
      setLoading(false);
      history.push('/');
    }
  };

  return newPost && (
    <div className="row justify-content-center mt-5">
      <form className="col-5 border p-3" onSubmit={addNewPost}>
        {isEdited ? <h2>Edit post</h2> : <h2>Add new post</h2>}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newPost.title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            name="description"
            value={newPost.description}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={loading}
        >
          {loading ?
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
              <span className="sr-only">Loading...</span>
            </> :
            <span>Save</span>
          }
        </button>
      </form>
    </div>
  );
};

export default Form;