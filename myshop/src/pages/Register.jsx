// pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" className="w-full p-2 border rounded" required />
        </div>
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
