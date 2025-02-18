import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";


function page() {
  return (
    <div>
        <p className='text-[#707784] text-[14px]  '>Manage Company {">"} Company Details {">"}MW Act 1948</p>
        <h1 className='text-[#181C22] font-semibold text-[20px] my-8'>MW Act 1948</h1>
        <p className='text-[#181C22] font-semibold text-[14px]'>Violations--</p>

        <div className="border-[1px] border-[#782A99] w-full bg-[#F8F9FF]  rounded-lg  p-4 py-10">
           

           <div className='flex justify-between items-center border-b-[2px] border-[#C0C7D5] py-2'>
            <p>1{")"}Rule 21A(2): Failed to pay and disburse wages to employees through individual bank accounts as per Rule 21A(1)</p>
            <div className='bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white'><IoIosCloseCircle className='text-white text-2xl '/> <span>YES</span></div>
           </div>

           <div className='flex justify-between items-center border-b-[2px] border-[#C0C7D5] py-2'>
            <p>1{")"}Rule 21A(2): Failed to pay and disburse wages to employees through individual bank accounts as per Rule 21A(1)</p>
            <div className='bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white'><IoIosCloseCircle className='text-white text-2xl '/> <span>YES</span></div>
           </div>
           <div className='flex justify-between items-center border-b-[2px] border-[#C0C7D5] py-2'>
            <p>1{")"}Rule 21A(2): Failed to pay and disburse wages to employees through individual bank accounts as per Rule 21A(1)</p>
            <div className='bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white'><IoIosCloseCircle className='text-white text-2xl '/> <span>YES</span></div>
           </div>
        </div>
    </div>
  )
}

export default page