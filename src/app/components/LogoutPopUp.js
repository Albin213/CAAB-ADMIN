"use client"; // Ensure it's a client component

import React from "react";
import { useRouter } from "next/navigation";

function LogoutPopUp({ setIsLogoutPopupOpen }) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[400px] bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="w-full h-[72px] p-6 flex justify-center items-center relative bg-[#BA1A1A] rounded-t-lg">
          <span className="font-semibold text-xl text-white">Logout</span>
          <span
            className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
            onClick={() => setIsLogoutPopupOpen(false)}
          >
            +
          </span>
        </div>

        {/* Body */}
        <div className="p-8 text-center">
          <p className="text-[#181C22] text-lg mb-6">
            Are you sure you want to logout?
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              className="w-32 px-4 py-2 font-medium text-[#BA1A1A] border border-[#BA1A1A] rounded-lg hover:bg-[#ba1a1a18] transition-all"
              onClick={handleLogout}
            >
              Logout
            </button>

            <button
              className="w-32 px-4 py-2 font-medium text-white bg-[#BA1A1A] rounded-lg hover:bg-[#ba1a1ac7] transition-all"
              onClick={() => setIsLogoutPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutPopUp;
