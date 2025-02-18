// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AddActTable({ tableRenderToggle }) {
//   const [lawsList, setLawsList] = useState([]);

//   //Initial list api
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listlaws`
//         );

//         console.log(response);
//         setLawsList(response.data.lawslist);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // toast.error("Error fetching data.");\
//       }
//     };

//     fetchData();
//   }, [tableRenderToggle]);

//   return (
//     <table className="w-full">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">Department Name</th>
//           <th className="px-4 py-2 text-left"> Law</th>
//           <th className="px-4 py-2 text-left">Act / Rule</th>
//           <th className="px-4 py-2 text-left">Section </th>
//           <th className="px-4 py-2 text-left">Penalty Amount</th>
//           <th className="px-4 py-2 text-left">Due Date</th>
//           <th className="px-4 py-2 text-left">Alert Date</th>
//           <th></th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
//         {lawsList[0] ? (
//           lawsList.map((lawsList, index) => (
//             <tr
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               key={index}
//             >
//               <td className="px-4 py-2">{lawsList.department_name}</td>
//               <td className="px-4 py-2">{lawsList.law}</td>
//               <td className="px-4 py-2"> {lawsList.act_rule} </td>
//               <td className="px-4 py-2"> {lawsList.section} </td>
//               <td className="px-4 py-2"> {lawsList.penalty_amount} </td>
//               <td className="px-4 py-2"> {lawsList.due_date} </td>
//               <td className="px-4 py-2"> {lawsList.alert_date} </td>

            

//               <td className="h-10 px-4 py-2 flex gap-6 items-center">
//                 {/* <span
//                   className="font-extrabold text-[#BA1A1A] cursor-pointer"
//                   onClick={() => {
//                     setSelectedSectorId(sector.id);
//                     setIsDeleteSectorPopupOpen(true);
//                   }}
//                 >
//                   Delete
//                 </span> */}
//                 {/* <span
//                   className="font-extrabold text-[#005193] cursor-pointer"
//                   onClick={() => {
//                     setSelectedSectorId(sector.id);
//                     setIsEditSectorPopupOpen(true);
//                   }}
//                 >
//                   Edit
//                 </span> */}
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

// export default AddActTable;




// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AddActTable({ tableRenderToggle }) {
//   const [lawsList, setLawsList] = useState([]);

//   // Fetch the initial list of laws
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listlaws`
//         );
//         setLawsList(response.data.lawslist || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Error fetching data. Please try again.");
//       }
//     };

//     fetchData();
//   }, [tableRenderToggle]);

//   // Handle deletion of a law
//   const handleDelete = async (id) => {
//     const confirmDelete = confirm("Are you sure you want to delete this law?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/deleteLaw/${id}`
//       );
//       alert("Law deleted successfully.");
//       setLawsList((prevList) => prevList.filter((law) => law.id !== id)); // Update table locally
//     } catch (error) {
//       console.error("Error deleting law:", error);
//       alert("Failed to delete the law. Please try again.");
//     }
//   };

//   return (
//     <table className="w-full">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">Department Name</th>
//           <th className="px-4 py-2 text-left">Law</th>
//           <th className="px-4 py-2 text-left">Act / Rule</th>
//           <th className="px-4 py-2 text-left">Section</th>
//           <th className="px-4 py-2 text-left">Penalty Amount</th>
//           <th className="px-4 py-2 text-left">Due Date</th>
//           <th className="px-4 py-2 text-left">Alert Date</th>
//           <th className="px-4 py-2 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
//         {lawsList.length > 0 ? (
//           lawsList.map((law) => (
//             <tr
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//               key={law.id}
//             >
//               <td className="px-4 py-2">{law.department_name}</td>
//               <td className="px-4 py-2">{law.law}</td>
//               <td className="px-4 py-2">{law.act_rule}</td>
//               <td className="px-4 py-2">{law.section}</td>
//               <td className="px-4 py-2">{law.penalty_amount}</td>
//               <td className="px-4 py-2">{law.due_date}</td>
//               <td className="px-4 py-2">{law.alert_date}</td>
//               <td className="px-4 py-2">
//                 <button
//                   className="text-[#BA1A1A] font-semibold"
//                   onClick={() => handleDelete(law.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="8" className="text-center py-4">
//               No data available.
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default AddActTable;


