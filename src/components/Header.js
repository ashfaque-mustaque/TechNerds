import React, { useContext } from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { Link } from "react-router-dom";
import { Appstate } from "../App";
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="flex mx-4">
        <Link
          className="text-2xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:text-yellow-400 transition duration-300 ease-in-out"
          to="/"
        >
          Cinema{" "}
          <span className="font-extrabold text-yellow-300">Critique</span>
        </Link>
      </div>
      {useAppstate.login ? (
        <Link to="addgadgets">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 transition duration-300 ease-in-out"
          >
            <ControlPointDuplicateIcon className="mr-2" />
            Add
          </button>
        </Link>
      ) : (
        <Link to="login">
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 transition duration-300 ease-in-out uppercase"
          >
            <LoginIcon className="mr-2" />
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
