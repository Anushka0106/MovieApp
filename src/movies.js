import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie,isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className=" ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;
          const movieName =Title.substring(0,15);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length >= 15 ? `${movieName}...` : movieName }</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
