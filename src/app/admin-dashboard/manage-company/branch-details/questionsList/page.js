// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Page() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const branchId = "br1"; // Hardcoded branchId

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchEvaluationQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           { params: { branch_id: branchId } }
//         );
//         console.log("Evaluation Questions Response:", response.data);

//         setEvaluationQuestions(response.data.questions);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//         alert("Failed to fetch evaluation questions.");
//       }
//     };

//     fetchEvaluationQuestions();
//   }, [branchId]);

//   // Function to handle button clicks and store responses
//   const handleResponse = (questionId, responseText) => {
//     setResponses((prev) => ({
//       ...prev,
//       [questionId]: responseText,
//     }));
//   };

//   // Function to submit responses
//   const handleSubmit = async () => {
//     const inputdata = evaluationQuestions.map((question) => ({
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ",
//     }));

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationResponse`,
//         { inputdata }
//       );
//       console.log("Submission Response:", response.data);
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <p className="text-[#707784] text-sm mb-3">
//         Manage Company {">"} Company Details {">"} Evaluation Questions
//       </p>

//       <h1 className="text-[#181C22] text-lg font-semibold mb-4">
//         Evaluation Questions for Branch {branchId}
//       </h1>

//       {evaluationQuestions.length > 0 ? (
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 py-6 space-y-4">
//           {evaluationQuestions.map((question) => (
//             <div
//               key={question.id}
//               className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
//             >
//               <div className="flex-1">
//                 <p className="text-[#181C22] font-medium">
//                   <span className="font-semibold">Section:</span> {question.section}
//                 </p>
//                 <p className="text-red-500 font-semibold capitalize">
//                   <span className="font-semibold">Gravity:</span> {question.gravity}
//                 </p>
//                 <p className="text-gray-700 mt-1">{question.questions}</p>
//               </div>

//               <div className="flex gap-2">
//                 {responses[question.id] ? (
//                   // Display selected response if already chosen
//                   <p className="font-semibold text-[#181C22] bg-gray-200 px-4 py-2 rounded-md">
//                     {responses[question.id]}
//                   </p>
//                 ) : (
//                   // Show buttons if no response chosen
//                   <>
//                     <button
//                       onClick={() => handleResponse(question.id, "Yes")}
//                       className="bg-[#782A99] text-white px-4 py-2 rounded-md hover:bg-[#5e2178] transition-all"
//                     >
//                       Yes
//                     </button>
//                     <button
//                       onClick={() => handleResponse(question.id, "No")}
//                       className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c5303c] transition-all"
//                     >
//                       No
//                     </button>
//                     <button
//                       onClick={() => handleResponse(question.id, "Not Applicable")}
//                       className="bg-[#6c757d] text-white px-4 py-2 rounded-md hover:bg-[#545b62] transition-all"
//                     >
//                       Not Applicable
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* Submit Button */}
//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               Submit Responses
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}
//     </div>
//   );
// }

// export default Page;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// function Page() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const searchParams = useSearchParams();
//   const branchId = searchParams.get("id"); // Retrieve branch_id from URL

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchEvaluationQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           { params: { branch_id: branchId } }
//         );
//         setEvaluationQuestions(response.data.questions);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//         alert("Failed to fetch evaluation questions.");
//       }
//     };

//     fetchEvaluationQuestions();
//   }, [branchId]);

//   const handleResponse = (questionId, responseText) => {
//     setResponses((prev) => ({
//       ...prev,
//       [questionId]: responseText,
//     }));
//   };

//   const handleSubmit = async () => {
//     const inputdata = evaluationQuestions.map((question) => ({
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ",
//     }));

//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationResponse`,
//         { inputdata }
//       );
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <p className="text-[#707784] text-sm mb-3">
//         Manage Company {">"} Company Details {">"} Evaluation Questions
//       </p>

//       <h1 className="text-[#181C22] text-lg font-semibold mb-4">
//         Evaluation Questions for Branch {branchId}
//       </h1>

//       {evaluationQuestions.length > 0 ? (
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 py-6 space-y-4">
//           {evaluationQuestions.map((question) => (
//             <div
//               key={question.id}
//               className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
//             >
//               <div className="flex-1">
//                 <p className="text-[#181C22] font-medium">
//                   <span className="font-semibold">Section:</span> {question.section}
//                 </p>
//                 <p className="text-red-500 font-semibold capitalize">
//                   <span className="font-semibold">Gravity:</span> {question.gravity}
//                 </p>
//                 <p className="text-gray-700 mt-1">{question.questions}</p>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleResponse(question.id, "Yes")}
//                   className="bg-[#782A99] text-white px-4 py-2 rounded-md hover:bg-[#5e2178] transition-all"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => handleResponse(question.id, "No")}
//                   className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c5303c] transition-all"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={() => handleResponse(question.id, "Not Applicable")}
//                   className="bg-[#6c757d] text-white px-4 py-2 rounded-md hover:bg-[#545b62] transition-all"
//                 >
//                   Not Applicable
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               Submit Responses
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}
//     </div>
//   );
// }

