import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("auth-token"));
  useEffect(() => {
    const storedToken = localStorage.getItem("auth-token");
    if (storedToken) setToken(storedToken);
  }, []);
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("auth-token", serverToken);
  };
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("auth-token");
  };
  return (
    <AuthContext.Provider value={{ token, storeTokenInLS, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth is used outside of the Provider.");
  }
  return authContextValue;
};
