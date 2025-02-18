"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Document from './Document';

function DocumentAndCertificate({branchId}) {


  const [branchDocuments, setBranchDocuments] = useState([]);
  console.log(branchDocuments);


  useEffect(() => {
    const fetchData = async () => {
      // const branchId = selectedBranch?.branch_id;
      
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/branchDocuments/${branchId}`
        );
 
        console.log(response);
        setBranchDocuments(response.data.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);


  return (
    <div>
        <h1 className='text-[#181C22] font-semibold text-[20px] my-8'>Document or Certificate</h1>
        <div className="border-[1px] border-[#782A99] w-full bg-[#F8F9FF]  rounded-lg  p-4 py-10">
           
      {
        branchDocuments[0] ? (
          branchDocuments.map((document, index) => <Document key={document.id} index={index}  document={document} />)
        ) : (
          <p>No documents found</p>
        )
       
      }

         </div>
    </div>
  )
}

export default DocumentAndCertificate