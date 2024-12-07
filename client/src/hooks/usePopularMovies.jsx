import React from 'react'
import {Popular_Movie, options} from '../utils/constant.jsx';
import {getPopularMovie} from '../redux/movieSlice.jsx';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const  usePopularMovies = async()=>{
 const dispatch = useDispatch();
 try{
     const res = await axios.get(Popular_Movie, options);
     dispatch(getPopularMovie(res.data.results))
 } catch (error){
      console.log(error);
 }
}

export default usePopularMovies; 