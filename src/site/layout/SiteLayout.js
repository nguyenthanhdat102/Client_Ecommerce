import React from "react";
import { Outlet } from "react-router-dom";

const SiteLayout = () => {
   return (
      <>
         <div>SiteLayout</div>
         <h1>Header</h1>
         <Outlet />
         <h1>Footer</h1>
      </>
   );
};

export default SiteLayout;
