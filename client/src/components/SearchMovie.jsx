// import React, { useState } from 'react';
// import axios from 'axios';
// import { SEARCH_MOVIE_URL, options } from '../utils/constant.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchMovieDetails } from '../redux/searchSlice.jsx';
// import { setLoading } from '../redux/userSlice.jsx';
// import MovieList from './MovieList.jsx';

// const SearchMovie = () => {
//   const [searchMovie, setSearchMovie] = useState("");
//   const dispatch = useDispatch();
//   const isLoading = useSelector(store => store.app.isLoading);
//   const { movieName, searchedMovie } = useSelector(store => store.searchMovie);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));
//     try {
//       const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
      
//       const movies = res?.data?.results;
//       dispatch(setSearchMovieDetails({ searchMovie, movies }));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//     setSearchMovie("");
//   }

//   return (
//     <>
//       <div className='flex justify-center pt-[10%] w-[100%]'>
//         <form onSubmit={submitHandler} className='w-[50%]'>
//           <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
//             <input
//               value={searchMovie}
//               onChange={(e) => { setSearchMovie(e.target.value) }}
//               type="text"
//               className='w-full outline-none rounded-md text-lg'
//               placeholder="Search Movies..."
//             />
//             <button className='bg-red-800 text-white rounded-md px-4 py-2'>
//               {isLoading ? "Loading..." : "Search"}
//             </button>
//           </div>
//         </form>
//       </div>
//       {
//         searchedMovie  ?
//           <MovieList title={movieName} searchMovie={true} movies={searchedMovie} /> :
//           <h1>Movie not found!</h1>
//       }
//     </>
//   )
// }

// export default SearchMovie;







// sahi hai bhai ye wala 

import React, { useState } from 'react';
import axios from 'axios';
import { SEARCH_MOVIE_URL, options } from '../utils/constant.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice.jsx';
import { setLoading } from '../redux/userSlice.jsx';
import MovieList from './MovieList.jsx';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  }

  return (
    <>
      <div className='flex justify-center pt-[10%] w-full'>
        <form onSubmit={submitHandler} className='w-full sm:w-2/3 mt-10 md:w-1/2 lg:w-1/3'>
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-full">
            <input
              value={searchMovie}
              onChange={(e) => { setSearchMovie(e.target.value) }}
              type="text"
              className='w-full outline-none rounded-md text-lg py-2 px-4 text-black'
              placeholder="Search Movies..."
            />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {
        searchedMovie ?
          <MovieList title={movieName} searchMovie={true} movies={searchedMovie} /> :
          <h1 className="text-center mt-8 ">Movie not found!</h1>
      }
    </>
  )
}

export default SearchMovie;


