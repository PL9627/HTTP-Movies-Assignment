import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const initMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const UpdateForm = (props) => {
  const [movie, setMovie] = useState(initMovie);
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log(res);

        setMovie(res.data);
      })
      .catch((err) => console.log("UpdateForm useEffect err", err));
  }, [id]);

  const handleChanges = (e) => {
    e.persist();

    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log(res);

        props.setMovieList(res.data);
        push(`/movies/${id}`);
      })
      .catch((err) => console.log("axios put err", err));
  };

  return (
    <div>
      <h1>Update Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChanges}
          value={movie.title}
          placeholder="Type title here..."
        />
        <input
          type="text"
          name="director"
          onChange={handleChanges}
          value={movie.director}
          placeholder="Type director here..."
        />
        <input
          type="text"
          name="metascore"
          onChange={handleChanges}
          value={movie.metascore}
          placeholder="Type metascore here..."
        />
        <input
          type="text"
          name="stars"
          onChange={handleChanges}
          value={movie.stars}
          placeholder="Type stars here..."
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateForm;
