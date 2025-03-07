// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function SectorTable({
//   setSelectedSectorId,
//   setIsEditSectorPopupOpen,
//   setIsDeleteSectorPopupOpen,
//   sectorTableRenderToggle,
// }) {
//   const [sectorData, setSectorData] = useState([]);

//   //Initial list api
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listBusinessType`
//         );

//         console.log(response);
//         setSectorData(response.data.businessType);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // toast.error("Error fetching data.");\
//       }
//     };

//     fetchData();
//   }, [sectorTableRenderToggle]);

//   return (
//     <table className="w-full xl:w-3/4">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">ID</th>
//           <th className="px-4 py-2 text-left">Business Type</th>
//           <th className="px-4 py-2 text-left">Departments</th>
//           <th className="px-4 py-2 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
//         {sectorData[0] ? (
//           sectorData.map((sector, index) => (
//             <tr
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               key={index}
//             >
//               <td className="px-4 py-2">{index + 1}</td>
//               <td className="px-4 py-2">{sector.business_type}</td>
//               <td className="px-4 py-2">
//                 {sector.department_name[0] ? (
//                   sector.department_name.map((department, index) => (
//                     <span key={index + 1}>
//                       {department}
//                       <br />
//                     </span>
//                   ))
//                 ) : (
//                   <span></span>
//                 )}
//               </td>
//               <td className="h-10 px-4 py-2 flex gap-6 items-center">
//                 <span
//                   className="font-extrabold text-[#BA1A1A] cursor-pointer"
//                   onClick={() => {
//                     setSelectedSectorId(sector.id);
//                     setIsDeleteSectorPopupOpen(true);
//                   }}
//                 >
//                   Delete
//                 </span>
//                 <span
//                   className="font-extrabold text-[#005193] cursor-pointer"
//                   onClick={() => {
//                     setSelectedSectorId(sector.id);
//                     setIsEditSectorPopupOpen(true);
//                   }}
//                 >
//                   Edit
//                 </span>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default SectorTable;







"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function SectorTable({
  setSelectedSectorId,
  setIsEditSectorPopupOpen,
  setIsDeleteSectorPopupOpen,
  sectorTableRenderToggle,
}) {
  const [sectorData, setSectorData] = useState([]);

  // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Fetch Business Types with Token Authentication
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listBusinessType`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
        setSectorData(response.data.businessType);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sectorTableRenderToggle]);

  return (
    <table className="w-full xl:w-3/4">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Business Type</th>
          <th className="px-4 py-2 text-left">Departments</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        {sectorData.length > 0 ? (
          sectorData.map((sector, index) => (
            <tr
              className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
              key={index}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{sector.business_type}</td>
              <td className="px-4 py-2">
                {sector.department_name.length > 0 ? (
                  sector.department_name.map((department, i) => (
                    <span key={i}>
                      {department}
                      <br />
                    </span>
                  ))
                ) : (
                  <span></span>
                )}
              </td>
              <td className="h-10 px-4 py-2 flex gap-6 items-center">
                <span
                  className="font-extrabold text-[#BA1A1A] cursor-pointer"
                  onClick={() => {
                    setSelectedSectorId(sector.id);
                    setIsDeleteSectorPopupOpen(true);
                  }}
                >
                  Delete
                </span>
                <span
                  className="font-extrabold text-[#005193] cursor-pointer"
                  onClick={() => {
                    setSelectedSectorId(sector.id);
                    setIsEditSectorPopupOpen(true);
                  }}
                >
                  Edit
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-4">
              No business types available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default SectorTable;
