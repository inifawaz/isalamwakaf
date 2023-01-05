import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { BiGridAlt, BiLogOut, BiUserCircle } from "react-icons/bi";
import { useAuth } from "../hooks/auth";

const publicMenu = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Program Wakaf",
    href: "/campaigns",
  },
  {
    name: "Artikel",
    href: "/articles",
  },
  {
    name: "Tentang Kami",
    href: "/about-us",
  },
];

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <section className="shadow p-3 sticky top-0 z-10 bg-white">
      <header className="  flex justify-between items-center w-full max-w-5xl  mx-auto">
        <div className=" h-12 w-40  relative">
          <Image
            src={"/logo/isalam-light.png"}
            fill
            sizes=""
            className="object-contain"
          />
        </div>
        <nav className="space-x-6 hidden relative lg:flex items-center">
          {publicMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-400 text-sm"
            >
              {item.name}
            </Link>
          ))}
          {isLoggedIn ? (
            <Menu as={Fragment}>
              <Menu.Button>
                <BiUserCircle className="h-8 w-8 text-gray-400" />
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute p-1 z-10 rounded w-60 shadow border right-0 top-10 bg-white flex flex-col"
                }
              >
                <Menu.Item>
                  <Link
                    className="text-sm  p-2 flex items-center space-x-2 group hover:bg-stone-100 duration-100 transition rounded"
                    href={"/user/dashboard"}
                  >
                    <BiGridAlt className="h-5 w-5 text-amber-500 " />
                    <span className=" text-gray-400">Dashboard</span>
                  </Link>
                </Menu.Item>
                {user.role.includes("admin") && (
                  <Menu.Item>
                    <Link
                      className="text-sm  p-2 flex items-center space-x-2 group hover:bg-stone-100 duration-100 transition rounded"
                      href={"/admin/dashboard"}
                    >
                      <BiGridAlt className="h-5 w-5 text-amber-500 " />
                      <span className=" text-gray-400">Admin Dashboard</span>
                    </Link>
                  </Menu.Item>
                )}
                <Menu.Item>
                  <button
                    onClick={() => logout()}
                    className="p-2 flex items-center space-x-2 hover:bg-stone-100 rounded transition duration-100"
                  >
                    <BiLogOut className="text-amber-500 h-5 w-5" />
                    <span className="text-gray-400 text-sm">Keluar</span>
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <div className="space-x-2">
              <Link
                href={"/login"}
                className="bg-amber-100 text-amber-500 py-2 px-4 rounded text-sm"
              >
                Masuk
              </Link>
              <Link
                href={"/register"}
                className="bg-amber-500 text-white py-2 px-4 rounded text-sm"
              >
                Daftar
              </Link>
            </div>
          )}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
