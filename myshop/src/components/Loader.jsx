import React from 'react';
const Loader = () => <div className="text-center py-4">Loading...</div>;
export default Loader;

// context/AuthContext.jsx
import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};