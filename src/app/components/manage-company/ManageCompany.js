// import React from 'react'

// function ManageCompany() {
//   return (
//     <div>
//         <div className='bg-[#BED7FF] rounded-lg p-4'>
//             <div className='flex '>
//                 <p className='text-[#224167] font-medium text-[14px] pr-28'>Branch Name1</p>
//                 <div className='bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center'>12</div>
                
//             </div>
//             <div className='flex  mt-7'>
//                 <p className='text-[#224167] text-[14px] pr-16'>Location /City</p>
//                 <div className=' text-white flex justify-center items-center'>
//                     <img src="/Grading Meter.svg" alt="" />
//                     <p className='font-medium text-[20px] text-[#181C22] pl-2'>75</p>
//                 </div>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ManageCompany




// "use client"; // If you're using Next.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ManageCompany() {
//   const [branches, setBranches] = useState([]);

//   const fetchBranches = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/User/listBranches/CAAB2002`
//       );
//       setBranches(response.data.branches || []); // Safeguard against undefined branches
//     } catch (error) {
//       console.error("Error fetching branch details:", error);
//       alert("Failed to fetch branch details. Please try again.");
//     }
//   };

//   useEffect(() => {
//     fetchBranches();
//   }, []);

//   return (
//     <>
//       {branches.length > 0 ? (
//         branches.map((branch) => (
//           <div key={branch.id} className="bg-[#BED7FF] rounded-lg p-4">
//             <div className="flex justify-between items-center">
//               <p className="text-[#224167] font-medium text-[14px]">{branch.branch_name}</p>
//               <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
//                 {branch.total_employees}
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-7">
//               <p className="text-[#224167] text-[14px]">{branch.district}/{branch.city}</p>
//               <div className="text-white flex items-center">
//                 <img src="/Grading Meter.svg" alt="Grading Meter" className="w-5 h-5" />
//                 <p className="font-medium text-[20px] text-[#181C22] pl-2">{branch.no_female}</p>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-[#224167] text-center">No branch details available.</p>
//       )}
//     </>
//   );
// }

// export default ManageCompany;




// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ManageCompany({ companyId }) {
//   const [branches, setBranches] = useState([]);

//   const fetchBranches = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/User/listBranches/${companyId}`
//       );
//       setBranches(response.data.branches || []); // Safeguard against undefined branches
//     } catch (error) {
//       console.error("Error fetching branch details:", error);
//       alert("Failed to fetch branch details. Please try again.");
//     }
//   };

//   useEffect(() => {
//     if (companyId) fetchBranches();
//   }, [companyId]);

//   return (
//     <>
//       {branches.length > 0 ? (
//         branches.map((branch) => (
//           <div key={branch.id} className="bg-[#BED7FF] rounded-lg p-4">
//             <div className="flex justify-between items-center">
//               <p className="text-[#224167] font-medium text-[14px]">{branch.branch_name}</p>
//               <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
//                 {branch.total_employees}
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-7">
//               <p className="text-[#224167] text-[14px]">{branch.district}/{branch.city}</p>
//               <div className="text-white flex items-center">
//                 <img src="/Grading Meter.svg" alt="Grading Meter" className="w-5 h-5" />
//                 <p className="font-medium text-[20px] text-[#181C22] pl-2">{branch.no_female}</p>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-[#224167] text-center">No branch details available.</p>
//       )}
//     </>
//   );
// }

// export default ManageCompany;





"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function ManageCompany({ companyId }) {
  const [branches, setBranches] = useState([]);
  const router = useRouter();

  const fetchBranches = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/User/listBranches/${companyId}`
      );
      setBranches(response.data.branches || []); // Safeguard against undefined branches
    } catch (error) {
      console.error("Error fetching branch details:", error);
      alert("Failed to fetch branch details. Please try again.");
    }
  };

  useEffect(() => {
    if (companyId) fetchBranches();
  }, [companyId]);

  // Navigate to branch-details page with branch_id
  const handleBranchClick = (branchId) => {
    router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`);
  };

  return (
    <>
      {branches.length > 0 ? (
        branches.map((branch) => (
          <div
            key={branch.id}
            onClick={() => handleBranchClick(branch.branch_id)} // Trigger navigation
            className="bg-[#BED7FF] rounded-lg p-4 cursor-pointer hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <p className="text-[#224167] font-medium text-[14px]">
                {branch.branch_name}
              </p>
              <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
                {branch.total_employees}
              </div>
            </div>
            <div className="flex justify-between items-center mt-7">
              <p className="text-[#224167] text-[14px]">
                {branch.district}/{branch.city}
              </p>
              <div className="text-white flex items-center">
                <img
                  src="/Grading Meter.svg"
                  alt="Grading Meter"
                  className="w-5 h-5"
                />
                <p className="font-medium text-[20px] text-[#181C22] pl-2">
                  {branch.no_female}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#224167] text-center">No branch details available.</p>
      )}
    </>
  );
}

export default ManageCompany;
