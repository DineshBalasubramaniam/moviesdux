import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MoviesCard";

export default function MoviesGrid() {
  const [movies, Setmovies] = useState([]);

  useEffect(() => {
    fetch("movies.json ")
      .then((response) => response.json())
      .then((data) => Setmovies(data));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} id={movie.id}></MovieCard>
      ))}
    </div>
  );
}
