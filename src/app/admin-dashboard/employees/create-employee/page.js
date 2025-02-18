"use client";
import React from "react";

function CreateEmployee() {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* Bread crumb  */}
      <span className="text-sm font-normal text-[#707784]">
        Manage Employee {">"} Create Role
      </span>

      {/* Employee creation form */}
      <div className="w-full flex gap-6">
        <div className="w-1/2 flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee Id"
            className="w-full h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          />
          <select
            name="role"
            id=""
            className="w-full h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          >
            <option value="" selected disabled>
              --- Select Role ---
            </option>
            <option value="">Role 1</option>
            <option value="">Role 2</option>
            <option value="">Role 3</option>
          </select>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="w-full h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          />
          <input
            type="text"
            name="aadharNumber"
            placeholder="Aadhar Number"
            className="w-full h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          />
          <textarea
            name="address"
            id=""
            placeholder="Address"
            className="w-full px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
            rows={4}
          ></textarea>

          {/* submit button  */}
          <button className="w-full h-14 mt-8 p-4 font-normal text-sm text-white bg-[#782A99] rounded-lg">
            Submit
          </button>
        </div>
        <div className="w-1/2 flex justify-between gap-6">
          {/* employee image  */}
          <div className="w-1/3 h-48 px-6 py-10 bg-[#D9D9D9]">
            <label
              className="w-full h-full flex justify-center items-center text-black text-center cursor-pointer"
              htmlFor="employeeImage"
            >
              <span className="text-base">
                Upload <br />
                Employee <br />
                Image
              </span>
              <input
                type="file"
                name="employeeImage"
                id="employeeImage"
                hidden
              />
            </label>
          </div>
          {/* aadhar images */}
          <div className="w-2/3 h-48 bg-[#D9D9D9]">
            <label
              className="w-full h-full flex justify-center items-center text-black text-center cursor-pointer"
              htmlFor="aadharImage"
            >
              <span className="text-base">
                Upload <br />
                Aadhar <br />
                Image
              </span>
              <input type="file" name="aadharImage" id="aadharImage" hidden />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
