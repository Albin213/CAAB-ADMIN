"use client";

import React from "react";

function DeleteEmployeePopup({
  selectedEmployeeId,
  setIsDeleteEmployeePopupOpen,
}) {
  return (
    <div className="w-screen min-h-screen bg-black/20 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-96 h-96 bg-white rounded-sm relative">
        <span
          className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-black absolute top-1 right-1 cursor-pointer"
          onClick={() => setIsDeleteEmployeePopupOpen(false)}
        >
          +
        </span>
        Delete Employee {selectedEmployeeId}
      </div>
    </div>
  );
}

export default DeleteEmployeePopup;
