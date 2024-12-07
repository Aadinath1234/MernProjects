// import React, { useEffect } from 'react'
// import Header from './Header.jsx';
// import { useNavigate } from 'react-router-dom';
// import MainContainer from './MainContainer.jsx';
// import MovieContainer from './MovieContainer.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { Now_Playing_Movie, options } from '../utils/constant.jsx';
// import { getNowPlayingMovies } from '../redux/movieSlice.jsx';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx';
// import usePopularMovies from '../hooks/usePopularMovies.jsx'; 
// import useTopRatedMovies from '../hooks/useTopRatedMovies.jsx';
// import useUpcomingMovies from '../hooks/useUpcomingMovies.jsx';
// import SearchMovie from './SearchMovie.jsx';




// const  Browse = () =>  {
//     const user = useSelector(store => store.app.user);
//     const toggle = useSelector(store => store.movie.toggle);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

    

//     //  custom hooks : 
//     useNowPlayingMovies();
//     usePopularMovies();
//     useTopRatedMovies();
//     useUpcomingMovies();








//     useEffect(() => {
//         if(!user) {
//           navigate('/'); 
//         }
        
//     }, []);


//   return (
//     <div>
          
//             <Header />
//                <div>

//                {
//                   toggle ? <SearchMovie /> : (
//                     <>
//                     <MainContainer />
//                     <MovieContainer />
                    
                    
//                     </>
//                   )


//                }

                  
//                </div>
          
//     </div>
//   )
// }

// export default Browse






// change 1 

// import React, { useEffect } from 'react';
// import Header from './Header.jsx';
// import { useNavigate } from 'react-router-dom';
// import MainContainer from './MainContainer.jsx';
// import MovieContainer from './MovieContainer.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx';
// import usePopularMovies from '../hooks/usePopularMovies.jsx';
// import useTopRatedMovies from '../hooks/useTopRatedMovies.jsx';
// import useUpcomingMovies from '../hooks/useUpcomingMovies.jsx';
// import SearchMovie from './SearchMovie.jsx';

// const Browse = () => {
//   const user = useSelector((store) => store.app.user);
//   const toggle = useSelector((store) => store.movie.toggle);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Custom hooks for fetching data
//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRatedMovies();
//   useUpcomingMovies();

//   // Redirect user if not logged in
//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="flex-1 px-4 sm:px-8 lg:px-16">
//         {toggle ? (
//           <SearchMovie />
//         ) : (
//           <>
//             {/* Main Video Section */}
//             <MainContainer />

//             {/* Movies Section */}
//             <MovieContainer />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Browse;





//overlap adjustments 
import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import MovieContainer from './MovieContainer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx';
import usePopularMovies from '../hooks/usePopularMovies.jsx';
import useTopRatedMovies from '../hooks/useTopRatedMovies.jsx';
import useUpcomingMovies from '../hooks/useUpcomingMovies.jsx';
import SearchMovie from './SearchMovie.jsx';

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Custom hooks for fetching data
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // Redirect user if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-8 lg:px-16 space-y-10">
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            {/* Main Video Section */}
            <div className="relative z-10">
              <MainContainer />
            </div>

            {/* Movies Section */}
            <div className="relative z-0 -mt-10 sm:-mt-20">
              <MovieContainer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
