import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import useSWR from "swr";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import AppContext from "../context/AppContext";

export const useAuth = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AppContext);

  const login = async ({ setIsLoading, values }) => {
    setIsLoading(true);

    await axios
      .post("/login", values)
      .then((response) => {
        const { data, message, token } = response.data;
        setIsLoggedIn(true);
        toast.success(message);
        console.log(response);
        setCookie("token", token);
        setCookie("user", data);
        setUser(data);
        console.log(user);
        if (data.role.includes("admin")) {
          router.push("/admin/dashboard");
        } else {
          router.push("/user/dashboard");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    await axios
      .get("/logout", {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        toast.success(message);
        setUser({});
        setIsLoggedIn(false);
        deleteCookie("user");
        deleteCookie("token");
        router.push("/");
      });
  };

  return {
    login,
    logout,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  };
};
