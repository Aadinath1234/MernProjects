import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  useMovieById(movieId);

  if (!trailerMovie) {
    return null;
  }

  return (
    <div className="relative w-full h-screen
     max-h-[400px] sm:max-h-[600px] overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="Youtube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;



