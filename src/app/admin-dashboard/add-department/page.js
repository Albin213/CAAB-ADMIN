"use client";
import DeleteDepartmentPopup from "@/app/components/department/DeleteDepartmentPopup";
import DepartmentTable from "@/app/components/department/DepartmentTable";
import EditDepartmentPopup from "@/app/components/department/EditDepartmentPopup";
import React, { useState } from "react";
import axios from "axios";

function AddDepartment() {
  const [departmentData, setDepartmentData] = useState({
    departmentName: "",
    departmentType: "",
    governmentType: "",
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const [isDeptNameEmpty, setIsDeptNameEmpty] = useState(false);
  const [isDeptTypeNotSelected, setIsDeptTypeNotSelected] = useState(false);
  const [isGovtTypeNotSelected, setIsGovtTypeNotSelected] = useState(false);

  const [departmentTableRenderToggle, setDepartmentTableRenderToggle] =
    useState(false);

  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [isDeleteDepartmentPopupOpen, setIsDeleteDepartmentPopupOpen] =
    useState(false);
  const [isEditDepartmentPopupOpen, setIsEditDepartmentPopupOpen] =
    useState(false);

  //handleOnChange
  function handleOnChange(event) {
    const { name, value } = event.target;
    setDepartmentData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  //Add Department
  async function handleAddDepartment(event) {
    event.preventDefault();
    setIsDeptNameEmpty(false);
    setIsDeptTypeNotSelected(false);
    setIsGovtTypeNotSelected(false);

    setIsBtnDisabled(true);

    const { departmentName, departmentType, governmentType } = departmentData;

    if (!departmentName || !departmentType || !governmentType) {
      if (!departmentName) {
        setIsDeptNameEmpty(true);
      }
      if (!departmentType) {
        setIsDeptTypeNotSelected(true);
      }
      if (!governmentType) {
        setIsGovtTypeNotSelected(true);
      }
      alert("Enter values to all the fields provided");
      setIsBtnDisabled(false);
    } else {
      try {
        // Add Department API call
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/newDepartment`,
          {
            department_name: departmentName,
            department_type: departmentType,
            appropriate_govt: governmentType,
          }
        );
        console.log(response);
        alert(response.data.message);

        setTimeout(() => {
          setDepartmentData({
            departmentName: "",
            departmentType: "",
            governmentType: "",
          });
          setIsDeptNameEmpty(false);
          setIsDeptTypeNotSelected(false);
          setIsGovtTypeNotSelected(false);
          setIsBtnDisabled(false);
          setDepartmentTableRenderToggle((prevValue) => !prevValue);
        }, 1000);
      } catch (error) {
        setIsDeptNameEmpty(false);
        setIsDeptTypeNotSelected(false);
        setIsGovtTypeNotSelected(false);
        setIsBtnDisabled(false);
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Search bar  */}
      <div className="pb-10 flex gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
        <input
          type="text"
          placeholder="Name of Department"
          className={`w-[150px] lg:w-[180px] xl:w-[261px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] ${
            isDeptNameEmpty && "border-red-500 border-2"
          }`}
          name="departmentName"
          value={departmentData.departmentName}
          onChange={handleOnChange}
        />

        <select
          className={`w-[150px] lg:w-[180px] xl:w-[261px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] ${
            isDeptTypeNotSelected && "border-red-500 border-2"
          }`}
          name="departmentType"
          value={departmentData.departmentType}
          onChange={handleOnChange}
        >
          <option value="" selected disabled>
            Department Type
          </option>
          <option value="EMP">EMP</option>
          <option value="NON EMP">NON EMP</option>
        </select>

        <select
          className={`w-[150px] lg:w-[180px] xl:w-[261px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] ${
            isGovtTypeNotSelected && "border-red-500 border-2"
          }`}
          name="governmentType"
          value={departmentData.governmentType}
          onChange={handleOnChange}
        >
          <option value="" selected disabled>
            Government Type
          </option>
          <option value="Central">Central Government</option>
          <option value="State">State Government</option>
        </select>

        <button
          className={`w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg ${
            isBtnDisabled && "cursor-not-allowed"
          }`}
          onClick={handleAddDepartment}
          disabled={isBtnDisabled}
        >
          ADD DEPARTMENT
        </button>
      </div>

      {/* Table  */}
      <div className="">
        <DepartmentTable
          setSelectedDepartmentId={setSelectedDepartmentId}
          setIsEditDepartmentPopupOpen={setIsEditDepartmentPopupOpen}
          setIsDeleteDepartmentPopupOpen={setIsDeleteDepartmentPopupOpen}
          departmentTableRenderToggle={departmentTableRenderToggle}
        />
      </div>

      {/* Popups  */}

      {isDeleteDepartmentPopupOpen && (
        <DeleteDepartmentPopup
          selectedDepartmentId={selectedDepartmentId}
          setIsDeleteDepartmentPopupOpen={setIsDeleteDepartmentPopupOpen}
          setDepartmentTableRenderToggle={setDepartmentTableRenderToggle}
        />
      )}

      {isEditDepartmentPopupOpen && (
        <EditDepartmentPopup
          selectedDepartmentId={selectedDepartmentId}
          setIsEditDepartmentPopupOpen={setIsEditDepartmentPopupOpen}
          setDepartmentTableRenderToggle={setDepartmentTableRenderToggle}
        />
      )}
    </div>
  );
}

export default AddDepartment;
