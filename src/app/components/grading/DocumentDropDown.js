"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";
import { IoDocumentsSharp } from "react-icons/io5";

function DocumentDropDown({ branchId }) {
  const [documents, setDocuments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (!branchId) return;

    const fetchDocuments = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/branchDocuments/${branchId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDocuments(response.data.data || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [branchId]);

  const openPopup = (doc) => {
    setSelectedDocument(doc);
    setIsPopupOpen(true);
    setIsOpen(false); // Close the dropdown when opening the popup
  };

  const closePopup = () => {
    setSelectedDocument(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#312fa4] text-white px-4 py-2 rounded-md flex justify-center items-center gap-3 hover:bg-[#5045c3] transition-all"
      >
        Documents <IoDocumentsSharp/>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute right-4 mt-2  bg-white border border-gray-300 rounded-md shadow-md w-96 z-10">
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <div
                key={index}
                onClick={() => openPopup(doc)}
                className="flex gap-2 items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                <span>{index + 1}{")"}</span>
                <span>{doc.document_description}</span>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No documents found</p>
          )}
        </div>
      )}

      {/* Popup Modal */}
      {isPopupOpen && selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-xl">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-red-500 text-2xl"
              onClick={closePopup}
            >
              <IoIosCloseCircle />
            </button>

            {/* Document Details */}
            <h2 className="text-lg font-semibold mb-2">Document Details</h2>
            <p><strong>Department:</strong> {selectedDocument.department_name}</p>
            <p><strong>Description:</strong> {selectedDocument.document_description}</p>
            <p><strong>Licence No:</strong> {selectedDocument.licence_no}</p>
            <p><strong>Licence Authority:</strong> {selectedDocument.licence_authority}</p>
            <p><strong>Issue Date:</strong> {selectedDocument.issue_date}</p>
            <p><strong>Expiry Date:</strong> {selectedDocument.expiry_date}</p>

            {/* Image Preview */}
            <div className="h-[50vh] flex justify-center items-center">
              <img
                src={selectedDocument.document_link}
                alt="Full Document Preview"
                className="max-h-full rounded-lg"
              />
            </div>

            {/* Document Link */}
            {/* <p className="mt-4">
              <strong>Document Link:</strong>{" "}
              <a
                href={selectedDocument.document_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Full Document
              </a>
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DocumentDropDown;
