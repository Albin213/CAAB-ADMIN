// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function QuestionnaireTable({ renderQuestionnaireTable, setRenderQuestionnaireTable }) {
//   const [questionsList, setQuestionsList] = useState([]);

//   // Fetch Questions List
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/listQuestions`
//         );
//         console.log(response.data);

//         // Assuming the API response contains an array of questions
//         setQuestionsList(response.data.questions || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [renderQuestionnaireTable]);

//   return (
//     <table className="w-full">
//       <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//         <tr>
//           <th className="px-4 py-2 text-left">Section</th>
//           <th className="px-4 py-2 text-left">Questions</th>
//           <th className="px-4 py-2 text-left">Gravity</th>
//           {/* <th className="px-4 py-2 text-left">Actions</th> */}
//         </tr>
//       </thead>
//       <tbody className="text-sm font-normal text-[#181C22]">
//         {questionsList.length > 0 ? (
//           questionsList.map((item, index) => (
//             <tr
//               key={index}
//               className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
//             >
//               <td className="px-4 py-2">{item.section}</td>
//               <td className="px-4 py-2">{item.questions}</td>
//               <td className="px-4 py-2 capitalize">{item.gravity}</td>
//               {/* <td className="px-4 py-2 flex gap-4 items-center">
       
//                 <button
//                   className="text-[#005193] font-semibold"
//                   onClick={() => console.log("Edit action for ID:", item.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-[#BA1A1A] font-semibold"
//                   onClick={() => console.log("Delete action for ID:", item.id)}
//                 >
//                   Delete
//                 </button>
//               </td> */}
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="4" className="text-center py-4">
//               No questions available.
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default QuestionnaireTable;




"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function QuestionnaireTable({ renderQuestionnaireTable, setRenderQuestionnaireTable }) {
  const [questionsList, setQuestionsList] = useState([]);

  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Fetch Questions List
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listQuestions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);

        // Assuming the API response contains an array of questions
        setQuestionsList(response.data.questions || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [renderQuestionnaireTable]);

  // Handle Delete Question
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this question?");
    if (!confirmDelete) return;

    try {
      const token = getToken();

      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/removeQuestions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Question deleted successfully!");

      // Refresh the questions list
      setRenderQuestionnaireTable((prev) => !prev);
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Failed to delete the question. Please try again.");
    }
  };

  return (
    <table className="w-full">
      <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
        <tr>
          <th className="px-4 py-2 text-left">Section</th>
          <th className="px-4 py-2 text-left">Questions</th>
          <th className="px-4 py-2 text-left">Gravity</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal text-[#181C22]">
        {questionsList.length > 0 ? (
          questionsList.map((item, index) => (
            <tr
              key={index}
              className="h-10 bg-white border-[#C0C7D5] border-b-[1px]"
            >
              <td className="px-4 py-2">{item.section}</td>
              <td className="px-4 py-2">{item.questions}</td>
              <td className="px-4 py-2 capitalize">{item.gravity}</td>
              <td className="px-4 py-2 flex gap-4 items-center">
                <button
                  className="text-[#BA1A1A] font-semibold"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-4">
              No questions available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default QuestionnaireTable;
