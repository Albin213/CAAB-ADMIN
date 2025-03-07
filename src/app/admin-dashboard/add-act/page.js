"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import AddActTable from "@/app/components/add-act/AddActTable";

function page() {
  const [departments, setDepartments] = useState([]);
   const [tableRenderToggle, setTableRenderToggle] = useState(false);
   // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };
    const [newLaw, setNewLaw] = useState({
        departmentName: "",
        law: "",
        actRule: "",
        section: "",
        penaltyAmount: "",
        dueDate: "",
        alertDate: "",

    });
    console.log(newLaw);
      const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    

    function handleOnChange(event) {
        const { name, value } = event.target;
        setNewLaw((prevValue) => ({
          ...prevValue,
          [name]: value,
        }));
      }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/departments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
        setDepartments(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

 

  //Add Sector API
  async function handleAddAct(event) {
    event.preventDefault();
    setIsBtnDisabled(true);

    const {
        departmentName,
        law,
        actRule,
        section,
        penaltyAmount,
        dueDate,
        alertDate
    } = newLaw;

    if (
    
      !departmentName ||
      !law ||
      !actRule ||
      !section ||
      !penaltyAmount ||
      !dueDate ||
      !alertDate
    ) {
      alert("Enter the required information");

      setIsBtnDisabled(false);
    } else {
      try {
        // Add Sector API call
        const token = getToken();

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/addLaw`,
          {
            department_name : departmentName,
            law: law,
            act_rule : actRule,
            section : section,
            penalty_amount : penaltyAmount,
            due_date: dueDate,
            alert_date: alertDate,
          },{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        alert(response.data.message);
        setTimeout(() => {
          setNewLaw({
            departmentName: "",
        law: "",
        actRule: "",
        section: "",
        penaltyAmount: "",
        dueDate: "",
        sectionNumber: "",
          });
          
          setIsBtnDisabled(false);
          setTableRenderToggle((prevValue) => !prevValue);
         
        }, 1000);
      } catch (error) {
       
        setIsBtnDisabled(false);
      }
    }
  }


  return (
    <div className="w-full flex flex-col gap-10">
      {/* Employee Category Form  */}
      <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
      <div className="flex flex-col gap-3 xl:gap-1">
      <span className="text-sm font-semibold">Department Name <span className="text-red-500">*</span></span>
        <select
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] "
          name="departmentName"
            value={newLaw.departmentName}
            onChange={handleOnChange}
        >
          <option value="" selected disabled>
            Department Name
          </option>
        {
            departments.map(department => <option key={department} value={department}>
                {department}
            </option>)
        }
       
        </select>
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Law <span className="text-red-500">*</span></span>
        <input
          type="text"
          placeholder="Law"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="law"
            value={newLaw.law}
            onChange={handleOnChange}
        />
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Act / Rule <span className="text-red-500">*</span></span>
        <textarea
          className="w-[150px] lg:w-[180px] xl:w-[500px] px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          placeholder="Act / Rule"
          name="actRule"
            value={newLaw.actRule}
            onChange={handleOnChange}
          rows="8"
        ></textarea>
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Section <span className="text-red-500">*</span></span>
        <input
          type="text"
          placeholder="Section"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="section"

            value={newLaw.section}
            onChange={handleOnChange}
        />
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Penalty Amount<span className="text-red-500">*</span></span>
        <input
          type="number"
          placeholder="Penalty Amount"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="penaltyAmount"
            value={newLaw.penaltyAmount}
            onChange={handleOnChange}
        />
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Due Date<span className="text-red-500">*</span></span>
        <input
          type="text"
          placeholder="Due Date"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="dueDate"
            value={newLaw.dueDate}
            onChange={handleOnChange}
        />
        </div>
        <div className="flex flex-col gap-3 xl:gap-1">
        <span className="text-sm font-semibold">Alert Date<span className="text-red-500">*</span></span>
        <input
          type="text"
          placeholder="Alert Date"
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="alertDate"
            value={newLaw.alertDate}
            onChange={handleOnChange}
        />
        </div>

        <button
            className={`w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg ${
              isBtnDisabled && "cursor-not-allowed"
            }`}
            onClick={handleAddAct}
            disabled={isBtnDisabled}
        >
          ADD ACT
        </button>
      </div>

      {/* Category Table  */}
      <div>
            <AddActTable tableRenderToggle={tableRenderToggle} />
          </div>
    </div>
  );
}



export default page;
