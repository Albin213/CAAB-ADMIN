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


// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function EvaluationQuestionsComponent() {
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
//         onClick={() =>
//           router.push(
//             `/admin-dashboard/manage-company/branch-details?id=${branchId}`
//           )
//         }
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
//                   <span className="font-semibold">Section:</span>{" "}
//                   {question.section}
//                 </p>
//                 <p className="text-red-500 font-semibold capitalize">
//                   <span className="font-semibold">Gravity:</span>{" "}
//                   {question.gravity}
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

// // 🌟 Wrap the component in a Suspense boundary
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <EvaluationQuestionsComponent />
//     </Suspense>
//   );
// }








// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function EvaluationQuestionsComponent() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id");



//   useEffect(() => {
//     if (!branchId) return;

//     const fetchEvaluationQuestions = async () => {
//       const token = localStorage.getItem("token"); // Retrieve token

//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           {
//             params: { branch_id: branchId },
//             headers: { Authorization: `Bearer ${token}` }, // ✅ Add authentication
//           }
//         );
//         setEvaluationQuestions(response.data.questions || []);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//         alert("Failed to fetch evaluation questions. Please try again.");
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
//     if (!branchId || evaluationQuestions.length === 0) return;

//     const token = localStorage.getItem("token");

//     const inputdata = evaluationQuestions.map((question) => ({
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ", // Ensure empty responses are handled
//     }));

//     try {
//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/user/evaluationResponse`,
//         { inputdata },
//         { headers: { Authorization: `Bearer ${token}` } } // ✅ Add authentication
//       );
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Back Button */}
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
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 space-y-4">
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
//                 {["Yes", "No", "Not Applicable"].map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleResponse(question.id, option)}
//                     className={`px-4 py-2 rounded-md transition-all ${
//                       responses[question.id] === option
//                         ? "bg-[#782A99] text-white"
//                         : "bg-gray-300 text-black hover:bg-gray-400"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
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

// // 🌟 Wrap the component in a Suspense boundary
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <EvaluationQuestionsComponent />
//     </Suspense>
//   );
// }




// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function EvaluationQuestionsComponent() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id");

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchEvaluationQuestions = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           {
//             params: { branch_id: branchId },
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setEvaluationQuestions(response.data.questions || []);

//         // If responses already exist (i.e., editing), populate them
//         if (response.data.responses) {
//           const existingResponses = {};
//           response.data.responses.forEach((resp) => {
//             existingResponses[resp.id] = resp.response;
//           });
//           setResponses(existingResponses);
//           setIsSubmitted(true); // Assume it's submitted if responses exist
//         }
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//         alert("Failed to fetch evaluation questions. Please try again.");
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
//     if (!branchId || evaluationQuestions.length === 0) return;
//     const token = localStorage.getItem("token");

//     const inputdata = evaluationQuestions.map((question) => ({
//       id: question.id,
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ", // Default to empty string if no response
//     }));

//     try {
//       if (!isSubmitted) {
//         // First submission (POST)
//         await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/evaluationResponse`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses submitted successfully!");
//       } else {
//         // Edit submission (PUT)
//         await axios.put(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/editResponses/${branchId}`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses updated successfully!");
//       }

//       setIsSubmitted(true); // Mark as submitted so edit API is used next time
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Back Button */}
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
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 space-y-4">
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
//                 {["Yes", "No", "Not Applicable"].map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleResponse(question.id, option)}
//                     className={`px-4 py-2 rounded-md transition-all ${
//                       responses[question.id] === option
//                         ? "bg-[#782A99] text-white"
//                         : "bg-gray-300 text-black hover:bg-gray-400"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               {isSubmitted ? "Update Responses" : "Submit Responses"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}
//     </div>
//   );
// }

// // 🌟 Wrap the component in a Suspense boundary
// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <EvaluationQuestionsComponent />
//     </Suspense>
//   );
// }



// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function EvaluationQuestionsComponent() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [isEditMode, setIsEditMode] = useState(false);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id");

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchResponses = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/viewResponse/${branchId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         ); 
//         console.log(response);
        

//         if (response.data.response.length > 0) {
//           setIsEditMode(true); // ✅ Responses exist → Enable Edit Mode
//           setResponses(
//             response.data.response.reduce((acc, item) => {
//               acc[item.id] = item.response;
//               return acc;
//             }, {})
//           );
//           setEvaluationQuestions(response.data.response);
//         } else {
//           setIsEditMode(false);
//           fetchInitialQuestions();
//         }
//       } catch (error) {
//         console.error("Error fetching responses:", error);
//       }
//     };

