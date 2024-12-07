import React from 'react';
import MovieList from './MovieList.jsx';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black space-y-8 px-4 sm:px-8">
      <MovieList title="Popular Movies" movies={movie.popularMovie} />
      <MovieList title="Now Playing Movies" movies={movie.nowPlayingMovies} />
      <MovieList title="Upcoming Movies" movies={movie.upcomingMovies} />
      <MovieList title="Top Rated Movies" movies={movie.topRatedMovies} />
    </div>
  );
};

export default MovieContainer;
