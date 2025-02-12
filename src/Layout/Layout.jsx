import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{ minHeight: "80vh", paddingTop: "4.35rem"}}
      >
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
