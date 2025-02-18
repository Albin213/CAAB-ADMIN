
// import React from 'react'

// function page() {
//   return (
//     <div>
       
//        <table className="w-full">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">ID</th>
//           <th className="px-4 py-2 text-left">Company Name</th>
//           <th className="px-4 py-2 text-left">UserName</th>
//           <th className="px-4 py-2 text-left">Mobile Number</th>
//           <th className="px-4 py-2 text-left">No of branches</th>
//           <th className="px-4 py-2 text-left">Status</th>
//           <th className="px-4 py-2 text-left">Actions</th>


     
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
    
//             <tr
            
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//             >
//               <td className="px-4 py-2">1</td>
//               <td className="px-4 py-2">company 23</td>
//               <td className="px-4 py-2">abcd efg</td>
//               <td className="px-4 py-2">4566567997</td>
//               <td className="px-4 py-2">6</td>
//               <td className="px-4 py-2">status</td>
//               <td className="px-4 py-2">
//                 <button className='text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2' >
//                   View Details
//                 </button>
//               </td>

              
//             </tr>
//             <tr
            
//             className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//           >
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">company 23</td>
//             <td className="px-4 py-2">abcd efg</td>
//             <td className="px-4 py-2">4566567997</td>
//             <td className="px-4 py-2">6</td>
//             <td className="px-4 py-2">status</td>
//             <td className="px-4 py-2">
//               <button className='text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2' >
//                 View Details
//               </button>
//             </td>

            
//           </tr>  <tr
            
//             className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//           >
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">company 23</td>
//             <td className="px-4 py-2">abcd efg</td>
//             <td className="px-4 py-2">4566567997</td>
//             <td className="px-4 py-2">6</td>
//             <td className="px-4 py-2">status</td>
//             <td className="px-4 py-2">
//               <button className='text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2' >
//                 View Details
//               </button>
//             </td>

            
//           </tr>
      
//       </tbody>
//     </table>
//     </div>
//   )
// }

// export default page




// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Page() {
//   const [companies, setCompanies] = useState([]);

//   // Fetch Companies Data
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listCompanies`
//         );
//         setCompanies(response.data);
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4 text-[#454545b9]">Companies List</h1> 
//       <table className="w-full">
//         <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//           <tr>
//             <th className="px-4 py-2 text-left">ID</th>
//             <th className="px-4 py-2 text-left">Company Name</th>
//             <th className="px-4 py-2 text-left">UserName</th>
//             <th className="px-4 py-2 text-left">Mobile Number</th>
//             <th className="px-4 py-2 text-left">Email</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm font-normal text-[#181C22]">
//           {companies.length > 0 ? (
//             companies.map((company, index) => (
//               <tr
//                 key={index}
//                 className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               >
//                 <td className="px-4 py-2">{company.caab_id}</td>
//                 <td className="px-4 py-2">{company.company_name}</td>
//                 <td className="px-4 py-2">{company.user_name}</td>
//                 <td className="px-4 py-2">{company.mobile}</td>
//                 <td className="px-4 py-2">{company.email}</td>
//                 <td className="px-4 py-2">
//                   <button className="text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2">
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center py-4">
//                 No companies available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Page;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// function Page() {
//   const [companies, setCompanies] = useState([]);
//   const router = useRouter();

//   // Fetch Companies Data
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listCompanies`
//         );
//         setCompanies(response.data);
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   // Handle View Details Click
//   const handleViewDetails = (id) => {
//     router.push(`/admin-dashboard/manage-company/company-details?id=${id}`);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4 text-[#454545b9]">Companies List</h1> 
//       <table className="w-full">
//         <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//           <tr>
//             <th className="px-4 py-2 text-left">ID</th>
//             <th className="px-4 py-2 text-left">Company Name</th>
//             <th className="px-4 py-2 text-left">UserName</th>
//             <th className="px-4 py-2 text-left">Mobile Number</th>
//             <th className="px-4 py-2 text-left">Email</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm font-normal text-[#181C22]">
//           {companies.length > 0 ? (
//             companies.map((company, index) => (
//               <tr
//                 key={index}
//                 className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               >
//                 <td className="px-4 py-2">{company.caab_id}</td>
//                 <td className="px-4 py-2">{company.company_name}</td>
//                 <td className="px-4 py-2">{company.user_name}</td>
//                 <td className="px-4 py-2">{company.mobile}</td>
//                 <td className="px-4 py-2">{company.email}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2 hover:bg-[#782a9982] hover:text-white"
//                     onClick={() => handleViewDetails(company.caab_id)}
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center py-4">
//                 No companies available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Page;



"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Page() {
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 5; // Number of companies per page
  const router = useRouter();

  // Fetch Companies Data
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listCompanies`,
          { params: { page, pageSize } }
        );
        setCompanies(response.data.companies);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, [page]);

  // Handle View Details Click
  const handleViewDetails = (id) => {
    router.push(`/admin-dashboard/manage-company/company-details?id=${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#454545b9]">Companies List</h1>
      
      <table className="w-full">
        <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Company Name</th>
            <th className="px-4 py-2 text-left">UserName</th>
            <th className="px-4 py-2 text-left">Mobile Number</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-[#181C22]">
          {companies.length > 0 ? (
            companies.map((company, index) => (
              <tr key={index} className="h-10 bg-white border-[#C0C7D5] border-b-[1px]">
                <td className="px-4 py-2">{company.caab_id}</td>
                <td className="px-4 py-2">{company.company_name}</td>
                <td className="px-4 py-2">{company.user_name}</td>
                <td className="px-4 py-2">{company.mobile}</td>
                <td className="px-4 py-2">{company.email}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2 hover:bg-[#782a9982] hover:text-white"
                    onClick={() => handleViewDetails(company.caab_id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No companies available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <p className="text-sm text-[#454545b9]">
          Page {page} of {totalPages}
        </p>

        <button
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page;
