
// import ManageCompany from '@/app/components/manage-company/ManageCompany'
// import React from 'react'

// function page() {
//   return (
//     <div>
//         <p className='text-[#707784] text-[14px]  '>Manage Company {">"} Company Details</p>
//         <div className='w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8'>
//             <div className='w-1/3 '>
//             <div className='flex text-[14px] mb-3' ><p className='text-[#404753]'>Company Name </p> <p className=' text-[#181C22]' >: Company2</p> </div>
//             <div className='flex text-[14px]'><p className='text-[#404753]'>No. of Branches  </p> <p className=' text-[#181C22]'>: 14</p> </div>
//             </div>

//             <div className='w-1/3 '>
//             <div className='flex text-[14px] mb-3' ><p className='text-[#404753]'>Username  </p> <p className=' text-[#181C22]' >: Username2</p> </div>
//             <div className='flex text-[14px]'><p className='text-[#404753]'>Email  </p> <p className=' text-[#181C22]'>: hr@company2@gmail.com</p> </div>
//             </div>

//             <div className='w-1/3 '>
//             <div className='flex text-[14px] mb-3' ><p className='text-[#404753]'>Mobile Number  </p> <p className=' text-[#181C22]' >: 9539083486</p> </div>
//             </div>

//         </div>

//         <div>
//             <h1 className='text-black text-[14px] font-semibold pb-4'>Branches</h1>
//             <div className='border-[1px] border-[#782A99] w-full  rounded-lg grid grid-cols-4 gap-4 p-4'>
//                 <ManageCompany/>
               

//             </div>
//         </div>

//     </div>
//   )
// }

// export default page


// "use client";
// import ManageCompany from "@/app/components/manage-company/ManageCompany";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Page() {
//   const [companyInfo, setCompanyInfo] = useState(null);

//   useEffect(() => {
//     const fetchCompanyInfo = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/User/companyInfo/CAAB2002`
//         );
//         setCompanyInfo(response.data.companyInfo);
//       } catch (error) {
//         console.error("Error fetching company details:", error);
//         alert("Failed to fetch company details. Please try again.");
//       }
//     };

//     fetchCompanyInfo();
//   }, []);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details
//       </p>

//       {companyInfo ? (
//         <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Company Name </p>
//               <p className="text-[#181C22]">: {companyInfo.company_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">No. of Branches </p>
//               <p className="text-[#181C22]">: {companyInfo.noOfBranch}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Username </p>
//               <p className="text-[#181C22]">: {companyInfo.user_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">Email </p>
//               <p className="text-[#181C22]">: {companyInfo.email}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Mobile Number </p>
//               <p className="text-[#181C22]">: {companyInfo.mobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading company details...</p>
//       )}

//       <div>
//         <h1 className="text-black text-[14px] font-semibold pb-4">Branches</h1>
//         <div className="border-[1px] border-[#782A99] w-full rounded-lg p-4 grid grid-cols-4 gap-4">
//           <ManageCompany />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;



// "use client";
// import ManageCompany from "@/app/components/manage-company/ManageCompany";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// function Page() {
//   const [companyInfo, setCompanyInfo] = useState(null);
//   const searchParams = useSearchParams();
//   const companyId = searchParams.get("id");

//   useEffect(() => {
//     if (!companyId) return;

//     const fetchCompanyInfo = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/User/companyInfo/${companyId}`
//         );
//         setCompanyInfo(response.data.companyInfo);
//       } catch (error) {
//         console.error("Error fetching company details:", error);
//         alert("Failed to fetch company details. Please try again.");
//       }
//     };

//     fetchCompanyInfo();
//   }, [companyId]);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details
//       </p>

//       {companyInfo ? (
//         <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Company Name </p>
//               <p className="text-[#181C22]">: {companyInfo.company_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">No. of Branches </p>
//               <p className="text-[#181C22]">: {companyInfo.noOfBranch}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Username </p>
//               <p className="text-[#181C22]">: {companyInfo.user_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">Email </p>
//               <p className="text-[#181C22]">: {companyInfo.email}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Mobile Number </p>
//               <p className="text-[#181C22]">: {companyInfo.mobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading company details...</p>
//       )}

//       <div>
//         <h1 className="text-black text-[14px] font-semibold pb-4">Branches</h1>
//         <div className="border-[1px] border-[#782A99] w-full rounded-lg p-4 grid grid-cols-4 gap-4">
//           <ManageCompany />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;



// "use client";
// import ManageCompany from "@/app/components/manage-company/ManageCompany";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// function Page() {
//   const [companyInfo, setCompanyInfo] = useState(null);
//   const searchParams = useSearchParams();
//   const companyId = searchParams.get("id");

//   useEffect(() => {
//     if (!companyId) return;

//     const fetchCompanyInfo = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/User/companyInfo/${companyId}`
//         );
//         setCompanyInfo(response.data.companyInfo);
//       } catch (error) {
//         console.error("Error fetching company details:", error);
//         alert("Failed to fetch company details. Please try again.");
//       }
//     };

//     fetchCompanyInfo();
//   }, [companyId]);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details
//       </p>

