// "use client";
// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";

// function page() {
//   const [departments, setDepartments] = useState([]);
//     const [employeeCategory, setEmployeeCategory] = useState({
//         section: "",
//         question: "",
//         gravity: "",
       
//     });
//     console.log(employeeCategory);
    

//     function handleOnChange(event) {
//         const { name, value } = event.target;
//         setEmployeeCategory((prevValue) => ({
//           ...prevValue,
//           [name]: value,
//         }));
//       }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/departments`
//         );

//         console.log(response);
//         setDepartments(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // toast.error("Error fetching data.");\
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div className="w-full flex flex-col gap-10">
//       {/* Employee Category Form  */}
//       <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
//         <select
//           className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] "
//           name="section"
//             value={employeeCategory.section}
//             onChange={handleOnChange}
//         >
//           <option value="" selected disabled>
//             Section
//           </option>
//           <option value="total_employees">Total Employees</option>
//           <option value="no_female">Female Employee</option>
//         </select>

       

//         <textarea
//           className="w-[150px] lg:w-[180px] xl:w-[500px] px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
//           placeholder="Type your question"
//           name="question"
//             value={employeeCategory.question}
//             onChange={handleOnChange}
//           rows="8"
//         ></textarea>


// <select
//           className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753] "
//           name="gravity"
//             value={employeeCategory.gravity}
//             onChange={handleOnChange}
//         >
//           <option value="" selected disabled>
//             Gravity
//           </option>
//           <option value="low">Low</option>
//           <option value="medium"> Medium</option>
//           <option value="high">Heigh </option>

//         </select>

      

//         <button
//           //   className={`w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg ${
//           //     isBtnDisabled && "cursor-not-allowed"
//           //   }`}
//           //   onClick={handleAddEmployeeCategory}
//           //   disabled={isBtnDisabled}
//           className="w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg"
//         >
//           ADD DEPARTMENT
//         </button>
//       </div>

//       {/* Category Table  */}
//       {/* <div>
//             <EmployeeCategoryTable tableRenderToggle={tableRenderToggle} />
//           </div> */}
//     </div>
//   );
// }

// export default page;


// "use client";
// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";
// import QuestionnaireTable from "@/app/components/add-qusationnaire/QuestionnaireTable";

// function Page() {
//   const [sections, setSections] = useState([]);
//   const [employeeCategory, setEmployeeCategory] = useState({
//     section: "",
//     questionsList: [
//       {
//         questions: "",
//         gravity: "",
//       },
//     ],
//   });

//   // Handle section change
//   const handleSectionChange = (event) => {
//     const { name, value } = event.target;
//     setEmployeeCategory((prevValue) => ({
//       ...prevValue,
//       [name]: value,
//     }));
//   };

//   // Handle question list updates
//   const handleQuestionListChange = (index, field, value) => {
//     const updatedQuestionsList = [...employeeCategory.questionsList];
//     updatedQuestionsList[index][field] = value;
//     setEmployeeCategory((prevValue) => ({
//       ...prevValue,
//       questionsList: updatedQuestionsList,
//     }));
//   };

//   // Add a new question to the list
//   const addQuestion = () => {
//     setEmployeeCategory((prevValue) => ({
//       ...prevValue,
//       questionsList: [
//         ...prevValue.questionsList,
//         {
//           questions: "",
//           gravity: "",
//         },
//       ],
//     }));
//   };

//   // Remove a question from the list
//   const removeQuestion = (index) => {
//     setEmployeeCategory((prevValue) => ({
//       ...prevValue,
//       questionsList: prevValue.questionsList.filter((_, i) => i !== index),
//     }));
//   };

//   // Submit form
//   const handleSubmit = async () => {
//     const { section, questionsList } = employeeCategory;

//     if (!section) {
//       alert("Section is required.");
//       return;
//     }

//     for (const { questions, gravity } of questionsList) {
//       if (!questions || !gravity) {
//         alert("Each question must have a valid question and gravity.");
//         return;
//       }
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/addQuestions`,
//         {
//           section,
//           questionsList,
//         }
//       );
//       alert("Questions added successfully.");
//       setEmployeeCategory({
//         section: "",
//         questionsList: [
//           {
//             questions: "",
//             gravity: "",
//           },
//         ],
//       });
//     } catch (error) {
//       console.error("Error adding questions:", error);
//       alert("Failed to add questions. Please try again.");
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listSections`
//         );
//         console.log(response);
        
//         setSections(response.data);
//       } catch (error) {
//         console.error("Error fetching departments:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full flex flex-col gap-10">
//       <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
//         {/* Section Selector */}
//         <select
//           className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
//           name="section"
//           value={employeeCategory.section}
//           onChange={handleSectionChange}
//         >
//           <option value="" disabled>
//             Select Section
//           </option>
//           {sections.map((section) => (
//             <option key={section} value={section}>
//               {section}
//             </option>
//           ))}
//         </select>

//         {/* Questions and Gravity Inputs */}
//         {employeeCategory.questionsList.map((q, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-2 border-b-[1px] pb-4 border-[#C2C6D4]"
//           >
//             <textarea
//               className="w-[150px] lg:w-[180px] xl:w-[500px] px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
//               placeholder="Type your question"
//               value={q.questions}
//               onChange={(e) =>
//                 handleQuestionListChange(index, "questions", e.target.value)
//               }
//               rows="4"
//             ></textarea>

