import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen min-w-screen flex justify-center items-start m-0 p-0">
        <Outlet />
    </div>
  );
};

export default Layout;
