import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <Sidebar />
        <div className="main-container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