//             <select
//               className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
//               value={q.gravity}
//               onChange={(e) =>
//                 handleQuestionListChange(index, "gravity", e.target.value)
//               }
//             >
//               <option value="" disabled>
//                 Select Gravity
//               </option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>

//             {/* Remove Button */}
//             <button
//               className="w-28 h-8 text-xs text-white bg-red-500 rounded-lg"
//               onClick={() => removeQuestion(index)}
//             >
//               Remove Question
//             </button>

            
//           </div>
//         ))}

//         {/* Add Question Button */}
//         <button
//           className="w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-green-600 rounded-lg"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>

//         {/* Submit Button */}
//         <button
//           className="w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>

//       <QuestionnaireTable/>
//     </div>
//   );
// }

// export default Page;




"use client";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import QuestionnaireTable from "@/app/components/add-qusationnaire/QuestionnaireTable";

function Page() {
  const [sections, setSections] = useState([]);
  const [employeeCategory, setEmployeeCategory] = useState({
    section: "",
    questionsList: [
      {
        questions: "",
        gravity: "",
      },
    ],
  });

  const getToken = () => {
    return localStorage.getItem("token");
  };
  const [renderQuestionnaireTable, setRenderQuestionnaireTable] = useState(false);

  // Handle section change
  const handleSectionChange = (event) => {
    const { name, value } = event.target;
    setEmployeeCategory((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Handle question list updates
  const handleQuestionListChange = (index, field, value) => {
    const updatedQuestionsList = [...employeeCategory.questionsList];
    updatedQuestionsList[index][field] = value;
    setEmployeeCategory((prevValue) => ({
      ...prevValue,
      questionsList: updatedQuestionsList,
    }));
  };

  // Add a new question to the list
  const addQuestion = () => {
    setEmployeeCategory((prevValue) => ({
      ...prevValue,
      questionsList: [
        ...prevValue.questionsList,
        {
          questions: "",
          gravity: "",
        },
      ],
    }));
  };

  // Remove a question from the list
  const removeQuestion = (index) => {
    setEmployeeCategory((prevValue) => ({
      ...prevValue,
      questionsList: prevValue.questionsList.filter((_, i) => i !== index),
    }));
  };

  // Submit form
  const handleSubmit = async () => {
    const { section, questionsList } = employeeCategory;

    if (!section) {
      alert("Section is required.");
      return;
    }

    for (const { questions, gravity } of questionsList) {
      if (!questions || !gravity) {
        alert("Each question must have a valid question and gravity.");
        return;
      }
    }

    try {
      const token = getToken();
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/addQuestions`,
        {
          section,
          questionsList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Questions added successfully.");
      setEmployeeCategory({
        section: "",
        questionsList: [
          {
            questions: "",
            gravity: "",
          },
        ],
      });
      setRenderQuestionnaireTable(prevValue => !prevValue);
    } catch (error) {
      console.error("Error adding questions:", error);
      alert("Failed to add questions. Please try again.");
    }
  };

  useEffect(() => {
    const token = getToken();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listSections`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched sections:", response.data);
        setSections(response.data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b-[1px] border-[#C2C6D4]">
        {/* Section Selector */}
        <select
          className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
          name="section"
          value={employeeCategory.section}
          onChange={handleSectionChange}
        >
          <option value="" disabled>
            Select Section
          </option>
          {sections.map((sectionObj, index) => (
            <option key={index} value={sectionObj.section}>
              {sectionObj.section}
            </option>
          ))}
        </select>

        {/* Questions and Gravity Inputs */}
        {employeeCategory.questionsList.map((q, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-b-[1px] pb-4 border-[#C2C6D4]"
          >
            <textarea
              className="w-[150px] lg:w-[180px] xl:w-[500px] px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
              placeholder="Type your question"
              value={q.questions}
              onChange={(e) =>
                handleQuestionListChange(index, "questions", e.target.value)
              }
              rows="4"
            ></textarea>

            <select
              className="w-[150px] lg:w-[180px] xl:w-[500px] h-10 px-4 py-2 text-[11px] lg:text-sm font-normal text-[#404753] bg-white rounded-lg outline-none border-[1px] border-[#707784] focus:border-[#782A99] focus:border-2 placeholder:text-[#404753]"
              value={q.gravity}
              onChange={(e) =>
                handleQuestionListChange(index, "gravity", e.target.value)
              }
            >
              <option value="" disabled>
                Select Gravity
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            {/* Remove Button */}
            <button
              className="w-28 h-8 text-xs text-white bg-red-500 rounded-lg"
              onClick={() => removeQuestion(index)}
            >
              Remove Question
            </button>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          className="w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-green-600 rounded-lg"
          onClick={addQuestion}
        >
          Add Question
        </button>

        {/* Submit Button */}
        <button
          className="w-44 h-10 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#782A99] rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <QuestionnaireTable renderQuestionnaireTable={renderQuestionnaireTable}  setRenderQuestionnaireTable={setRenderQuestionnaireTable} />
    </div>
  );
}

export default Page;
