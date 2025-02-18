"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EmployeesTable from "@/app/components/employees/EmployeesTable";
import EditEmployeePopup from "@/app/components/employees/EditEmployeePopup";
import DeleteEmployeePopup from "@/app/components/employees/DeleteEmployeePopup";

function Employees() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isEditEmployeePopupOpen, setIsEditEmployeePopupOpen] = useState(false);
  const [isDeleteEmployeePopupOpen, setIsDeleteEmployeePopupOpen] =
    useState(false);

  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-10">
      {/* Search bar  */}
      <div className="">
        <button
          className="w-[264px] h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg"
          onClick={() =>
            router.push("/admin-dashboard/employees/create-employee")
          }
        >
          CREATE EMPLOYEE
        </button>
      </div>

      {/* Employees Table  */}
      <div className="">
        <EmployeesTable
          setSelectedEmployeeId={setSelectedEmployeeId}
          setIsEditEmployeePopupOpen={setIsEditEmployeePopupOpen}
          setIsDeleteEmployeePopupOpen={setIsDeleteEmployeePopupOpen}
        />
      </div>

      {/* Popups  */}

      {isEditEmployeePopupOpen && (
        <EditEmployeePopup
          selectedEmployeeId={selectedEmployeeId}
          setIsEditEmployeePopupOpen={setIsEditEmployeePopupOpen}
        />
      )}

      {isDeleteEmployeePopupOpen && (
        <DeleteEmployeePopup
          selectedEmployeeId={selectedEmployeeId}
          setIsDeleteEmployeePopupOpen={setIsDeleteEmployeePopupOpen}
        />
      )}
    </div>
  );
}

export default Employees;
