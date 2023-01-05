import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <section className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className="grow w-full max-w-5xl mx-auto py-6 px-3 sm:px-0">
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
