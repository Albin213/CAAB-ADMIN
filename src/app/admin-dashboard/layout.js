// "use client";

// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import { LuLogOut } from "react-icons/lu";
// import LogoutPopUp from "../components/LogoutPopUp";

// function AdminLayout({ children }) {
//   const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

//   return (
//     <div className="flex items-start justify-start">
//       {/* Sidebar */}
//       <div className="w-1/4 lg:w-1/5 xl:w-1/6 bg-[#224167] h-screen pb-20 overflow-y-auto">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 lg:w-4/5 xl:w-5/6 h-screen overflow-y-auto">
//         {/* Header */}
//         <div className="w-full h-20 p-6 bg-[#F1F3FC] flex justify-between items-center z-50 sticky top-0">
//           <span className="text-[#404753]">Admin Dashboard</span>

//           {/* Logout Button */}
//           <span
//             className="text-[#404753] mr-6 flex justify-center items-center gap-4 hover:text-red-400 cursor-pointer"
//             onClick={() => setIsLogoutPopupOpen(true)}
//           >
//             Logout <LuLogOut />
//           </span>
//         </div>

//         {/* Page Content */}
//         <div className="w-full p-10">{children}</div>
//       </div>

//       {/* Logout Popup */}
//       {isLogoutPopupOpen && <LogoutPopUp setIsLogoutPopupOpen={setIsLogoutPopupOpen} />}
//     </div>
//   );
// }

// export default AdminLayout;




"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { LuLogOut } from "react-icons/lu";
import LogoutPopUp from "../components/LogoutPopUp";

function AdminLayout({ children }) {
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if no token
    }
  }, [router]); // Run only once on mount

  return (
    <div className="flex items-start justify-start">
      {/* Sidebar */}
      <div className="w-1/4 lg:w-1/5 xl:w-1/6 bg-[#224167] h-screen pb-20 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 lg:w-4/5 xl:w-5/6 h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-full h-20 p-6 bg-[#F1F3FC] flex justify-between items-center z-50 sticky top-0">
          <span className="text-[#404753]">Admin Dashboard</span>

          {/* Logout Button */}
          <span
            className="text-[#404753] mr-6 flex justify-center items-center gap-4 hover:text-red-400 cursor-pointer"
            onClick={() => setIsLogoutPopupOpen(true)}
          >
            Logout <LuLogOut />
          </span>
        </div>

        {/* Page Content */}
        <div className="w-full p-10">{children}</div>
      </div>

      {/* Logout Popup */}
      {isLogoutPopupOpen && <LogoutPopUp setIsLogoutPopupOpen={setIsLogoutPopupOpen} />}
    </div>
  );
}

export default AdminLayout;
