import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="w-48 pr-4">
      <img src={CDN_URL + poster_path} alt={movies.title} />
    </div>
  );
};

export default MovieCard;
