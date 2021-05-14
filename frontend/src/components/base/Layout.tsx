import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }:{children:React.ReactNode})=>{
  return(
    <div className='layout-container'>
      <Navbar/>
      <div className='layout-content-container'>
        {children}
      </div>
    </div>
  );
};
export default Layout;
