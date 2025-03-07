// "use client";
// import React, { useState } from "react";
// import sections from "./sections.json";

// const addSectorArray = ["/admin-dashboard/add-sector"];
// const addDepartmentArray = ["/admin-dashboard/add-department"];
// const createRoleArray = [
//   "/admin-dashboard/roles",
//   "/admin-dashboard/roles/create-role",
// ];

// function CreateRole() {
//   const [roleName, setRoleName] = useState("");
//   const [selectedSections, setSelectedSections] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   const [allowedRoutes, setAllowedRoutes] = useState([]);

//   function handleSelectAll() {
//     if (selectAll) {
//       setSelectedSections([]); // Deselect all
//     } else {
//       setSelectedSections(sections.map((section) => section.value)); // Select all
//     }
//     setSelectAll(!selectAll); // Toggle select all state
//   }

//   function handleSectionChange(value) {
//     if (selectedSections.includes(value)) {
//       const updatedSections = selectedSections.filter(
//         (section) => section !== value
//       );
//       setSelectedSections(updatedSections);

//       // Uncheck "Select All" if not all are selected
//       if (updatedSections.length !== sections.length) {
//         setSelectAll(false);
//       }

//       //updating allowed Routes
//     } else {
//       const updatedSections = [...selectedSections, value];
//       setSelectedSections(updatedSections);

//       // Check "Select All" if all are selected
//       if (updatedSections.length === sections.length) {
//         setSelectAll(true);
//       }
//     }
//   }

//   function handleSubmit() {
//     const payload = {
//       roleName,
//       selectedSections,
//     };
//     console.log("Payload:", payload);
//     // Add API call or any submission logic here
//   }

//   return (
//     <div className="w-full flex flex-col gap-10">
//       {/* Bread crumb  */}
//       <span className="text-sm font-normal text-[#707784]">
//         Manage Employee {">"} Create Role
//       </span>

//       {/* Role creation with Route Selection  */}
//       <div className="w-full flex flex-col gap-10">
//         <input
//           type="text"
//           name="roleName"
//           value={roleName}
//           placeholder="Role Name"
//           className="w-1/2 h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
//           onChange={(e) => setRoleName(e.target.value)}
//         />

//         {/* selection  */}
//         <div>
//           <div className="flex items-center gap-2">
//             <span className="font-medium text-sm leading-6 text-[#181C22]">
//               Access to :
//             </span>
//             <input
//               type="checkbox"
//               id="selectAll"
//               checked={selectAll}
//               className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
//               onChange={handleSelectAll}
//             />
//             <label
//               htmlFor="selectAll"
//               className="font-normal text-sm text-[#404753] cursor-pointer"
//             >
//               Select All
//             </label>
//           </div>

//           <div className="flex justify-end items-center">
//             <span className="font-normal text-xs text-[#404753]">
//               Selected {"(5/7)"}
//             </span>
//           </div>

//           <div className="w-full p-6 bg-[#F8F9FF] rounded-lg border-[1px] border-[#707784]">
//             {/* grid  */}
//             <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
//               {sections.map((section, index) => (
//                 <div
//                   className="flex justify-start items-center gap-2"
//                   key={index}
//                 >
//                   <input
//                     type="checkbox"
//                     id={section.value}
//                     name={section.value}
//                     value={section.value}
//                     checked={selectedSections.includes(section.value)}
//                     onChange={() => handleSectionChange(section.value)}
//                     className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
//                   />
//                   <label
//                     htmlFor={section.value}
//                     className="font-normal text-sm text-[#404753] cursor-pointer"
//                   >
//                     {section.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//             {/* end of grid*/}
//           </div>

//           {/* submit button */}
//           <button
//             className="w-[428px] h-14 mt-20 p-4 font-normal text-sm text-white bg-[#782A99] rounded-lg"
//             onClick={handleSubmit}
//           >
//             SUBMIT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateRole;

"use client";
import React, { useState } from "react";
import sections from "./sections.json";
import axios from "axios";

const routeMapping = {
  addSector: ["/admin-dashboard/add-sector"],
  addDepartment: ["/admin-dashboard/add-department"],
  addAct: [],
  addDepartmentsToSector: [],
  addActsToDepartment: [],
  createRole: ["/admin-dashboard/roles", "/admin-dashboard/roles/create-role"],
  createEmployee: [
    "/admin-dashboard/employees",
    "/admin-dashboard/roles/create-employee",
  ],
};

