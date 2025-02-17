import React from "react";
import Footer from "../molecules/Footer";
import NavBar from "../molecules/NavBar";
import { headers } from "next/headers";

function AppLayout({ children, active }) {


  return (
    <>
      <NavBar active={active} />
      <div className="bg-gray-950">{children}</div>
      <Footer />
    </>
  );
}


export default AppLayout;
