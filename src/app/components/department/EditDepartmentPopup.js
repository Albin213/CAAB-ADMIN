// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function EditDepartmentPopup({
//   selectedDepartmentId,
//   setIsEditDepartmentPopupOpen,
//   setDepartmentTableRenderToggle,
// }) {
//   console.log(selectedDepartmentId);

//   const [newDepartmentData, setNewDepartmentData] = useState({
//     departmentType: "",
//     governmentType: "",
//   });

//   const [isBtnDisabled, setIsBtnDisabled] = useState(false);
//   const [isInputEmpty, setIsInputEmpty] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/getDepartmentById/${selectedDepartmentId}`
//         );

//         console.log(response);
//         const { department_type, appropriate_govt } = response.data;
//         setNewDepartmentData({
//           departmentType: department_type,
//           governmentType: appropriate_govt,
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // toast.error("Error fetching data.");\
//       }
//     };

//     fetchData();
//   }, []);

//   //handleOnChange
//   function handleOnChange(event) {
//     const { name, value } = event.target;
//     setNewDepartmentData((prevValue) => {
//       return {
//         ...prevValue,
//         [name]: value,
//       };
//     });
//   }

//   //handleEditSector
//   async function handleEditDepartment(event) {
//     event.preventDefault();
//     const { departmentType, governmentType } = newDepartmentData;
//     if (!departmentType && !governmentType) {
//       alert("Select Department Type or Government Type.");
//       setIsInputEmpty(true);
//       setIsBtnDisabled(false);
//     } else {
//       try {
//         setIsInputEmpty(false);

//         // Edit Sector API call

//         const response = await axios.put(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/updateDepartment/${selectedDepartmentId}`,
//           {
//             department_type: departmentType,
//             appropriate_govt: governmentType,
//           }
//         );
//         console.log(response);
//         alert(response.data.message);
//         setTimeout(() => {
//           setNewDepartmentData({
//             departmentType: "",
//             governmentType: "",
//           });
//           setIsBtnDisabled(false);
//           setDepartmentTableRenderToggle((prevValue) => !prevValue);
//           setIsEditDepartmentPopupOpen(false);
//         }, 1000);
//       } catch (error) {
//         setIsInputEmpty(false);
//         setIsBtnDisabled(false);
//       }
//     }
//   }

//   return (
//     <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center">
//       <div className="w-[560px] bg-white rounded-lg">
//         <div className="h-[72px] p-6 bg-[#0076D2] rounded-t-lg relative">
//           <span className="text-white font-semibold text-xl">
//             Edit Department
//           </span>
//           <span
//             className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
//             onClick={() => setIsEditDepartmentPopupOpen(false)}
//           >
//             +
//           </span>
//         </div>

//         <div className="p-10">
//           <div className="pt-5 pb-20 flex flex-col gap-10">
//             <select
//               className="w-full h-14 px-2 bg-white text-[#404753] rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99]"
//               name="departmentType"
//               value={newDepartmentData.departmentType}
//               onChange={handleOnChange}
//             >
//               <option value="" selected disabled>
//                 Department Type
//               </option>
//               <option value="EMP">EMP</option>
//               <option value="NON EMP">NON EMP</option>
//             </select>

//             <select
//               className="w-full h-14 px-2 bg-white text-[#404753] rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99]"
//               name="governmentType"
//               value={newDepartmentData.governmentType}
//               onChange={handleOnChange}
//             >
//               <option value="" selected disabled>
//                 Government Type
//               </option>
//               <option value="Central">Central Government</option>
//               <option value="State">State Government</option>
//             </select>
//           </div>

//           <div className="flex justify-center items-center">
//             <button
//               className={`w-full h-[72px] px-4 py-6 font-semibold text-base bg-[#782A99] text-white rounded-2xl ${
//                 isBtnDisabled && "cursor-not-allowed"
//               }`}
//               onClick={handleEditDepartment}
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditDepartmentPopup;











"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditDepartmentPopup({
  selectedDepartmentId,
  setIsEditDepartmentPopupOpen,
  setDepartmentTableRenderToggle,
}) {
  const [newDepartmentData, setNewDepartmentData] = useState({
    departmentType: "",
    governmentType: "",
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!selectedDepartmentId) return;

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/getDepartmentById/${selectedDepartmentId}`,
          {
            headers: { Authorization: `Bearer ${token}` }, // ✅ Authentication
          }
        );

        const { department_type, appropriate_govt } = response.data;
        setNewDepartmentData({
          departmentType: department_type || "",
          governmentType: appropriate_govt || "",
        });
      } catch (error) {
        console.error("Error fetching department data:", error);
        setErrorMessage("Failed to load department details.");
      }
    };

    fetchData();
  }, [selectedDepartmentId]);

  // Handle input change
  function handleOnChange(event) {
    const { name, value } = event.target;
    setNewDepartmentData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  // Handle department update
  async function handleEditDepartment(event) {
    event.preventDefault();
    setIsBtnDisabled(true);
    setErrorMessage("");

    const { departmentType, governmentType } = newDepartmentData;
    if (!departmentType || !governmentType) {
      setErrorMessage("Please select both Department Type and Government Type.");
      setIsBtnDisabled(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/updateDepartment/${selectedDepartmentId}`,
        {
          department_type: departmentType,
          appropriate_govt: governmentType,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response);
      alert("Department updated successfully!");

      setTimeout(() => {
        setNewDepartmentData({ departmentType: "", governmentType: "" });
        setIsBtnDisabled(false);
        setDepartmentTableRenderToggle((prev) => !prev);
        setIsEditDepartmentPopupOpen(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating department:", error);
      setErrorMessage("Failed to update department. Please try again.");
      setIsBtnDisabled(false);
    }
  }

  return (
    <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[560px] bg-white rounded-lg">
        <div className="h-[72px] p-6 bg-[#0076D2] rounded-t-lg relative">
          <span className="text-white font-semibold text-xl">Edit Department</span>
          <span
            className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
            onClick={() => setIsEditDepartmentPopupOpen(false)}
          >
            +
          </span>
        </div>

        <div className="p-10">
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <div className="pt-5 pb-20 flex flex-col gap-10">
            <select
              className="w-full h-14 px-2 bg-white text-[#404753] rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#782A99]"
              name="departmentType"
              value={newDepartmentData.departmentType}
              onChange={handleOnChange}
            >
              <option value="" disabled>
                Select Department Type
              </option>
              <option value="EMP">EMP</option>
              <option value="NON EMP">NON EMP</option>
            </select>

            <select
              className="w-full h-14 px-2 bg-white text-[#404753] rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-[#782A99]"
              name="governmentType"
              value={newDepartmentData.governmentType}
              onChange={handleOnChange}
            >
              <option value="" disabled>
                Select Government Type
              </option>
              <option value="Central">Central Government</option>
              <option value="State">State Government</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <button
              className={`w-full h-[72px] px-4 py-6 font-semibold text-base bg-[#782A99] text-white rounded-2xl ${
                isBtnDisabled && "cursor-not-allowed opacity-70"
              }`}
              onClick={handleEditDepartment}
              disabled={isBtnDisabled}
            >
              {isBtnDisabled ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDepartmentPopup;