function CreateRole() {
  const [roleName, setRoleName] = useState("");
  const [selectedSections, setSelectedSections] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [allowedRoutes, setAllowedRoutes] = useState([]);

  const [errorRoleName, setErrorRoleName] = useState(false);
  const [errorSections, setErrorSections] = useState(false);

  const getToken = () => {
    return localStorage.getItem("token");
  };


  //Updating allowed Routes
  function updateRoutes(sections) {
    const newRoutes = sections.flatMap(
      (section) => routeMapping[section] || []
    );
    setAllowedRoutes(newRoutes);
  }

  function handleSelectAll() {
    if (selectAll) {
      setSelectedSections([]); // Deselect all
      setAllowedRoutes([]); // Clear routes
    } else {
      const allSections = sections.map((section) => section.value);
      setSelectedSections(allSections); // Select all sections
      updateRoutes(allSections); // Update routes with all sections
    }
    setSelectAll(!selectAll); // Toggle select all state
  }

  function handleSectionChange(value) {
    let updatedSections;

    if (selectedSections.includes(value)) {
      updatedSections = selectedSections.filter((section) => section !== value);

      if (updatedSections.length !== sections.length) {
        setSelectAll(false); // Uncheck "Select All" if not all are selected
      }
    } else {
      updatedSections = [...selectedSections, value];

      if (updatedSections.length === sections.length) {
        setSelectAll(true); // Check "Select All" if all are selected
      }
    }
    setSelectedSections(updatedSections); 
    updateRoutes(updatedSections); //update allowed routes
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!roleName || selectedSections.length < 1) {
      if (!roleName) {
        alert("Please enter a role name");
        setErrorRoleName(true);
        setErrorSections(false);
      } else if (selectedSections.length < 1) {
        alert("Please enter atleast one section");
        setErrorSections(true);
        setErrorRoleName(false);
      }
    } else {
      const payload = {
        roleName,
        selectedSections,
        allowedRoutes,
      };
      console.log("Payload:", payload);
      // Add API call or any submission logic here
      try {
        const token = getToken()
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/createRole`,
          {
            role_name: roleName,
            access: selectedSections,
            allowed_routes: allowedRoutes,
          },{
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);

        setTimeout(() => {
          alert(response.data.message);
          setRoleName("");
          setSelectedSections([]);

          setErrorRoleName(false);
          setSelectAll(false);
          setErrorSections(false);
          // setIsBtnDisabled(false);
          // setDepartmentTableRenderToggle((prevValue) => !prevValue);
        }, 1000);
      } catch (error) {
        // setIsInputEmpty(false);
        // setIsBtnDisabled(false);

        console.log(error);
      }
    }
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Bread crumb */}
      <span className="text-sm font-normal text-[#707784]">
        Manage Employee {">"} Create Role
      </span>

      {/* Role creation with Route Selection */}
      <div className="w-full flex flex-col gap-10">
        <input
          type="text"
          className={`w-1/2 h-12 px-4 py-3 font-normal text-sm text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] ${
            errorRoleName ? "border-red-500 border-2" : ""
          }`}
          name="roleName"
          value={roleName}
          placeholder="Role Name"
          onChange={(e) => setRoleName(e.target.value)}
        />

        {/* Selection */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm leading-6 text-[#181C22]">
              Access to :
            </span>
            <input
              type="checkbox"
              id="selectAll"
              checked={selectAll}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
              onChange={handleSelectAll}
            />
            <label
              htmlFor="selectAll"
              className="font-normal text-sm text-[#404753] cursor-pointer"
            >
              Select All
            </label>
          </div>

          <div className="flex justify-end items-center">
            <span className="font-normal text-xs text-[#404753]">
              Selected ({selectedSections.length}/{sections.length})
            </span>
          </div>

          <div
            className={`w-full p-6 bg-[#F8F9FF] rounded-lg border-[1px] border-[#707784] ${
              errorSections ? "border-red-500 border-2" : ""
            }`}
          >
            {/* Grid */}
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {sections.map((section, index) => (
                <div
                  className="flex justify-start items-center gap-2"
                  key={index}
                >
                  <input
                    type="checkbox"
                    id={section.value}
                    name={section.value}
                    value={section.value}
                    checked={selectedSections.includes(section.value)}
                    onChange={() => handleSectionChange(section.value)}
                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-[1px] ring-2 ring-[#782A99] focus:ring-2 focus:ring-[#782A99] checked:appearance-auto checked:bg-[#782A99] accent-[#782A99]"
                  />
                  <label
                    htmlFor={section.value}
                    className="font-normal text-sm text-[#404753] cursor-pointer"
                  >
                    {section.label}
                  </label>
                </div>
              ))}
            </div>
            {/* End of Grid */}
          </div>

          {/* Submit button */}
          <button
            className="w-[428px] h-14 mt-20 p-4 font-normal text-sm text-white bg-[#782A99] rounded-lg"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRole;
