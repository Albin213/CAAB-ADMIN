// import React from 'react';

// function Circle() {
//   const percentage = 37; // Fixed percentage value
//   const circleRadius = 50; // Radius of the circle
//   const circleCircumference = 2 * Math.PI * circleRadius;

//   // Calculate the stroke dash offset based on the fixed percentage
//   const strokeDashoffset =
//     circleCircumference - (percentage / 100) * circleCircumference;

//   return (
//     <div className="flex justify-center items-center bg-white">
//       <div className="relative flex justify-center items-center">
//         <svg
//           className="w-28 h-28 transform -rotate-90"
//           viewBox="0 0 120 120"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Background circle */}
//           <circle
//             cx="60"
//             cy="60"
//             r={circleRadius}
//             fill="none"
//             stroke="#C0C7D5"
//             strokeWidth="10"
//           />
//           {/* Foreground circle */}
//           <circle
//             cx="60"
//             cy="60"
//             r={circleRadius}
//             fill="none"
//             stroke="#0076D2"
//             strokeWidth="10"
//             strokeDasharray={circleCircumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//           />
//         </svg>
//         {/* Percentage in the center */}
//         <div className="absolute text-[#0076D2] font-bold text-xl">
//           {percentage}%
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Circle;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Circle({ branchId }) {
//   const [gradingReport, setGradingReport] = useState(null);
//   const [compltedPercentage, setCompletedPercentage] = useState();
//   const percentage = gradingReport?.gravityPercentage || 0; // Default to 0 if undefined

//   useEffect(() => {
//     if (!branchId) return;

//     const fetchGradingReport = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/admin/grading`,
//           { branch_id: branchId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         console.log(response);
//         setCompletedPercentage(response.data.completedPercentage);
//         setGradingReport(response.data); // Store gravityPercentage & Report
//       } catch (error) {
//         console.error("Error fetching grading report:", error);
//       }
//     };

//     fetchGradingReport();
//   }, [branchId]);

//   const circleRadius = 50;
//   const circleCircumference = 2 * Math.PI * circleRadius;
//   const strokeDashoffset =
//     circleCircumference - (percentage / 100) * circleCircumference;

//   return (
//     <div className="flex flex-col  bg-white p-6 shadow-md rounded-md">
//       <div className="flex  items-center gap-10">
//       <div className="relative">
//       <img src="/Grading Meter.svg" alt="Grading Meter" className="w-36 h-28" />
//       <span className="absolute left-14 bottom-1 font-bold">{percentage}%</span>
//       </div>
//       {/* Circular Progress Indicator */}
//     <div className="border-[1px] border-gray-600 rounded-lg flex justify-between item-center gap-2 p-2">
//       <p className="pt-5">
//       Only completed &nbsp;
//       {compltedPercentage}% of forms <br/>
//       to finalise your rating.
//       </p>
//     <div className="relative flex justify-center items-center mb-6">
//         <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
//           {/* Background Circle */}
//           <circle
//             cx="60"
//             cy="60"
//             r={circleRadius}
//             stroke="#C0C7D5"
//             strokeWidth="10"
//             fill="none"
//           />
//           {/* Foreground Circle */}
//           <circle
//             cx="60"
//             cy="60"
//             r={circleRadius}
//             stroke="#0076D2"
//             strokeWidth="10"
//             fill="none"
//             strokeDasharray={circleCircumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//           />
//         </svg>
//         <div className="absolute text-[#0076D2] font-bold text-xl">
//           {compltedPercentage}%
//         </div>
//       </div>
//     </div>
//       </div>

//       {/* Table for Rejected Questions */}
//       <h2 className="text-lg font-semibold text-[#181C22] mt-10 mb-3">
//         Rejected Questions
//       </h2>
//       {gradingReport?.Report?.length > 0 ? (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Section</th>
//               <th className="border border-gray-300 px-4 py-2">
//                 Rejected Question
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {gradingReport.Report.map((item, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border border-gray-300 px-4 py-2">
//                   {item.section}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {item.questions}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-[#707784]">No rejected questions found.</p>
//       )}
//     </div>
//   );
// }

// export default Circle;








import React, { useEffect, useState } from "react";
import axios from "axios";

function Circle({ branchId }) {
  const [gradingReport, setGradingReport] = useState(null);
  const [compltedPercentage, setCompletedPercentage] = useState(0);

  useEffect(() => {
    if (!branchId) return;

    const fetchGradingReport = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/grading`,
          { branch_id: branchId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        setCompletedPercentage(Math.round(response.data.completedPercentage)); // Round value
        setGradingReport(response.data);
      } catch (error) {
        console.error("Error fetching grading report:", error);
      }
    };

    fetchGradingReport();
  }, [branchId]);

  const percentage = Math.round(gradingReport?.gravityPercentage || 0); // Round value
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset =
    circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <div className="flex flex-col bg-white p-6 shadow-md rounded-md">
      <div className="flex items-center gap-10">
        <div className="relative">
          <img src="/Grading Meter.svg" alt="Grading Meter" className="w-36 h-28" />
          <span className="absolute left-14 bottom-1 font-bold">{percentage}%</span>
        </div>

        {/* Circular Progress Indicator */}
        <div className="border-[1px] border-gray-600 rounded-lg flex justify-between items-center gap-2 p-2">
          <p className=" ">
            Only completed &nbsp;
            <span className="text-[#0076D2] "><strong>{compltedPercentage}%</strong> </span>of forms <br />
            to finalize your rating.
          </p>
          <div className="relative flex justify-center items-center mb-6">
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
              {/* Background Circle */}
              <circle
                cx="60"
                cy="60"
                r={circleRadius}
                stroke="#C0C7D5"
                strokeWidth="10"
                fill="none"
              />
              {/* Foreground Circle */}
              <circle
                cx="60"
                cy="60"
                r={circleRadius}
                stroke="#0076D2"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-[#0076D2] font-bold text-xl">
              {compltedPercentage}%
            </div>
          </div>
        </div>
      </div>

      {/* Table for Rejected Questions */}
      <h2 className="text-lg font-semibold text-[#181C22] mt-10 mb-3">
        Rejected Questions
      </h2>
      {gradingReport?.Report?.length > 0 ? (
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Section</th>
              <th className="border border-gray-300 px-4 py-2">
                Rejected Question
              </th>
            </tr>
          </thead>
          <tbody>
            {gradingReport.Report.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {item.section}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.questions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-[#707784]">No rejected questions found.</p>
      )}
    </div>
  );
}

export default Circle;
