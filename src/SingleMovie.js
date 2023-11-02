import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">Released: {movie.Released}</p>
          <p className="card-text">Genre: {movie.Genre}</p>
          <p className="card-text">IMDb Rating: {movie.imdbRating} / 10</p>
          <p className="card-text">Country: {movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
