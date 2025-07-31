// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
