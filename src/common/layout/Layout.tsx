import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface propsType {
  children: string;
}

const Layout: React.FC<propsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