//       {companyInfo ? (
//         <div className="w-full border-[1px] border-[#C0C7D5] bg-[#F8F9FF] rounded-[8px] p-5 flex my-8">
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Company Name </p>
//               <p className="text-[#181C22]">: {companyInfo.company_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">No. of Branches </p>
//               <p className="text-[#181C22]">: {companyInfo.noOfBranch}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Username </p>
//               <p className="text-[#181C22]">: {companyInfo.user_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">Email </p>
//               <p className="text-[#181C22]">: {companyInfo.email}</p>
//             </div>
//           </div>

//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Mobile Number </p>
//               <p className="text-[#181C22]">: {companyInfo.mobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading company details...</p>
//       )}

//       <div>
//         <h1 className="text-black text-[14px] font-semibold pb-4">Branches</h1>
//         <div className="border-[1px] border-[#782A99] w-full rounded-lg p-4 grid grid-cols-4 gap-4">
//           <ManageCompany companyId={companyId} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;



// "use client";

// import ManageCompany from "@/app/components/manage-company/ManageCompany";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// function CompanyDetails() {
//   const [companyInfo, setCompanyInfo] = useState(null);
//   const searchParams = useSearchParams();
//   const companyId = searchParams.get("id");

//   useEffect(() => {
//     if (!companyId) return;

//     const fetchCompanyInfo = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/User/companyInfo/${companyId}`
//         );
//         setCompanyInfo(response.data.companyInfo);
//       } catch (error) {
//         console.error("Error fetching company details:", error);
//         alert("Failed to fetch company details. Please try again.");
//       }
//     };

//     fetchCompanyInfo();
//   }, [companyId]);

//   return (
//     <div>
//       <p className="text-[#707784] text-[14px]">
//         Manage Company {">"} Company Details
//       </p>

//       {companyInfo ? (
//         <div className="w-full border border-[#C0C7D5] bg-[#F8F9FF] rounded-lg p-5 flex my-8">
//           {/* Column 1 */}
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Company Name </p>
//               <p className="text-[#181C22]">: {companyInfo.company_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">No. of Branches </p>
//               <p className="text-[#181C22]">: {companyInfo.noOfBranch}</p>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Username </p>
//               <p className="text-[#181C22]">: {companyInfo.user_name}</p>
//             </div>
//             <div className="flex text-[14px]">
//               <p className="text-[#404753]">Email </p>
//               <p className="text-[#181C22]">: {companyInfo.email}</p>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div className="w-1/3">
//             <div className="flex text-[14px] mb-3">
//               <p className="text-[#404753]">Mobile Number </p>
//               <p className="text-[#181C22]">: {companyInfo.mobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-[14px]">Loading company details...</p>
//       )}

//       <div>
//         <h1 className="text-black text-[14px] font-semibold pb-4">Branches</h1>
//         <div className="border border-[#782A99] w-full rounded-lg p-4 grid grid-cols-4 gap-4">
//           <ManageCompany companyId={companyId} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // 🌟 Wrap the component in a Suspense boundary for better performance
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <CompanyDetails />
//     </Suspense>
//   );
// }




"use client";

import ManageCompany from "@/app/components/manage-company/ManageCompany";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function CompanyDetails() {
  const [companyInfo, setCompanyInfo] = useState(null);
  const searchParams = useSearchParams();
  const companyId = searchParams.get("id");

  useEffect(() => {
    if (!companyId) return;

    const fetchCompanyInfo = async () => {
      const token = localStorage.getItem("token"); // Retrieve token

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/User/companyInfo/${companyId}`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
          }
        );
        setCompanyInfo(response.data.companyInfo);
      } catch (error) {
        console.error("Error fetching company details:", error);
        alert("Failed to fetch company details. Please try again.");
      }
    };

    fetchCompanyInfo();
  }, [companyId]);

  return (
    <div>
      <p className="text-[#707784] text-[14px]">
        Manage Company {">"} Company Details
      </p>

      {companyInfo ? (
        <div className="w-full border border-[#C0C7D5] bg-[#F8F9FF] rounded-lg p-5 flex my-8">
          {/* Column 1 */}
          <div className="w-1/3">
            <div className="flex text-[14px] mb-3">
              <p className="text-[#404753]">Company Name </p>
              <p className="text-[#181C22]">: {companyInfo.company_name}</p>
            </div>
            <div className="flex text-[14px]">
              <p className="text-[#404753]">No. of Branches </p>
              <p className="text-[#181C22]">: {companyInfo.noOfBranch}</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-1/3">
            <div className="flex text-[14px] mb-3">
              <p className="text-[#404753]">Username </p>
              <p className="text-[#181C22]">: {companyInfo.user_name}</p>
            </div>
            <div className="flex text-[14px]">
              <p className="text-[#404753]">Email </p>
              <p className="text-[#181C22]">: {companyInfo.email}</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="w-1/3">
            <div className="flex text-[14px] mb-3">
              <p className="text-[#404753]">Mobile Number </p>
              <p className="text-[#181C22]">: {companyInfo.mobile}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[#707784] text-[14px]">Loading company details...</p>
      )}

      <div>
        <h1 className="text-black text-[14px] font-semibold pb-4">Branches</h1>
        <div className="border border-[#782A99] w-full rounded-lg p-4 grid grid-cols-4 gap-4">
          <ManageCompany companyId={companyId} />
        </div>
      </div>
    </div>
  );
}

// 🌟 Wrap the component in a Suspense boundary for better performance
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CompanyDetails />
    </Suspense>
  );
}
