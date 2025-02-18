// "use client"
// import React from 'react'
// import { IoIosCloseCircle } from "react-icons/io";


// function Document({document, index}) {
//   return (
//     <div className='w-full flex   border-b-[2px] border-[#C0C7D5] py-2'>
//     <div className='w-1/2 flex items-center gap-2'>
//          <span>{index + 1}{")"}</span> 
//          <span> {document.document_description}</span> 
//     </div>
//      <div className='w-1/2 flex items-center justify-between'>
//      <span>{document.issue_date}-{document.expiry_date}</span>
   
//      <a href={document.document_link} target="_blank" rel="noopener noreferrer">
//   <IoIosCloseCircle />
//   <img src={document.document_link} alt="Document Preview" />
// </a>
  
//      <div className='bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white'><IoIosCloseCircle className='text-white text-2xl '/> <span>YES</span></div>

//      </div>
//     </div>
//   )
// }

// export default Document



// "use client";
// import React from "react";
// import { IoIosCloseCircle } from "react-icons/io";

// function Document({ document, index }) {
//   return (
//     <div className="w-full flex border-b-[2px] border-[#C0C7D5] py-2">
//       <div className="w-1/2 flex items-center gap-2">
//         <span>{index + 1}{")"}</span>
//         <span>{document.document_description}</span>
//       </div>
//       <div className="w-1/2 flex items-center justify-between">
//         <span>{document.issue_date} - {document.expiry_date}</span>
        
//         {/* Link to open the image in a new tab */}

         
//           <img
//             src={document.document_link}
//             alt="Document Preview"
//             className="w-10 h-10 rounded"
//           />


//         <div className="bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white">
//           <IoIosCloseCircle className="text-white text-2xl" />
//           <span>YES</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Document;




"use client";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function Document({ document, index }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-full flex border-b-[2px] border-[#C0C7D5] py-2">
      <div className="w-1/2 flex items-center gap-2">
        <span>{index + 1}{")"}</span>
        <span>{document.document_description}</span>
      </div>
      <div className="w-1/2 flex items-center justify-evenly">
        <span>{document.issue_date} - {document.expiry_date}</span>

        {/* Image with click handler */}
        <img
          src={document.document_link}
          alt="Document Preview"
          className="w-10 h-10 rounded cursor-pointer"
          onClick={handleImageClick}
        />

        {/* <div className="bg-[#BA1A1A] w-[91px] flex items-center px-1 py-[6px] gap-4 rounded-[16px] text-white">
          <IoIosCloseCircle className="text-white text-2xl" />
          <span>YES</span>
        </div> */}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4  rounded-lg shadow-lg ">
            <button
              className="absolute top-2 right-2 text-red-500 text-2xl"
              onClick={closePopup}
            >
              <IoIosCloseCircle />
            </button>
           <div className="h-[90vh] flex justify-center items-center">
                <img
                   src={document.document_link}
                   alt="Full Document Preview"
                   className="max-h-full rounded-lg "
                 />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Document;
