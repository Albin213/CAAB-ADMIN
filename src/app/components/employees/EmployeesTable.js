"use client";
import React from "react";

function EmployeesTable({
  setSelectedEmployeeId,
  setIsEditEmployeePopupOpen,
  setIsDeleteEmployeePopupOpen,
}) {
  return (
    <table className="w-full">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Image</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Role</th>
          <th className="px-4 py-2 text-left">Mobile Number</th>
          <th className="px-4 py-2 text-left">Aadhar</th>
          <th className="px-4 py-2 text-left">Address</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span
              className="font-extrabold text-[#BA1A1A] cursor-pointer"
              onClick={() => {
                setSelectedEmployeeId(1);
                setIsDeleteEmployeePopupOpen(true);
              }}
            >
              Delete
            </span>
            <span
              className="ms-6 font-extrabold text-[#005193] cursor-pointer"
              onClick={() => {
                setSelectedEmployeeId(1);
                setIsEditEmployeePopupOpen(true);
              }}
            >
              Edit
            </span>
          </td>
        </tr>

        {/* delete from here  */}
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        <tr className="min-h-10 bg-white border-[#C0C7D5] border-b-[1px]">
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">
            <img
              src="/next.svg"
              alt="user"
              className="size-6 rounded-full border-gray-400 border-[1px]"
            />
          </td>
          <td className="px-4 py-2">Rahul S T</td>
          <td className="px-4 py-2">Marketing Agent</td>
          <td className="px-4 py-2">9876543210</td>
          <td className="px-4 py-2">1234 5678 9101</td>
          <td className="px-4 py-2">Address</td>
          <td className="h-full px-4 py-2">
            <span className="font-extrabold text-[#BA1A1A] cursor-pointer">
              Delete
            </span>
            <span className="ms-6 font-extrabold text-[#005193] cursor-pointer">
              Edit
            </span>
          </td>
        </tr>
        {/* delete upto here  */}
      </tbody>
    </table>
  );
}

export default EmployeesTable;
