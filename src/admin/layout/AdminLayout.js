import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import SidebarNav from "./SidebarNav";
import Header from "./Header";

import "../assets/css/styles.min.css";
import "../assets/libs/simplebar/dist/simplebar";

const AdminLayout = () => {
   const [activeMenu, setActiveMenu] = useState(false);

   const handleActiveMenu = (state) => {
      setActiveMenu(state);
   };

   return (
      <>
         {/*  Body Wrapper */}
         <div
            className={`page-wrapper ${
               activeMenu ? "show-sidebar" : "mini-sidebar"
            }`}
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
         >
            {/* Sidebar Start */}
            <SidebarNav onChangeMenu={handleActiveMenu} />
            {/*  Sidebar End */}
            {/*  Main wrapper */}
            <div className="body-wrapper">
               {/*  Header Start */}
               <Header onChangeMenu={handleActiveMenu} />
               {/*  Header End */}
               <div className="container-fluid">
                  <Outlet />
               </div>
            </div>
         </div>
      </>
   );
};

export default AdminLayout;
