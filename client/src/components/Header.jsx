import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant.jsx";
import axios from "axios";
import { setUser } from "../redux/userSlice.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice.jsx";
import Logo from "../assets/logo1.png";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-black to-transparent z-50 px-4 md:px-8">
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <img
          className="w-28 md:w-40"
          src={Logo}
          alt="Netflix Logo"
        />

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {user && (
            <>
              <IoIosArrowDropdown size="24px" color="white" />
              <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
              <button
                onClick={logoutHandler}
                className="bg-red-800 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
              <button
                onClick={toggleHandler}
                className="bg-red-800 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700"
              >
                {toggle ? "Main" : "Search Movie"}
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <FiMenu
            size="24px"
            color="white"
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-black shadow-lg flex flex-col items-start space-y-4 py-6 px-4">
          {user && (
            <>
              <IoIosArrowDropdown size="24px" color="white" />
              <h1 className="text-lg font-medium text-white mb-4">{user.fullName}</h1>
              <button
                onClick={logoutHandler}
                className="w-full bg-red-800 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 mb-2"
              >
                Logout
              </button>
              <button
                onClick={toggleHandler}
                className="w-full bg-red-800 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700"
              >
                {toggle ? "Home" : "Search Movie"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
