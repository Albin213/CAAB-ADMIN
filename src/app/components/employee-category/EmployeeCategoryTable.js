"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeCategoryTable({ tableRenderToggle }) {
  const [employeeCategory, setEmployeeCategory] = useState([]);

  //Initial list api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listEmployeeCategory`
        );

        console.log(response);
        setEmployeeCategory(response.data.EmployeesCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [tableRenderToggle]);

  return (
    <table className="w-full">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">Employee Range</th>
          <th className="px-4 py-2 text-left">Employee Number</th>
          <th className="px-4 py-2 text-left">Employee Types</th>
          <th className="px-4 py-2 text-left">Department Name</th>
          <th className="px-4 py-2 text-left">Law</th>
          <th className="px-4 py-2 text-left">Law Description</th>
          <th className="px-4 py-2 text-left">Section Number</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        {employeeCategory[0] ? (
          employeeCategory.map((empCategory, index) => (
            <tr
              className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
              key={index}
            >
              <td className="px-4 py-2">{empCategory.emp_range}</td>
              <td className="px-4 py-2">{empCategory.emp_no}</td>
              <td className="px-4 py-2">
                {empCategory.employee_type[0] ? (
                  empCategory.employee_type.map((type, index) => (
                    <span key={index + 1}>
                      {type}
                      <br />
                    </span>
                  ))
                ) : (
                  <span></span>
                )}
              </td>
              <td className="px-4 py-2">{empCategory.department_name}</td>
              <td className="px-4 py-2">{empCategory.law}</td>
              <td className="px-4 py-2">{empCategory.description}</td>
              <td className="px-4 py-2">{empCategory.section}</td>

              <td className="h-10 px-4 py-2 flex gap-6 items-center">
                <span
                  className="font-extrabold text-[#BA1A1A] cursor-pointer"
                  onClick={() => {
                    setSelectedSectorId(sector.id);
                    setIsDeleteSectorPopupOpen(true);
                  }}
                >
                  Delete
                </span>
                <span
                  className="font-extrabold text-[#005193] cursor-pointer"
                  onClick={() => {
                    setSelectedSectorId(sector.id);
                    setIsEditSectorPopupOpen(true);
                  }}
                >
                  Edit
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default EmployeeCategoryTable;
