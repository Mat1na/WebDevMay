import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {children}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
