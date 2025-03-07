// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DepartmentTable({
//   setSelectedDepartmentId,
//   setIsEditDepartmentPopupOpen,
//   setIsDeleteDepartmentPopupOpen,
//   departmentTableRenderToggle,
// }) {
//   const [deptData, setDeptData] = useState([]);

//   //Initial list api
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listDepartment`
//         );

//         console.log(response);
//         setDeptData(response.data.departments);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // toast.error("Error fetching data.");\
//       }
//     };

//     fetchData();
//   }, [departmentTableRenderToggle]);

//   return (
//     <table className="w-full">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">ID</th>
//           <th className="px-4 py-2 text-left">Department Name</th>
//           <th className="px-4 py-2 text-left">Department Type</th>
//           <th className="px-4 py-2 text-left">Government Type</th>
//           <th className="px-4 py-2 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
//         {deptData.length > 0 ? (
//           deptData.map((dept, index) => (
//             <tr
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               key={index}
//             >
//               <td className="px-4 py-2">{index + 1}</td>
//               <td className="px-4 py-2">{dept.department_name}</td>
//               <td className="px-4 py-2">{dept.department_type}</td>
//               <td className="px-4 py-2">{dept.appropriate_govt}</td>
//               <td className="h-10 px-4 py-2 flex gap-6 items-center">
//                 <span
//                   className="font-extrabold text-[#BA1A1A] cursor-pointer"
//                   onClick={() => {
//                     setSelectedDepartmentId(dept.id);
//                     setIsDeleteDepartmentPopupOpen(true);
//                   }}
//                 >
//                   Delete
//                 </span>
//                 <span
//                   className="font-extrabold text-[#005193] cursor-pointer"
//                   onClick={() => {
//                     setSelectedDepartmentId(dept.id);
//                     setIsEditDepartmentPopupOpen(true);
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

// export default DepartmentTable;















"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function DepartmentTable({
  setSelectedDepartmentId,
  setIsEditDepartmentPopupOpen,
  setIsDeleteDepartmentPopupOpen,
  departmentTableRenderToggle,
}) {
  const [deptData, setDeptData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listDepartment`,
          {
            headers: { Authorization: `Bearer ${token}` }, // ✅ Authentication
          }
        );

        setDeptData(response.data.departments || []);
      } catch (error) {
        console.error("Error fetching departments:", error);
        setError("Failed to load department data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [departmentTableRenderToggle]);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="h-10 text-sm font-semibold text-white bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">ID</th>
            <th className="px-4 py-2 text-left border border-gray-300">Department Name</th>
            <th className="px-4 py-2 text-left border border-gray-300">Department Type</th>
            <th className="px-4 py-2 text-left border border-gray-300">Government Type</th>
            <th className="px-4 py-2 text-left border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-[#181C22]">
          {isLoading ? (
            <tr>
              <td colSpan="5" className="px-4 py-4 text-center text-gray-500">Loading departments...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5" className="px-4 py-4 text-center text-red-500">{error}</td>
            </tr>
          ) : deptData.length > 0 ? (
            deptData.map((dept, index) => (
              <tr className="h-10 bg-white border-b border-gray-300" key={dept.id}>
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{dept.department_name}</td>
                <td className="px-4 py-2 border border-gray-300">{dept.department_type}</td>
                <td className="px-4 py-2 border border-gray-300">{dept.appropriate_govt}</td>
                <td className="h-10 px-4 py-2 flex gap-6 items-center border border-gray-300">
                  <button
                    className="text-[#BA1A1A] font-extrabold hover:underline"
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsDeleteDepartmentPopupOpen(true);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="text-[#005193] font-extrabold hover:underline"
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsEditDepartmentPopupOpen(true);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-4 text-center text-gray-500">No departments found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;
