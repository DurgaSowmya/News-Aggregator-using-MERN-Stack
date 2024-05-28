import React, { useState } from "react";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addInfo } from "../../service/api";
import Axios from "axios";

export const Create = () => {
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({
    file: "",
    title: "",
    textarea: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addInfoDetails();
  };

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length < 7) {
      // Handle image submission logic if needed
    }
  };

  const onValueChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const addInfoDetails = async () => {
    const data = {
      title: info.title,
      description: info.textarea,
    };

    try {
      const response = await Axios.post("http://localhost:4000/news", data);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error("Failed to create post");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'>
            <img src='' alt='image' className='image-preview' />
          </div>
          <form onSubmit={handleSubmit} action='/create'>
            <div className='inputfile flexCenter'>
              <input
                type='file'
                accept='image/*'
                alt='img'
                onChange={(e) => setFiles(e.target.files)}
                name='file'
              />
              <button onClick={handleImageSubmit} type='button'>
                Upload
              </button>
            </div>
            <input
              type='text'
              placeholder='Title'
              onChange={(e) => onValueChange(e)}
              name='title'
            />

            <textarea
              id=''
              cols='30'
              rows='10'
              onChange={(e) => onValueChange(e)}
              name='textarea'
            ></textarea>

            <button className='button' onClick={addInfoDetails}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
