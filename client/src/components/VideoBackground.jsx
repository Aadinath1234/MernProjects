// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';

// const VideoBackground = ({ movieId }) => {
//     const trailerMovie = useSelector(store => store.movie.trailerMovie);
//     useMovieById(movieId);


//     return (
//         <div className="w-screen ">
//             <iframe
//                 className="w-screen aspect-video"
//                 src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
//                 title='Youtube video player '
//                 frameBorder="0"
//                 allowFullScreen >

//             </iframe>







//         </div>




//     )
// }

// export default VideoBackground;







// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';

// const VideoBackground = ({ movieId,bool }) => {
//     const trailerMovie = useSelector(store => store.movie.trailerMovie);
//     useMovieById(movieId);

//     // Check if trailerMovie is not null before attempting to access its properties
//     if (!trailerMovie) {
//         return null; // or you can return a loading spinner or placeholder here
//     }

//     return (
//         <div className="w-[vw] ">
//             <iframe
//                 className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
//                 src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
//                 title='Youtube video player '
//                 frameBorder="0"
//                 allowFullScreen
//             >
//             </iframe>
//         </div>
//     );
// }

// export default VideoBackground;








// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';

// const VideoBackground = ({ movieId, bool }) => {
//   const trailerMovie = useSelector((store) => store.movie.trailerMovie);
//   useMovieById(movieId);

//   // Return early if no trailer movie is available
//   if (!trailerMovie) {
//     return null; // Can be replaced with a loader/spinner if desired
//   }

//   return (
//     <div className="relative w-full">
//       <iframe
//         className={`${
//           bool
//             ? "w-full h-[300px] sm:h-[500px] md:h-[600px]"
//             : "w-full aspect-video"
//         }`}
//         src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
//         title="Youtube Video Player"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;





// overflow adjustments : 
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



