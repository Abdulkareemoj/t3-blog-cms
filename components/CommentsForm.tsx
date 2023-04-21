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
  <div></div>
    );
};

export default CommentsForm;
