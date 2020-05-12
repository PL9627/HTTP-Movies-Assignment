import React, { useState, useEffect } from "react";
import axios from "axios";

const initMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const UpdateForm = (props) => {
  const [movie, setMovie] = useState(initMovie);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log("UpdateForm useEffect err", err));
  });

  const handleChanges = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log(res);

        props.updateItems(res.data);
        props.history.push(`movies/${id}`);
      })
      .catch((err) => console.log("axios put err", err));
  };
};

export default UpdateForm;
