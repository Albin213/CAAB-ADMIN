"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-full relative">
      <div className="w-full h-20 ps-6 sticky top-0 flex justify-start items-center bg-[#224167]">
        <img className="w-1/2" src={"/CAAB-logo-new-2.png"} alt="CAAB Logo" />
      </div>

      <div className="w-full">
        {/* HOME  */}
        <Link href="/admin-dashboard/add-sector">
          <h1
            className={`text-[#82B0FF] text-[14px] font-bold px-6 pt-10 pb-4`}
          >
            HOME
          </h1>
        </Link>

        {/* MANAGE CLIENT  */}
        <div className="w-full">
          <h1 className="text-[#82B0FF] text-[14px] font-bold px-6 pt-10 pb-4">
            MANAGE CLIENT
          </h1>
          <Link href="/admin-dashboard/manage-company">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/manage-company"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Manage Company
            </p>
          </Link>

          <Link href="">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/generate-report"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Generate Report
            </p>
          </Link>
        </div>

        {/* MANAGE DATA  */}
        <div className="w-full">
          <h1 className="text-[#82B0FF] text-[14px] font-bold px-6 pt-10 pb-4">
            MANAGE DATA
          </h1>

          <Link href="/admin-dashboard/add-department">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/add-department"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Department
            </p>
          </Link>
          <Link href="/admin-dashboard/add-sector">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/add-sector"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Business Type
            </p>
          </Link>

        

          <Link href="/admin-dashboard/employee-category">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/employee-category"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Employee Category
            </p>
          </Link>

          <Link href="/admin-dashboard/add-act">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg ${
                pathname === "/admin-dashboard/add-act"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Act
            </p>
          </Link>

          <Link href="">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg ${
                pathname === "/admin-dashboard/add-depts-to-sector"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Depts. to Sector
            </p>
          </Link>

          <Link href="">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg ${
                pathname === "/admin-dashboard/add-acts-to-depts"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Acts to Depts.
            </p>
          </Link>

          
          <Link href="/admin-dashboard/add-questionnaire">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname === "/admin-dashboard/add-questionnaire"
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Add Questionnaire
            </p>
          </Link>
        </div>

        {/* MANAGE EMPLOYEE  */}
        <div className="w-full">
          <h1 className="text-[#82B0FF] text-[14px] font-bold px-6 pt-10 pb-4">
            MANAGE EMPLOYEE
          </h1>
          <Link href="">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname.includes("/admin-dashboard/roles")
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Create Role
            </p>
          </Link>

          <Link href="">
            <p
              className={`text-[#F8F9FF] text-[14px] font-semibold py-2 px-6 ps-14 flex items-center gap-2 hover:text-white hover:rounded-lg  ${
                pathname.includes("/admin-dashboard/employees")
                  ? "bg-[#0076D2] text-[#F8F9FF] rounded-lg"
                  : "hover:bg-[#3d98ff2a]"
              }`}
            >
              Create Employee
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
