"use client";
import EmployeeCategoryTable from "@/app/components/employee-category/EmployeeCategoryTable";
import React, { useState } from "react";
import axios from "axios";

const employeeTypeArray = ["Normal", "Adhidhi", "Contract", "Migrant"];

function page() {
  const [employeeCategory, setEmployeeCategory] = useState({
    employeeRange: "",
    employeeNumber: "",
    departmentName: "",
    law: "",
    description: "",
    sectionNumber: "",
  });

  const [selectedEmployeeTypes, setSelectedEmployeeTypes] = useState([]);

  const [selectAll, setSelectAll] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const [tableRenderToggle, setTableRenderToggle] = useState(false);

  console.log(employeeCategory, selectedEmployeeTypes);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setEmployeeCategory((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSelectAll() {
    if (selectAll) {
      setSelectedEmployeeTypes([]); // Deselect all
    } else {
      const allEmployeeType = employeeTypeArray.map((type) => type);
      setSelectedEmployeeTypes(allEmployeeType); // Select all sections
    }
    setSelectAll(!selectAll); // Toggle select all state
  }

  function handleEmployeeTypeChange(value) {
    let updatedEmployeeTypes;

    if (selectedEmployeeTypes.includes(value)) {
      updatedEmployeeTypes = selectedEmployeeTypes.filter(
        (empType) => empType !== value
      );

      if (updatedEmployeeTypes.length !== employeeTypeArray.length) {
        setSelectAll(false); // Uncheck "Select All" if not all are selected
      }
    } else {
      updatedEmployeeTypes = [...selectedEmployeeTypes, value];

      if (updatedEmployeeTypes.length === employeeTypeArray.length) {
        setSelectAll(true); // Check "Select All" if all are selected
      }
    }
    setSelectedEmployeeTypes(updatedEmployeeTypes);
  }

  //Add Sector API
  async function handleAddEmployeeCategory(event) {
    event.preventDefault();
    setIsBtnDisabled(true);

    const {
      employeeRange,
      employeeNumber,
      departmentName,
      law,
      description,
      sectionNumber,
    } = employeeCategory;

    if (
      !selectedEmployeeTypes[0] ||
      !employeeRange ||
      !employeeNumber ||
      !departmentName ||
      !law ||
      !description ||
      !sectionNumber
    ) {
      alert("Enter the required information");

      setIsBtnDisabled(false);
    } else {
      try {
        // Add Sector API call

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/newEmployeeCategory`,
          {
            emp_no: employeeRange,
            sex: employeeNumber,
            employee_type: selectedEmployeeTypes,
            department_name: departmentName,
            law: law,
            description: description,
            section: sectionNumber,
          }
        );
        console.log(response);
        alert(response.data.message);
        setTimeout(() => {
          setEmployeeCategory({
            employeeRange: "",
            employeeNumber: "",
            departmentName: "",
            law: "",
            description: "",
            sectionNumber: "",
          });
          setSelectedEmployeeTypes([]);
          setSelectAll(false);
          setIsBtnDisabled(false);
          setTableRenderToggle((prevValue) => !prevValue);
        }, 1000);
      } catch (error) {
        setIsInputEmpty(false);
        setIsBtnDisabled(false);
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Employee Category Form  */}
      <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
        <input
          type="text"
          placeholder="Employee Range"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="employeeRange"
          value={employeeCategory.employeeRange}
          onChange={handleOnChange}
        />

        <select
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] "
          name="employeeNumber"
          value={employeeCategory.employeeNumber}
          onChange={handleOnChange}
        >
          <option value="" selected disabled>
            Gender
          </option>
          <option value="total_employees">Total Employees</option>
          <option value="no_female">Female Employee</option>
        </select>

        {/* Select All Employee Types  */}

        <div className="flex items-center gap-2">
          <span className="font-medium text-sm leading-6 text-[#181C22]">
            Add Employee Types :
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

        {/* Select Employee Type  */}

        <div className="w-[500px] p-6 grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 border-[1px] border-[#707784] rounded-lg">
          {employeeTypeArray.map((empType, index) => (
            <div className="flex justify-start items-center gap-2" key={index}>
              <input
                type="checkbox"
                id={empType}
                name={empType}
                value={empType}
                checked={selectedEmployeeTypes.includes(empType)}
                onChange={() => handleEmployeeTypeChange(empType)}
                className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
              />
              <label
                htmlFor={empType}
                className="font-normal text-sm text-[#404753] cursor-pointer"
              >
                {empType}
              </label>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Department Name"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="departmentName"
          value={employeeCategory.departmentName}
          onChange={handleOnChange}
        />

        <input
          type="text"
          placeholder="Law"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="law"
          value={employeeCategory.law}
          onChange={handleOnChange}
        />

        <textarea
          className="w-[150px] lg:w-[180px] xl:w-[500px] px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          placeholder="Law Description"
          name="description"
          value={employeeCategory.description}
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        <input
          type="text"
          placeholder="Section Number"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="sectionNumber"
          value={employeeCategory.sectionNumber}
          onChange={handleOnChange}
        />

        <button
          className={`w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg ${
            isBtnDisabled && "cursor-not-allowed"
          }`}
          onClick={handleAddEmployeeCategory}
          disabled={isBtnDisabled}
        >
          ADD DEPARTMENT
        </button>
      </div>

      {/* Category Table  */}
      <div>
        <EmployeeCategoryTable tableRenderToggle={tableRenderToggle} />
      </div>
    </div>
  );
}

export default page;
