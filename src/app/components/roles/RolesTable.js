"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RolesTable({
  setSelectedRoleId,
  setIsEditRolePopupOpen,
  setIsDeleteRolePopupOpen,
}) {
  const [rolesData, setRolesData] = useState([]);

  //Initial list api
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API_URL}/admin/listRoles`
  //       );

  //       console.log(response);
  //       // setRolesData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // toast.error("Error fetching data.");\
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <table className="w-full">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Role</th>
          <th className="px-4 py-2 text-left">Access</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">Human Resource (HR)</td>
          <td className="px-4 py-2">
            Create Role,
            <br /> Create Employee
          </td>
          <td className="h-full px-4 py-2">
            <span
              className="font-extrabold text-[#BA1A1A] cursor-pointer"
              onClick={() => {
                setSelectedRoleId(1);
                setIsDeleteRolePopupOpen(true);
              }}
            >
              Delete
            </span>
            <span
              className="ms-6 font-extrabold text-[#005193] cursor-pointer"
              onClick={() => {
                setSelectedRoleId(1);
                setIsEditRolePopupOpen(true);
              }}
            >
              Edit
            </span>
          </td>
        </tr>

        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">2</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">
            Add Sector, <br />
            Add Department,
            <br /> Add Act,
            <br /> Add Departments to Sector,
            <br /> Add Acts to Department
          </td>
          <td className="min-h-10 px-4 py-2 ">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RolesTable;
