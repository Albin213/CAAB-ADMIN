"use client";
import DeleteRolePopup from "@/app/components/roles/DeleteRolePopup";
import EditRolePopup from "@/app/components/roles/EditRolePopup";
import RolesTable from "@/app/components/roles/RolesTable";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Roles() {
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [isEditRolePopupOpen, setIsEditRolePopupOpen] = useState(false);
  const [isDeleteRolePopupOpen, setIsDeleteRolePopupOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-10">
      {/* add role  */}
      <div className="">
        <button
          className="w-[264px] h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg"
          onClick={() => router.push("/admin-dashboard/roles/create-role")}
        >
          ADD ROLE
        </button>
      </div>

      {/* Roles Table  */}
      <div className="">
        <RolesTable
          setSelectedRoleId={setSelectedRoleId}
          setIsEditRolePopupOpen={setIsEditRolePopupOpen}
          setIsDeleteRolePopupOpen={setIsDeleteRolePopupOpen}
        />
      </div>

      {/* Popups  */}

      {isEditRolePopupOpen && (
        <EditRolePopup
          selectedRoleId={selectedRoleId}
          setIsEditRolePopupOpen={setIsEditRolePopupOpen}
        />
      )}

      {isDeleteRolePopupOpen && (
        <DeleteRolePopup
          selectedRoleId={selectedRoleId}
          setIsDeleteRolePopupOpen={setIsDeleteRolePopupOpen}
        />
      )}
    </div>
  );
}

export default Roles;