"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AddActTable({ tableRenderToggle }) {
  const [lawsList, setLawsList] = useState([]);
  const [editData, setEditData] = useState(null); // To store data for editing
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // Popup visibility state

  // Fetch the list of laws
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listlaws`
        );
        console.log(response);
        
        setLawsList(response.data.law || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, [tableRenderToggle]);

  // Handle deletion of a law
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this law?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/deleteLaw/${id}`
      );
      alert("Law deleted successfully.");
      setLawsList((prevList) => prevList.filter((law) => law.id !== id)); // Update table locally
    } catch (error) {
      console.error("Error deleting law:", error);
      alert("Failed to delete the law. Please try again.");
    }
  };

  // Handle editing of a law
  const handleEdit = (law) => {
    setEditData(law); // Populate form with selected row data
    setIsEditPopupOpen(true); // Open the popup
  };

  // Handle form submission for update
  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!editData) return;

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/updateLaw/${editData.id}`,
        editData
      );
      alert("Law updated successfully.");
      setIsEditPopupOpen(false); // Close the popup
      setLawsList((prevList) =>
        prevList.map((law) => (law.id === editData.id ? editData : law))
      ); // Update table locally
    } catch (error) {
      console.error("Error updating law:", error);
      alert("Failed to update the law. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
          <tr>
            <th className="px-4 py-2 text-left">Department Name</th>
            <th className="px-4 py-2 text-left">Law</th>
            <th className="px-4 py-2 text-left">Act / Rule</th>
            <th className="px-4 py-2 text-left">Section</th>
            <th className="px-4 py-2 text-left">Penalty Amount</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Alert Date</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-[#181C22]">
          {lawsList.length > 0 ? (
            lawsList.map((law) => (
              <tr
                className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
                key={law.id}
              >
                <td className="px-4 py-2">{law.department_name}</td>
                <td className="px-4 py-2">{law.law}</td>
                <td className="px-4 py-2">{law.act_rule}</td>
                <td className="px-4 py-2">{law.section}</td>
                <td className="px-4 py-2">{law.penalty_amount}</td>
                <td className="px-4 py-2">{law.due_date}</td>
                <td className="px-4 py-2">{law.alert_date}</td>
                <td className="px-4 py-2 flex gap-4 items-center">
                  <button
                    className="text-[#005193] font-semibold"
                    onClick={() => handleEdit(law)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-[#BA1A1A] font-semibold"
                    onClick={() => handleDelete(law.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Popup */}
      {isEditPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl">
            <h3 className="text-lg font-semibold mb-4">Edit Law</h3>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 xl:gap-1">
              <span className="text-sm font-semibold">Department Name<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="department_name"
                  value={editData.department_name}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      department_name: e.target.value,
                    })
                  }
                  placeholder="Department Name"
                  className="p-2 border rounded text-sm"
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
              <span className="text-sm font-semibold">Law<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="law"
                  value={editData.law}
                  onChange={(e) =>
                    setEditData({ ...editData, law: e.target.value })
                  }
                  placeholder="Law"
                  className="p-2 border rounded text-sm "
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
                <span className="text-sm font-semibold">Act / Rule<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="act_rule"
                  value={editData.act_rule}
                  onChange={(e) =>
                    setEditData({ ...editData, act_rule: e.target.value })
                  }
                  placeholder="Act / Rule"
                  className="p-2 border rounded text-sm"
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
                <span className="text-sm font-semibold">Section<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="section"
                  value={editData.section}
                  onChange={(e) =>
                    setEditData({ ...editData, section: e.target.value })
                  }
                  placeholder="Section"
                  className="p-2 border rounded text-sm"
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
                <span className="text-sm font-semibold">Penalty Amount<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="penalty_amount"
                  value={editData.penalty_amount}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      penalty_amount: e.target.value,
                    })
                  }
                  placeholder="Penalty Amount"
                  className="p-2 border rounded text-sm"
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
                <span className="text-sm font-semibold">Due Date<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="due_date"
                  value={editData.due_date}
                  onChange={(e) =>
                    setEditData({ ...editData, due_date: e.target.value })
                  }
                  placeholder="Due Date"
                  className="p-2 border rounded text-sm"
                />
                </div>
                <div className="flex flex-col gap-3 xl:gap-1">
                <span className="text-sm font-semibold">Alert Date<span className="text-red-500">*</span></span>
                <input
                  type="text"
                  name="alert_date"
                  value={editData.alert_date}
                  onChange={(e) =>
                    setEditData({ ...editData, alert_date: e.target.value })
                  }
                  placeholder="Alert Date"
                  className="p-2 border rounded text-sm"
                />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-300 rounded"
                  onClick={() => setIsEditPopupOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddActTable;
