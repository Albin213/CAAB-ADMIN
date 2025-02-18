"use client";
import React from "react";
import axios from "axios";

function DeleteDepartmentPopup({
  selectedDepartmentId,
  setIsDeleteDepartmentPopupOpen,
  setDepartmentTableRenderToggle,
}) {
  console.log(selectedDepartmentId);

  async function handleDeleteDepartment() {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/deleteDepartment/${selectedDepartmentId}`
      );
      console.log(response);
      alert(response.data.message);
      setDepartmentTableRenderToggle((prevValue) => !prevValue);
      setIsDeleteDepartmentPopupOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[480px] bg-white rounded-lg">
        <div className="w-full h-[72px] p-6 flex justify-center items-center relative bg-[#BA1A1A] rounded-t-lg">
          <span className="font-semibold text-xl text-white">
            Department Deletion
          </span>
          <span
            className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
            onClick={() => setIsDeleteDepartmentPopupOpen(false)}
          >
            +
          </span>
        </div>

        <div className="p-10">
          <div className="pt-4 pb-10 flex justify-center items-center">
            <span>Do you want to proceed with deleting this department?</span>
          </div>
          <div className="flex items-center gap-x-6">
            <button
              className="w-52 px-4 py-2 font-medium text-base text-[#BA1A1A] border-[1px] border-[#BA1A1A] rounded-lg hover:bg-[#ba1a1a18] ease-in-out duration-300"
              onClick={handleDeleteDepartment}
            >
              Delete
            </button>
            <button
              className="w-52 px-4 py-2 font-medium text-base text-white bg-[#BA1A1A] border-none rounded-lg hover:bg-[#ba1a1ac7] ease-in-out duration-300"
              onClick={() => setIsDeleteDepartmentPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteDepartmentPopup;
