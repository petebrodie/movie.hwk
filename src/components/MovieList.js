import React from "react";
import Movie from "./Movies";

const MovieList = ({movies}) => {

  const movieNodes = movies.map(movie => {
    return (
      <Movie name={movie.name} key={movie.id}>{movie.url}</Movie>
    );
  });

  return(
    <>
      {movieNodes}
    </>
  )

}

export default MovieList;