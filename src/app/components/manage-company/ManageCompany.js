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





// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// function ManageCompany({ companyId }) {
//   const [branches, setBranches] = useState([]);
//   const router = useRouter();

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

//   // Navigate to branch-details page with branch_id
//   const handleBranchClick = (branchId) => {
//     router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`);
//   };

//   return (
//     <>
//       {branches.length > 0 ? (
//         branches.map((branch) => (
//           <div
//             key={branch.id}
//             onClick={() => handleBranchClick(branch.branch_id)} // Trigger navigation
//             className="bg-[#BED7FF] rounded-lg p-4 cursor-pointer hover:shadow-lg"
//           >
//             <div className="flex justify-between items-center">
//               <p className="text-[#224167] font-medium text-[14px]">
//                 {branch.branch_name}
//               </p>
//               <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
//                 {branch.total_employees}
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-7">
//               <p className="text-[#224167] text-[14px]">
//                 {branch.district}/{branch.city}
//               </p>
//               <div className="text-white flex items-center">
//                 <img
//                   src="/Grading Meter.svg"
//                   alt="Grading Meter"
//                   className="w-5 h-5"
//                 />
//                 <p className="font-medium text-[20px] text-[#181C22] pl-2">
//                   {branch.no_female}
//                 </p>
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
// import { useRouter } from "next/navigation";
// import axios from "axios";

// function ManageCompany({ companyId }) {
//   const [branches, setBranches] = useState([]);
//   const router = useRouter();

//   const fetchBranches = async () => {
//     const token = localStorage.getItem("token"); // Get token from localStorage

//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/User/listBranches/${companyId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` }, // Attach token in request
//         }
//       );
//       console.log(response);
      
//       setBranches(response.data.branches || []); // Safeguard against undefined branches
//     } catch (error) {
//       console.error("Error fetching branch details:", error);
//       alert("Failed to fetch branch details. Please try again.");
//     }
//   };

//   useEffect(() => {
//     if (companyId) fetchBranches();
//   }, [companyId]);

//   // Navigate to branch-details page with branch_id
//   const handleBranchClick = (branchId) => {
//     router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`);
//   };

//   return (
//     <>
//       {branches.length > 0 ? (
//         branches.map((branch) => (
//           <div
//             key={branch.id}
//             onClick={() => handleBranchClick(branch.branch_id)} // Trigger navigation
//             className="bg-[#BED7FF] rounded-lg p-4 cursor-pointer hover:shadow-lg"
//           >
//             <div className="flex justify-between items-center">
//               <p className="text-[#224167] font-medium text-[14px] capitalize">
//                 {branch.branch_name}
//               </p>
//               <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
//                 {branch.total_employees}
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-7 capitalize">
//               <p className="text-[#224167] text-[14px]">
//                 {branch.district}/{branch.city}
//               </p>
//               {/* <div className="text-white flex items-center">
//                 <img
//                   src="/Grading Meter.svg"
//                   alt="Grading Meter"
//                   className="w-5 h-5"
//                 />
//                 <p className="font-medium text-[20px] text-[#181C22] pl-2">
//                   {branch.no_female}
//                 </p>
//               </div> */}
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
  const [negativeMarks, setNegativeMarks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBranches = async () => {
      if (!companyId) return;

      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/User/listBranches/${companyId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBranches(response.data.branches || []);
      } catch (err) {
        console.error("Error fetching branch details:", err);
        setError("Failed to fetch branch details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, [companyId]);

  // Fetch negative marks for each branch
  useEffect(() => {
    const fetchNegativeMarks = async () => {
      if (!branches.length) return;

      const token = localStorage.getItem("token");
      const newNegativeMarks = {};

      await Promise.all(
        branches.map(async (branch) => {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/admin/gradingDetails/${branch.branch_id}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            // Extract `NegativeCount`, default to 0 if missing
            newNegativeMarks[branch.branch_id] = response.data?.NegativeCount ?? 0;
          } catch (err) {
            console.error(`Error fetching negative mark for ${branch.branch_id}:`, err);
            newNegativeMarks[branch.branch_id] = 0; // Default to 0 if API fails
          }
        })
      );

      setNegativeMarks(newNegativeMarks);
    };

    fetchNegativeMarks();
  }, [branches]);

  const handleBranchClick = (branchId) => {
    router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`);
  };

  if (loading) {
    return <p className="text-[#224167] text-center">Loading branch details...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <>
      {branches.length > 0 ? (
        branches.map((branch) => (
          <div
            key={branch.branch_id}
            onClick={() => handleBranchClick(branch.branch_id)}
            className="bg-[#BED7FF] rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <p className="text-[#224167] font-medium text-[14px] capitalize">
                {branch.branch_name}
              </p>
              <div className="bg-[#BA1A1A] text-white rounded-full w-[24px] h-[24px] flex justify-center items-center">
                {negativeMarks[branch.branch_id] ?? 0}
              </div>
            </div>
            <div className="flex justify-between items-center mt-7 capitalize">
              <p className="text-[#224167] text-[14px]">
                {branch.district}/{branch.city}
              </p>
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
