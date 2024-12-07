 import React from 'react';
import VideoTitle from './VideoTitle.jsx';
import VideoBackground from './VideoBackground.jsx';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) return null; // Early return

  const { overview, id, title } = movie[4];

  return (
    <div className="relative">
      <VideoBackground movieId={id} />

      {/* Video Title */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-8 bg-gradient-to-t from-black via-transparent">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
