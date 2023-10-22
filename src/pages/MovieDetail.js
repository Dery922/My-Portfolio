import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  //getting the route path location were we are using the useLocation hook
  const history = useLocation();
  //saving the location in the a variable
  const url = history.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <div>
      <h1>The Movie Detials</h1>
    </div>
  );
};

export default MovieDetail;
