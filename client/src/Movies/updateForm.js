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
};

export default UpdateForm;
