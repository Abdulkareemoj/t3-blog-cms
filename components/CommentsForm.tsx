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
  </div>
    );
};

export default CommentsForm;
