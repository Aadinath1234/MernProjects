// import React from 'react'
// import MovieList from './MovieList.jsx';
// import {useSelector} from 'react-redux';





// const  MovieContainer = () =>  {
//     const movie = useSelector(store => store.movie);

    
//   return (
//     <div className='bg-black'>
//       <div className='-mt-52 relative z-10'>

//       <MovieList title={"Popular Movies"} movies={movie.popularMovie} />

//       <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies} />
      
//       <MovieList title={"Upcoming  Movies"} movies={movie.upcomingMovies} />

//       <MovieList  title={"Top Rated Movies"} movies={movie.topRatedMovies}   />
      

//       </div>
//     </div>
//   )
// }

// export default MovieContainer









// import React from 'react';
// import MovieList from './MovieList.jsx';
// import { useSelector } from 'react-redux';

// const MovieContainer = () => {
//   const movie = useSelector((store) => store.movie);

//   return (
//     <div className="bg-black text-white">
//       <div className="relative -mt-52 z-10 space-y-16 px-4 sm:px-8 lg:px-16">
//         {/* Popular Movies */}
//         <MovieList title="Popular Movies" movies={movie.popularMovie} />

//         {/* Now Playing Movies */}
//         <MovieList title="Now Playing Movies" movies={movie.nowPlayingMovies} />

//         {/* Upcoming Movies */}
//         <MovieList title="Upcoming Movies" movies={movie.upcomingMovies} />

//         {/* Top Rated Movies */}
//         <MovieList title="Top Rated Movies" movies={movie.topRatedMovies} />
//       </div>
//     </div>
//   );
// };

// export default MovieContainer;





// overflow adjustments : 
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
