// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state

  // Check if user is already logged in from local storage or session
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user:", storedUser); // Log stored user data
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setUser(null); // Reset user state if parsing fails
      }
    } else {
      setUser(null); // Set user to null if no stored user data
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    const username = userData.email.split('@')[0];
    const userWithUsername = { ...userData, username };
    setUser(userWithUsername);
    localStorage.setItem("user", JSON.stringify(userWithUsername));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user; // Check if user is authenticated

  // Auth context value
  const authContextValue = {
    user,
    isAuthenticated,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