// export default Page;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function Page() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id"); // Retrieve branch_id from URL

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchEvaluationQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           { params: { branch_id: branchId } }
//         );
//         setEvaluationQuestions(response.data.questions);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//         alert("Failed to fetch evaluation questions.");
//       }
//     };

//     fetchEvaluationQuestions();
//   }, [branchId]);

//   const handleResponse = (questionId, responseText) => {
//     setResponses((prev) => ({
//       ...prev,
//       [questionId]: responseText,
//     }));
//   };

//   const handleSubmit = async () => {
//     const inputdata = evaluationQuestions.map((question) => ({
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ",
//     }));

//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationResponse`,
//         { inputdata }
//       );
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses.");
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Back to Branch Details Button */}
//       <button
//         onClick={() => router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`)}
//         className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all mb-4"
//       >
//         Back to Branch Details
//       </button>

//       <p className="text-[#707784] text-sm mb-3">
//         Manage Company {">"} Company Details {">"} Evaluation Questions
//       </p>

//       <h1 className="text-[#181C22] text-lg font-semibold mb-4">
//         Evaluation Questions for Branch {branchId}
//       </h1>

//       {evaluationQuestions.length > 0 ? (
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 py-6 space-y-4">
//           {evaluationQuestions.map((question) => (
//             <div
//               key={question.id}
//               className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
//             >
//               <div className="flex-1">
//                 <p className="text-[#181C22] font-medium">
//                   <span className="font-semibold">Section:</span> {question.section}
//                 </p>
//                 <p className="text-red-500 font-semibold capitalize">
//                   <span className="font-semibold">Gravity:</span> {question.gravity}
//                 </p>
//                 <p className="text-gray-700 mt-1">{question.questions}</p>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleResponse(question.id, "Yes")}
//                   className="bg-[#782A99] text-white px-4 py-2 rounded-md hover:bg-[#5e2178] transition-all"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => handleResponse(question.id, "No")}
//                   className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c5303c] transition-all"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={() => handleResponse(question.id, "Not Applicable")}
//                   className="bg-[#6c757d] text-white px-4 py-2 rounded-md hover:bg-[#545b62] transition-all"
//                 >
//                   Not Applicable
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               Submit Responses
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}
//     </div>
//   );
// }

// export default Page;


"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

function EvaluationQuestionsComponent() {
  const [evaluationQuestions, setEvaluationQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const searchParams = useSearchParams();
  const router = useRouter();
  const branchId = searchParams.get("id"); // Retrieve branch_id from URL

  useEffect(() => {
    if (!branchId) return;

    const fetchEvaluationQuestions = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
          { params: { branch_id: branchId } }
        );
        setEvaluationQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching evaluation questions:", error);
        alert("Failed to fetch evaluation questions.");
      }
    };

    fetchEvaluationQuestions();
  }, [branchId]);

  const handleResponse = (questionId, responseText) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: responseText,
    }));
  };

  const handleSubmit = async () => {
    const inputdata = evaluationQuestions.map((question) => ({
      branch_id: branchId,
      section: question.section,
      questions: question.questions,
      gravity: question.gravity,
      response: responses[question.id] || " ",
    }));

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationResponse`,
        { inputdata }
      );
      alert("Responses submitted successfully!");
    } catch (error) {
      console.error("Error submitting responses:", error);
      alert("Failed to submit responses.");
    }
  };

  return (
    <div className="p-6">
      {/* Back to Branch Details Button */}
      <button
        onClick={() =>
          router.push(
            `/admin-dashboard/manage-company/branch-details?id=${branchId}`
          )
        }
        className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all mb-4"
      >
        Back to Branch Details
      </button>

      <p className="text-[#707784] text-sm mb-3">
        Manage Company {">"} Company Details {">"} Evaluation Questions
      </p>

      <h1 className="text-[#181C22] text-lg font-semibold mb-4">
        Evaluation Questions for Branch {branchId}
      </h1>

      {evaluationQuestions.length > 0 ? (
        <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 py-6 space-y-4">
          {evaluationQuestions.map((question) => (
            <div
              key={question.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <div className="flex-1">
                <p className="text-[#181C22] font-medium">
                  <span className="font-semibold">Section:</span>{" "}
                  {question.section}
                </p>
                <p className="text-red-500 font-semibold capitalize">
                  <span className="font-semibold">Gravity:</span>{" "}
                  {question.gravity}
                </p>
                <p className="text-gray-700 mt-1">{question.questions}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleResponse(question.id, "Yes")}
                  className="bg-[#782A99] text-white px-4 py-2 rounded-md hover:bg-[#5e2178] transition-all"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleResponse(question.id, "No")}
                  className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c5303c] transition-all"
                >
                  No
                </button>
                <button
                  onClick={() => handleResponse(question.id, "Not Applicable")}
                  className="bg-[#6c757d] text-white px-4 py-2 rounded-md hover:bg-[#545b62] transition-all"
                >
                  Not Applicable
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
            >
              Submit Responses
            </button>
          </div>
        </div>
      ) : (
        <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
      )}
    </div>
  );
}

// 🌟 Wrap the component in a Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EvaluationQuestionsComponent />
    </Suspense>
  );
}

