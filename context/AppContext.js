import { deleteCookie, getCookie } from "cookies-next";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../lib/axios";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const login = getCookie("user") && getCookie("token") ? true : false;
    setIsLoggedIn(login);
  }, []);
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