//     const fetchInitialQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           {
//             params: { branch_id: branchId },
//             headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//           }
//         );
//         setEvaluationQuestions(response.data.questions || []);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//       }
//     };

//     fetchResponses();
//   }, [branchId]);

//   const handleResponse = (questionId, responseText) => {
//     setResponses((prev) => ({
//       ...prev,
//       [questionId]: responseText,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!branchId || evaluationQuestions.length === 0) return;

//     const token = localStorage.getItem("token");

//     const inputdata = evaluationQuestions.map((question) => ({
//       id: question.id, // ✅ Ensure ID is included
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ",
//     }));

//     try {
//       if (isEditMode) {
//         await axios.put(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/editResponses/${branchId}`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses updated successfully!");
//       } else {
//         await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/evaluationResponse`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses submitted successfully!");
//         setIsEditMode(true);
//       }
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`)}
//         className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all mb-4"
//       >
//         Back to Branch Details
//       </button>
//       documents dropdown

//       <h1 className="text-[#181C22] text-lg font-semibold mb-4">
//         {isEditMode ? "Edit Responses" : "Submit Responses"} for Branch {branchId}
//       </h1>

//       {evaluationQuestions.length > 0 ? (
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 space-y-4">
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
//                 {["Yes", "No", "Not Applicable"].map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleResponse(question.id, option)}
//                     className={`px-4 py-2 rounded-md transition-all ${
//                       responses[question.id] === option
//                         ? "bg-[#782A99] text-white"
//                         : "bg-gray-300 text-black hover:bg-gray-400"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               {isEditMode ? "Update Responses" : "Submit Responses"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <EvaluationQuestionsComponent />
//     </Suspense>
//   );
// }




// hgftdrtdrtdtrs

// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "axios";

// function EvaluationQuestionsComponent() {
//   const [evaluationQuestions, setEvaluationQuestions] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [documents, setDocuments] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const branchId = searchParams.get("id");

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchResponses = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/viewResponse/${branchId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (response.data.response.length > 0) {
//           setIsEditMode(true);
//           setResponses(
//             response.data.response.reduce((acc, item) => {
//               acc[item.id] = item.response;
//               return acc;
//             }, {})
//           );
//           setEvaluationQuestions(response.data.response);
//         } else {
//           setIsEditMode(false);
//           fetchInitialQuestions();
//         }
//       } catch (error) {
//         console.error("Error fetching responses:", error);
//       }
//     };

//     const fetchInitialQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
//           {
//             params: { branch_id: branchId },
//             headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//           }
//         );
//         setEvaluationQuestions(response.data.questions || []);
//       } catch (error) {
//         console.error("Error fetching evaluation questions:", error);
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/branchDocuments/${branchId}`,
//           { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//         );
//         console.log(response.data.data);
        
//         setDocuments(response.data.data);
//       } catch (error) {
//         console.error("Error fetching documents:", error);
//       }
//     };

//     fetchResponses();
//     fetchDocuments();
//   }, [branchId]);

//   const handleResponse = (questionId, responseText) => {
//     setResponses((prev) => ({ ...prev, [questionId]: responseText }));
//   };

//   const handleSubmit = async () => {
//     if (!branchId || evaluationQuestions.length === 0) return;

//     const token = localStorage.getItem("token");
//     const inputdata = evaluationQuestions.map((question) => ({
//       id: question.id,
//       branch_id: branchId,
//       section: question.section,
//       questions: question.questions,
//       gravity: question.gravity,
//       response: responses[question.id] || " ",
//     }));

//     try {
//       if (isEditMode) {
//         await axios.put(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/editResponses/${branchId}`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses updated successfully!");
//       } else {
//         await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/evaluationResponse`,
//           { inputdata },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Responses submitted successfully!");
//         setIsEditMode(true);
//       }
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center">
//         <button
//           onClick={() =>
//             router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`)
//           }
//           className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all mb-4"
//         >
//           Back to Branch Details
//         </button>

//         {/* Document Dropdown Button */}
//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             View Documents
//           </button>

//           {/* Document Dropdown List */}
//           {showDropdown && (
//             <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-56">
//               {documents.length > 0 ? (
//                 documents.map((doc) => (
//                   <div
//                     key={doc.id}
//                     onClick={() => {
//                       setSelectedDocument(doc);
//                       setIsPopupOpen(true);
//                       setShowDropdown(false);
//                     }}
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     {doc.name}
//                   </div>
//                 ))
//               ) : (
//                 <p className="p-2 text-gray-500">No documents found</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <h1 className="text-[#181C22] text-lg font-semibold mb-4">
//         {isEditMode ? "Edit Responses" : "Submit Responses"} for Branch {branchId}
//       </h1>

//       {evaluationQuestions.length > 0 ? (
//         <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 space-y-4">
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
//                 {["Yes", "No", "Not Applicable"].map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleResponse(question.id, option)}
//                     className={`px-4 py-2 rounded-md transition-all ${
//                       responses[question.id] === option
//                         ? "bg-[#782A99] text-white"
//                         : "bg-gray-300 text-black hover:bg-gray-400"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
//             >
//               {isEditMode ? "Update Responses" : "Submit Responses"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
//       )}

//       {/* Document Popup Modal */}
//       {isPopupOpen && selectedDocument && (
//         <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-xl font-semibold">{selectedDocument.name}</h2>
//             <p className="text-gray-700 mt-2">{selectedDocument.description}</p>
//             <button
//               onClick={() => setIsPopupOpen(false)}
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <EvaluationQuestionsComponent />
//     </Suspense>
//   );
// }

"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import DocumentDropDown from "@/app/components/grading/DocumentDropDown";


function EvaluationQuestionsComponent() {
  const [evaluationQuestions, setEvaluationQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const branchId = searchParams.get("id");

  useEffect(() => {
    if (!branchId) return;

    const fetchResponses = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/viewResponse/${branchId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.response.length > 0) {
          setIsEditMode(true);
          setResponses(
            response.data.response.reduce((acc, item) => {
              acc[item.id] = item.response;
              return acc;
            }, {})
          );
          setEvaluationQuestions(response.data.response);
        } else {
          setIsEditMode(false);
          fetchInitialQuestions();
        }
      } catch (error) {
        console.error("Error fetching responses:", error);
      }
    };

    const fetchInitialQuestions = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/evaluationQuestions`,
          {
            params: { branch_id: branchId },
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setEvaluationQuestions(response.data.questions || []);
      } catch (error) {
        console.error("Error fetching evaluation questions:", error);
      }
    };

    fetchResponses();
  }, [branchId]);

  const handleResponse = (questionId, responseText) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: responseText,
    }));
  };

  const handleSubmit = async () => {
    if (!branchId || evaluationQuestions.length === 0) return;

    const token = localStorage.getItem("token");

    const inputdata = evaluationQuestions.map((question) => ({
      id: question.id,
      branch_id: branchId,
      section: question.section,
      questions: question.questions,
      gravity: question.gravity,
      response: responses[question.id] || " ",
    }));

    try {
      if (isEditMode) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/user/editResponses/${branchId}`,
          { inputdata },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Responses updated successfully!");
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/evaluationResponse`,
          { inputdata },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Responses submitted successfully!");
        setIsEditMode(true);
      }
    } catch (error) {
      console.error("Error submitting responses:", error);
      alert("Failed to submit responses.");
    }
  };

  return (
    <div className="p-6">
     <div className="flex justify-between">
       {/* Back Button */}
       <button
        onClick={() =>
          router.push(`/admin-dashboard/manage-company/branch-details?id=${branchId}`)
        }
        className="bg-[#782A99] text-white px-6 py-3 rounded-md hover:bg-[#5e2178] transition-all mb-4"
      >
        Back to Branch Details
      </button>

      {/* Documents Dropdown Component */}
      <DocumentDropDown branchId={branchId} />
     </div>

      <h1 className="text-[#181C22] text-lg font-semibold mt-4 mb-4">
        {isEditMode ? "Edit Responses" : "Submit Responses"}  {branchId}
      </h1>

      {evaluationQuestions.length > 0 ? (
        <div className="border border-[#782A99] w-full bg-[#F8F9FF] rounded-lg p-6 space-y-4">
          {evaluationQuestions.map((question) => (
            <div
              key={question.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <div className="flex-1">
                <p className="text-[#181C22] font-medium">
                  <span className="font-semibold">Section:</span> {question.section}
                </p>
                <p className="text-red-500 font-semibold capitalize">
                  <span className="font-semibold">Gravity:</span> {question.gravity}
                </p>
                <p className="text-gray-700 mt-1">{question.questions}</p>
              </div>

              <div className="flex gap-2">
                {["Yes", "No", "Not Applicable"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleResponse(question.id, option)}
                    className={`px-4 py-2 rounded-md transition-all ${
                      responses[question.id] === option
                        ? "bg-[#782A99] text-white"
                        : "bg-gray-300 text-black hover:bg-gray-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
            >
              {isEditMode ? "Update Responses" : "Submit Responses"}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-[#707784] text-sm">Loading evaluation questions...</p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EvaluationQuestionsComponent />
    </Suspense>
  );
}
