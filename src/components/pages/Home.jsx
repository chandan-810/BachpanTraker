import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className=" shadow-md outline-black outline-2 dark:outline-white rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Welcome!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This page is currently under development.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Check out these routes:
        </p>
        <nav className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </Link>
          <Link
            to="/sidebar"
            className="bg-indigo-500 hover:bg-indigo-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sidebar
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default memo(Home);
