import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice.jsx';
import movieReducer from './movieSlice.jsx';
import searchSlice from './searchSlice.jsx';


const store = configureStore({

  reducer: {
      app: userReducer,
       movie: movieReducer,
       searchMovie:searchSlice
    }
});

export default store;

