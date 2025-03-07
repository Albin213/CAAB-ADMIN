"use client";
import axios from "axios";
import DeleteSectorPopup from "@/app/components/sector/DeleteSectorPopup";
import EditSectorPopup from "@/app/components/sector/EditSectorPopup";
import SectorTable from "@/app/components/sector/SectorTable";
import React, { useState, useEffect } from "react";

function AddSector() {
  const [isLoading, setIsLoading] = useState(true);
  const [sectorName, setsectorName] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [departments, setDepartments] = useState([]);

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [sectorTableRenderToggle, setSectorTableRenderToggle] = useState(false);

  const [selectedSectorId, setSelectedSectorId] = useState(null);
  const [isDeleteSectorPopupOpen, setIsDeleteSectorPopupOpen] = useState(false);
  const [isEditSectorPopupOpen, setIsEditSectorPopupOpen] = useState(false);


  // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/departments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
        setDepartments(response.data);
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
    setsectorName(value);
  }

  function handleSelectAll() {
    if (selectAll) {
      setSelectedDepartments([]); // Deselect all
    } else {
      const allDepartments = departments.map((department) => department);
      setSelectedDepartments(allDepartments); // Select all sections
    }
    setSelectAll(!selectAll); // Toggle select all state
  }

  function handleDepartmentChange(value) {
    let updatedDepartments;

    if (selectedDepartments.includes(value)) {
      updatedDepartments = selectedDepartments.filter(
        (department) => department !== value
      );

      if (updatedDepartments.length !== departments.length) {
        setSelectAll(false); // Uncheck "Select All" if not all are selected
      }
    } else {
      updatedDepartments = [...selectedDepartments, value];

      if (updatedDepartments.length === departments.length) {
        setSelectAll(true); // Check "Select All" if all are selected
      }
    }
    setSelectedDepartments(updatedDepartments);
  }

  //Add Sector API
  async function handleAddSector(event) {
    event.preventDefault();
    setIsBtnDisabled(true);

    console.log(sectorName, ".................. ", selectedDepartments);

    if (!sectorName || !selectedDepartments[0]) {
      alert("Enter a sector name in the field provided.");
      setIsInputEmpty(true);
      setIsBtnDisabled(false);
    } else {
      try {
        setIsInputEmpty(false);

        // Add Sector API call
        const token = getToken();

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/addBusinessType`,
          {
            business_type: sectorName,
            department_name: selectedDepartments,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        alert(response.data.message);
        setTimeout(() => {
          setsectorName("");
          setSelectedDepartments([]);
          setSelectAll(false);
          setIsBtnDisabled(false);
          setSectorTableRenderToggle((prevValue) => !prevValue);
        }, 1000);
      } catch (error) {
        setIsInputEmpty(false);
        setIsBtnDisabled(false);
      }
    }
  }

  // if (isLoading) {
  //  return <div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>;
  // }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Search bar  */}
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Business Type"
          className={`w-[450px] h-10 px-4 py-2 text-xs lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] ${
            isInputEmpty && "border-red-500 border-2"
          }`}
          name="sectorName"
          value={sectorName}
          onChange={handleOnChange}
        />

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
        <div className="p-6 grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 border-[1px] border-[#707784] rounded-lg">
          {departments.map((department, index) => (
            <div className="flex justify-start items-center gap-2" key={index}>
              <input
                type="checkbox"
                id={department}
                name={department}
                value={department}
                checked={selectedDepartments.includes(department)}
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

        <button
          className={`w-72 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg ${
            isBtnDisabled && "cursor-not-allowed"
          }`}
          onClick={handleAddSector}
          disabled={isBtnDisabled}
        >
          ADD BUSINESS TYPE
        </button>
      </div>

      {/* Table  */}
      <div className="">
        <SectorTable
          setSelectedSectorId={setSelectedSectorId}
          setIsEditSectorPopupOpen={setIsEditSectorPopupOpen}
          setIsDeleteSectorPopupOpen={setIsDeleteSectorPopupOpen}
          sectorTableRenderToggle={sectorTableRenderToggle}
        />
      </div>

      {/* Popups  */}

      {isDeleteSectorPopupOpen && (
        <DeleteSectorPopup
          selectedSectorId={selectedSectorId}
          setIsDeleteSectorPopupOpen={setIsDeleteSectorPopupOpen}
          setSectorTableRenderToggle={setSectorTableRenderToggle}
        />
      )}

      {isEditSectorPopupOpen && (
        <EditSectorPopup
          selectedSectorId={selectedSectorId}
          departments={departments}
          setIsEditSectorPopupOpen={setIsEditSectorPopupOpen}
          setSectorTableRenderToggle={setSectorTableRenderToggle}
        />
      )}
    </div>
  );
}

export default AddSector;
