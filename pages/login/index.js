import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/auth";

const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login({
        setIsLoading,
        values,
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto p-8 rounded shadow border border-gray-100 max-w-sm "
      >
        <h1 className="text-2xl text-amber-500 mb-8 font-semibold text-center">
          Selamat Datang Kembali
        </h1>
        <Input
          label={"Email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          label={"Password"}
          name={"password"}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          className="py-2.5 px-4 bg-amber-500 text-white w-full rounded my-4 flex items-center justify-center"
        >
          {isLoading ? (
            <svg
              className="animate-spin  h-6 w-6 text-center text-white "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx={12}
                cy={12}
                r={10}
                stroke="currentColor"
                strokeWidth={4}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <span className="">Masuk</span>
          )}
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Belum punya akun?{" "}
          <Link className="text-amber-500 font-semibold" href={"/register"}>
            Daftar Sekarang
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
