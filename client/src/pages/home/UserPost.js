import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export function UserPost() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/news")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setArr(res.data);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []); // Added an empty dependency array to make the effect run only once

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {arr.map((value) => (
        <div className="card m-2 w-25" key={value._id}>
          <div className="card-body">
            <h4 className="card-title">{value.title}</h4>
            <p className="card-text">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
