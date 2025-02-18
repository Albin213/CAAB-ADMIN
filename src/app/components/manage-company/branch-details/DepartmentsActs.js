import React from "react";
import { GiConfirmed } from "react-icons/gi";

function DepartmentsActs() {
  return (
    <div>
      <div className="bg-[#224167] rounded-lg p-4">
        <div className="flex ">
          <p className="text-[#ffffff] font-medium text-[14px] leading-6">
            Kerala Shops and Commercial Establishment Act 1960
          </p>
        </div>
        <div className="flex  mt-7 gap-x-6">
          <div className="text-white text-[12px] flex justify-center items-center">
            (5/5)
          </div>
          <div className="text-[#256D00] bg-white flex justify-center items-center rounded-lg gap-2 px-1 ">
            <GiConfirmed /> <p className="">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentsActs;
