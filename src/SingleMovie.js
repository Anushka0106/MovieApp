import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { API_URL } from './Context';
import { NavLink } from 'react-router-dom';

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState({});

  const getMovie = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setIsLoading(false);
        setMovie(data);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getMovie(`${API_URL}&i=${id}`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [id]);

  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='movie-section'>
        <div className='error'>An error occurred while fetching the movie details.</div>
      </div>
    );
  }

  return (
    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt='' />
        </figure>
        <div className='card-content'>
        <p className='title'>{movie.Title} </p>
        
        <p className='year'>{movie.Released} </p>
        <p className='card-text'>{movie.Genre}</p>
        <p className='card-text'>{movie.imdbRating}/10</p>
        <p className='card-text'>{movie.Country}</p>
        <NavLink to="/"  className=".back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
