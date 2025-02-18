"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditSectorPopup({
  selectedSectorId,
  departments,
  setIsEditSectorPopupOpen,
  setSectorTableRenderToggle,
}) {
  const [newSectorName, setNewSectorName] = useState("");
  const [newSelectedDepartments, setNewSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [departmentList, setDepartmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setDepartmentList(departments);

      // setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/getBusinessTypeById/${selectedSectorId}`
        );

        console.log(response);
        setNewSectorName(response.data.business_type);
        // if (response.data.department_name.length === departments.length) {
        //   setSelectAll(true);
        // } else {
        //   selectAll(false);
        // }
        setNewSelectedDepartments(response.data.department_name);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  //handleOnChange
  function handleOnChange(event) {
    const value = event.target.value;
    setNewSectorName(value);
  }

  function handleSelectAll() {
    if (selectAll) {
      setNewSelectedDepartments([]); // Deselect all
    } else {
      const allDepartments = departments.map((department) => department);
      setNewSelectedDepartments(allDepartments); // Select all sections
    }
    setSelectAll(!selectAll); // Toggle select all state
  }

  function handleDepartmentChange(value) {
    let updatedDepartments;

    if (newSelectedDepartments.includes(value)) {
      updatedDepartments = newSelectedDepartments.filter(
        (department) => department !== value
      );

      if (updatedDepartments.length !== departmentList.length) {
        setSelectAll(false); // Uncheck "Select All" if not all are selected
      }
    } else {
      updatedDepartments = [...newSelectedDepartments, value];

      if (updatedDepartments.length === departmentList.length) {
        setSelectAll(true); // Check "Select All" if all are selected
      }
    }
    setNewSelectedDepartments(updatedDepartments);
  }

  //handleEditSector
  async function handleEditSector(event) {
    event.preventDefault();

    if (!newSectorName || !newSelectedDepartments[0]) {
      if (!newSectorName) {
        alert("Enter a sector name in the field provided.");
        setIsInputEmpty(true);
      }

      if (!newSelectedDepartments[0]) {
        alert("Enter atleast one department.");
      }
      setIsBtnDisabled(false);
    } else {
      try {
        setIsInputEmpty(false);

        console.log(newSectorName, newSelectedDepartments);

        // Edit Sector API call

        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/updateBusinessType/${selectedSectorId}`,
          {
            business_type: newSectorName,
            department_name: newSelectedDepartments,
          }
        );
        console.log(response);
        alert(response.data.message);
        setTimeout(() => {
          setNewSectorName("");
          setIsBtnDisabled(false);
          setSectorTableRenderToggle((prevValue) => !prevValue);
          setIsEditSectorPopupOpen(false);
        }, 1000);
      } catch (error) {
        setIsInputEmpty(false);
        setIsBtnDisabled(false);
      }
    }
  }

  if (isLoading) return <div>Loading .....</div>;
  return (
    <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[560px] bg-white rounded-lg">
        <div className="h-[72px] p-6 bg-[#0076D2] rounded-t-lg relative">
          <span className="text-white font-semibold text-xl">
            Edit Business Type
          </span>
          <span
            className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
            onClick={() => setIsEditSectorPopupOpen(false)}
          >
            +
          </span>
        </div>

        <div className="p-10">
          <div className="pt-5 pb-20 flex flex-col gap-y-6">
            {/* <input
              type="text"
              className="w-full h-14 px-2 bg-white text-[#404753] rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99]"
              placeholder="New Sector Name"
              name="newSectorName"
              value={newSectorName}
              onChange={handleOnChange}
            /> */}

            <p className="text-xl text-[#404753] font-semibold">{newSectorName}</p> 
            {/* sector/business type name not editable */}

            <div className="flex items-center gap-2">
              <span className="font-medium text-sm leading-6 text-[#181C22]">
                Add Department :
              </span>
              <input
                type="checkbox"
                id="selectAll"
                checked={selectAll}
                className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
                onChange={handleSelectAll}
              />
              <label
                htmlFor="selectAll"
                className="font-normal text-sm text-[#404753] cursor-pointer"
              >
                Select All
              </label>
            </div>

            {/* Select Department  */}
            <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-10 border-[1px] border-[#707784] rounded-lg">
              {departmentList.map((department, index) => (
                <div
                  className="flex justify-start items-center gap-2"
                  key={index + 1}
                >
                  <input
                    type="checkbox"
                    id={department}
                    name={department}
                    value={department}
                    checked={newSelectedDepartments.includes(department)}
                    onChange={() => handleDepartmentChange(department)}
                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
                  />
                  <label
                    htmlFor={department}
                    className="font-normal text-sm text-[#404753] cursor-pointer"
                  >
                    {department}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`w-full h-[72px] px-4 py-6 font-semibold text-base bg-[#782A99] text-white rounded-2xl ${
                isBtnDisabled && "cursor-not-allowed"
              }`}
              onClick={handleEditSector}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSectorPopup;
