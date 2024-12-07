 import React, { useState } from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_END_POINT } from '../utils/constant.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading } from '../redux/userSlice.jsx';
import BgVideo from './bgvideo.mov';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(
          `${API_END_POINT}/login`,
          user,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate('/browse');
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      const user = { fullName, email, password };
      try {
        const res = await axios.post(
          `${API_END_POINT}/register`,
          user,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative min-h-screen">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src={BgVideo}// Replace this with your valid video URL
          type="video/mp4"
        />
        {/* Add fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Header Fixed at the top */}
      <Header className="absolute top-0 left-0 w-full z-10" />

      <div className="flex items-center justify-center min-h-screen pt-20">
        <form
          onSubmit={getInputData}
          className="flex flex-col w-full sm:w-10/12 md:w-8/12 lg:w-4/12 p-8 mx-auto items-center justify-center bg-black bg-opacity-70 rounded-lg"
        >
          <h1 className="text-3xl text-white mb-5 font-bold">
            {isLogin ? 'Login' : 'Signup'}
          </h1>

          <div className="flex flex-col space-y-4">
            {!isLogin && (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="outline-none p-3 my-2 rounded-lg  bg-gray-800 text-white"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="outline-none p-3 my-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="outline-none p-3 my-2 rounded-lg bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="bg-red-600 mt-6 p-3 text-white rounded-lg font-medium"
            >
              {`${isLoading ? 'loading...' : isLogin ? 'Login' : 'Signup'}`}
            </button>
            <p className="text-white mt-2">
              {isLogin ? 'New to FunZone?' : 'Already have an account?'}
              <span
                onClick={loginHandler}
                className="ml-1 text-blue-900 font-medium cursor-pointer"
              >
                {isLogin ? 'Signup' : 'Login'}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
