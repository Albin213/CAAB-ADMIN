

// import Circle from "@/app/components/manage-company/branch-details/Circle";
// import DepartmentsActs from "@/app/components/manage-company/branch-details/DepartmentsActs";
// import React from "react";

// function page() {
//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]  ">
//         Manage Company {">"} Company Details {">"} Branch Details
//       </p>
//       <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//         <div className="w-1/3 ">
//           <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//             Branch Details
//           </h1>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Company Name </p>{" "}
//             <p className=" text-[#181C22]">: Company2</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Branch Name </p>{" "}
//             <p className=" text-[#181C22]">: Branch Name2</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Sector</p>{" "}
//             <p className=" text-[#181C22]">: Sector2</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Email </p>{" "}
//             <p className=" text-[#181C22]">: sebastian@gmail.com</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Branch Ph. No. </p>{" "}
//             <p className=" text-[#181C22]">: 9539083486</p>{" "}
//           </div>
//         </div>
//         <div className="w-1/3 ">
//           <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//             Branch Admin details
//           </h1>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Admin Name </p>{" "}
//             <p className=" text-[#181C22]">: Raj sr</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Admin Ph. No. </p>{" "}
//             <p className=" text-[#181C22]">: Company2</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">Admin Email </p>{" "}
//             <p className=" text-[#181C22]">:Seban@gmail.com</p>{" "}
//           </div>
//         </div>
//         <div className="w-1/3 ">
//           <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//             Branch Labour Details
//           </h1>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">No. of female labours </p>{" "}
//             <p className=" text-[#181C22]">: 30</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">No. of male labours</p>{" "}
//             <p className=" text-[#181C22]">: 50</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">No. of contract labours </p>{" "}
//             <p className=" text-[#181C22]">: 30</p>{" "}
//           </div>
//           <div className="flex text-[14px] mb-3">
//             <p className="text-[#404753]">No. of migrant labours </p>{" "}
//             <p className=" text-[#181C22]">: 40</p>{" "}
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-14">
//         <img className="w-36" src="/Grading Meter.svg " alt="" />
//         <div className="border-[1px] border-[#ABC8F6] rounded-[16px] w-[398px] h-[120px] flex justify-center items-center py-10 p-2">
//           <div className=" text-[#181C22] text-[16px] flex justify-center items-center py-10 p-5 ">
//             <p className="px-5">Only completed 60% of forms to finalise your rating.</p>
//             <span><Circle/></span>

//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h1 className="text-black text-[14px] font-semibold pb-4">Departments & ACTS</h1>
//         <div className="border-[1px] border-[#782A99] w-full  rounded-lg  p-4">

//             <h1 className="text-[16px] text-[#404753] font-semibold border-b-[1px] border-[#C0C7D5]">GST Department</h1>

//             <div className="grid grid-cols-4 p-4 gap-4" >
//                <DepartmentsActs/>
//                <DepartmentsActs/>
//                <DepartmentsActs/>
//                <DepartmentsActs/>
//                <DepartmentsActs/>
//                <DepartmentsActs/>

//             </div>



//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;



// "use client";
// import Circle from "@/app/components/manage-company/branch-details/Circle";
// import DepartmentsActs from "@/app/components/manage-company/branch-details/DepartmentsActs";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DocumentAndCertificate from "@/app/components/manage-company/branch-details/DocumentAndCertificate";

// function Page() {
//   const [branchDetails, setBranchDetails] = useState(null);

//   // Fetch branch details
//   useEffect(() => {
//     const fetchBranchDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/listBranches/CAAB2001`
//         );
//         setBranchDetails(response.data.branches[0]);
//       } catch (error) {
//         console.error("Error fetching branch details:", error);
//         alert("Failed to fetch branch details. Please try again.");
//       }
//     };

//     fetchBranchDetails();
//   }, []);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details {">"} Branch Details
//       </p>

//       {branchDetails ? (
//         <>
//           <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//             {/* Branch Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Sector </p>
//                 <p className="text-[#181C22]">: {branchDetails.business_type}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_email}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_mobile_no}</p>
//               </div>
//             </div>

