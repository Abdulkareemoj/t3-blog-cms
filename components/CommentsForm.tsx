import {useState, useEffect, useRef} from "react";

const CommentsForm = () => {
   const [error, setError] = useState(false)
   const [localStorage, setLocalStorage] = useState(false)
   const [showSuccessMessage, setShowSuccessMessage] = useState(false)

   const commentEl = useRef()
   const nameEl= useRef()
   const emailEl= useRef()
   const storeDataEl= useRef()

  return (
  <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
  <div className="grid grid-cols-1 gap-4 mb-4">
   
    <textarea name="" id="" cols="30" rows="10">

    </textarea>
  </div>
  <div className="grid grid-cols-1 gap-4 mb-4">

  </div>
  <div className="grid grid-cols-1 gap-4 mb-4">
    
  </div>
  </div>


    );
};

export default CommentsForm;
