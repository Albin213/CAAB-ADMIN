"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function DepartmentTable({
  setSelectedDepartmentId,
  setIsEditDepartmentPopupOpen,
  setIsDeleteDepartmentPopupOpen,
  departmentTableRenderToggle,
}) {
  const [deptData, setDeptData] = useState([]);

  //Initial list api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listDepartment`
        );

        console.log(response);
        setDeptData(response.data.departments);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [departmentTableRenderToggle]);

  return (
    <table className="w-full">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Department Name</th>
          <th className="px-4 py-2 text-left">Department Type</th>
          <th className="px-4 py-2 text-left">Government Type</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        {deptData.length > 0 ? (
          deptData.map((dept, index) => (
            <tr
              className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
              key={index}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{dept.department_name}</td>
              <td className="px-4 py-2">{dept.department_type}</td>
              <td className="px-4 py-2">{dept.appropriate_govt}</td>
              <td className="h-10 px-4 py-2 flex gap-6 items-center">
                <span
                  className="font-extrabold text-[#BA1A1A] cursor-pointer"
                  onClick={() => {
                    setSelectedDepartmentId(dept.id);
                    setIsDeleteDepartmentPopupOpen(true);
                  }}
                >
                  Delete
                </span>
                <span
                  className="font-extrabold text-[#005193] cursor-pointer"
                  onClick={() => {
                    setSelectedDepartmentId(dept.id);
                    setIsEditDepartmentPopupOpen(true);
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

export default DepartmentTable;