//             {/* Branch Admin Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Admin Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_admin_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_no}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_email}</p>
//               </div>
//             </div>

//             {/* Branch Labour Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Labour Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Female Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_female}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Total Employees</p>
//                 <p className="text-[#181C22]">: {branchDetails.total_employees}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Contract Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_contract}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Migrant Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_migrant}</p>
//               </div>
//             </div>
//           </div>

//           {/* Progress and Grading */}
//           <div className="flex gap-14">
//             <img className="w-36" src="/Grading Meter.svg" alt="Grading Meter" />
//             <div className="border-[1px] border-[#ABC8F6] rounded-[16px] w-[398px] h-[120px] flex justify-center items-center py-10 p-2">
//               <div className="text-[#181C22] text-[16px] flex justify-center items-center py-10 p-5">
//                 <p className="px-5">
//                   Only completed 60% of forms to finalize your rating.
//                 </p>
//                 <span>
//                   <Circle />
//                 </span>
//               </div>
//             </div>
//           </div>

       

//           <DocumentAndCertificate />
//         </>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading branch details...</p>
//       )}
//     </div>
//   );
// }

// export default Page;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";
// import Circle from "@/app/components/manage-company/branch-details/Circle";
// import DocumentAndCertificate from "@/app/components/manage-company/branch-details/DocumentAndCertificate";

// function Page() {
//   const [branchDetails, setBranchDetails] = useState(null);
//   const searchParams = useSearchParams();
//   const branchId = searchParams.get("id"); // Retrieve branch_id from query
// console.log(branchDetails);

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchBranchDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/branchDetails/${branchId}`
//         );
//         // console.log(response);
        
//         setBranchDetails(response.data.branchDetails[0]);
//       } catch (error) {
//         console.error("Error fetching branch details:", error);
//         alert("Failed to fetch branch details. Please try again.");
//       }
//     };

//     fetchBranchDetails();
//   }, [branchId]);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details {">"} Branch Details
//       </p>

//       {branchDetails ? (
//         <>
//           <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//             {/* Branch Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Sector </p>
//                 <p className="text-[#181C22]">: {branchDetails.business_type}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_email}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_mobile_no}</p>
//               </div>
//             </div>

//             {/* Branch Admin Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Admin Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_admin_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_no}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_email}</p>
//               </div>
//             </div>

//             {/* Branch Labour Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Labour Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Female Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_female}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Total Employees</p>
//                 <p className="text-[#181C22]">: {branchDetails.total_employees}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Contract Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_contract}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Migrant Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_migrant}</p>
//               </div>
//             </div>
//           </div>
          


//           <div>

//             <button>Question List</button>
//             {/* <Circle /> */}
//             <DocumentAndCertificate branchId={branchId} />
//           </div>
//         </>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading branch details...</p>
//       )}
//     </div>
//   );
// }

// export default Page;

// "use client"; // Ensure this is a Client Component

// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";
// import DocumentAndCertificate from "@/app/components/manage-company/branch-details/DocumentAndCertificate";

// function BranchDetailsComponent() {
//   const [branchDetails, setBranchDetails] = useState(null);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id");

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchBranchDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/branchDetails/${branchId}`
//         );
//         setBranchDetails(response.data.branchDetails[0]);
//       } catch (error) {
//         console.error("Error fetching branch details:", error);
//         alert("Failed to fetch branch details. Please try again.");
//       }
//     };

//     fetchBranchDetails();
//   }, [branchId]);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details {">"} Branch Details
//       </p>

//       {branchDetails ? (
//         <>
//           <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//             {/* Branch Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Sector </p>
//                 <p className="text-[#181C22]">: {branchDetails.business_type}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_email}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Branch Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_mobile_no}</p>
//               </div>
//             </div>

//             {/* Branch Admin Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Admin Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Name </p>
//                 <p className="text-[#181C22]">: {branchDetails.branch_admin_name}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Ph. No. </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_no}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Admin Email </p>
//                 <p className="text-[#181C22]">: {branchDetails.admin_email}</p>
//               </div>
//             </div>

