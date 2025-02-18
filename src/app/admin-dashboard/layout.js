import React from "react";
import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex items-start justify-start">
      <div className="w-1/4 lg:w-1/5 xl:w-1/6 bg-[#224167] h-screen pb-20 overflow-y-auto">
        <Sidebar />
      </div>
      <div className="w-3/4 lg:w-4/5 xl:w-5/6 h-screen overflow-y-auto">
        <div className="w-full h-20 p-6 bg-[#F1F3FC] flex items-center sticky top-0">
          <span className="text-[#404753]">Admin Dashboard</span>
        </div>
        <div className="w-full p-10">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
