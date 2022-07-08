import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';

const Form = ({history}) => {
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    date: dayjs().format('DD.MM.YYYY HH:mm:ss'),
  });

  const onEditorStateChange = (editor) => {
    setNewPost(prev => ({
      ...prev,
      description: convertToHTML(editor.getCurrentContent())
    }))
  };

  const onTitleChange = (e) => {
    const {name, value} = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNewPost = async e => {
    e.preventDefault();

    try {
      await axiosApi.post('/posts.json', {newPost});
    } finally {
      history.push('/');
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <form className="col-5 border p-3" onSubmit={addNewPost}>
        <h2>Add new post</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newPost.title}
            onChange={onTitleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <Editor
            defaultEditorState={newPost.description}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default Form;