//             {/* Branch Labour Details */}
//             <div className="w-1/3">
//               <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
//                 Branch Labour Details
//               </h1>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Female Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_female}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">Total Employees</p>
//                 <p className="text-[#181C22]">: {branchDetails.total_employees}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Contract Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_contract}</p>
//               </div>
//               <div className="flex text-[14px] mb-3">
//                 <p className="text-[#404753]">No. of Migrant Labours </p>
//                 <p className="text-[#181C22]">: {branchDetails.no_migrant}</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               onClick={() => router.push(`/admin-dashboard/manage-company/branch-details/questionsList?id=${branchId}`)}
//               className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all"
//             >
//               Question List
//             </button>
//             <DocumentAndCertificate branchId={branchId} />
//           </div>
//         </>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading branch details...</p>
//       )}
//     </div>
//   );
// }

// // 🌟 Wrap the component in a Suspense boundary
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <BranchDetailsComponent />
//     </Suspense>
//   );
// }








"use client"; // Ensure this is a Client Component

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import DocumentAndCertificate from "@/app/components/manage-company/branch-details/DocumentAndCertificate";
import Circle from "@/app/components/manage-company/branch-details/Circle";

function BranchDetailsComponent() {
  const [branchDetails, setBranchDetails] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const branchId = searchParams.get("id");

  useEffect(() => {
    if (!branchId) return;

    const fetchBranchDetails = async () => {
      const token = localStorage.getItem("token"); // Retrieve token

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/branchDetails/${branchId}`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
          }
        );
        setBranchDetails(response.data.branchDetails[0]);
      } catch (error) {
        console.error("Error fetching branch details:", error);
        alert("Failed to fetch branch details. Please try again.");
      }
    };

    fetchBranchDetails();
  }, [branchId]);

  return (
    <div>
      <p className="text-[#707784] text-[14px]">
        Manage Company {">"} Company Details {">"} Branch Details
      </p>

      {branchDetails ? (
        <>
          <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
            {/* Branch Details */}
            <div className="w-1/3">
              <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
                Branch Details
              </h1>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Branch Name </p>
                <p className="text-[#181C22]">: {branchDetails.branch_name}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Sector </p>
                <p className="text-[#181C22]">: {branchDetails.business_type}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Email </p>
                <p className="text-[#181C22]">: {branchDetails.branch_email}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Branch Ph. No. </p>
                <p className="text-[#181C22]">: {branchDetails.branch_mobile_no}</p>
              </div>
            </div>

            {/* Branch Admin Details */}
            <div className="w-1/3">
              <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
                Branch Admin Details
              </h1>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Admin Name </p>
                <p className="text-[#181C22]">: {branchDetails.branch_admin_name}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Admin Ph. No. </p>
                <p className="text-[#181C22]">: {branchDetails.admin_no}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Admin Email </p>
                <p className="text-[#181C22]">: {branchDetails.admin_email}</p>
              </div>
            </div>

            {/* Branch Labour Details */}
            <div className="w-1/3">
              <h1 className="text-[16px] font-semibold text-[#181C22] mb-3">
                Branch Labour Details
              </h1>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">No. of Female Labours </p>
                <p className="text-[#181C22]">: {branchDetails.no_female}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">Total Employees</p>
                <p className="text-[#181C22]">: {branchDetails.total_employees}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">No. of Contract Labours </p>
                <p className="text-[#181C22]">: {branchDetails.no_contract}</p>
              </div>
              <div className="flex text-[14px] mb-3">
                <p className="text-[#404753]">No. of Migrant Labours </p>
                <p className="text-[#181C22]">: {branchDetails.no_migrant}</p>
              </div>
            </div>
          </div>
          <Circle branchId={branchId} />

          <div>
            <button
              onClick={() => router.push(`/admin-dashboard/manage-company/branch-details/questionsList?id=${branchId}`)}
              className="bg-[#782A99]  text-white px-6 py-3 mt-4 rounded-md hover:bg-[#5e2178] transition-all"
            >
              Question List
            </button>
            <DocumentAndCertificate branchId={branchId} />
          </div>
        </>
      ) : (
        <p className="text-[#707784] text-[14px]">Loading branch details...</p>
      )}
    </div>
  );
}

// 🌟 Wrap the component in a Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BranchDetailsComponent />
    </Suspense>
  );
}
