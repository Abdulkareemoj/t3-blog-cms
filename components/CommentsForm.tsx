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
   
    <textarea ref={commentEl} 
    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 text-gray-600" 
    placeholder="Comment"
name="comment">

    </textarea>
  </div>
  <div className="grid grid-cols-1 gap-4 mb-4">
<input type="text" ref={nameEl}
 className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 text-gray-600" 
 placeholder="Name"
name="name"/>

<input type="text" ref={emailEl}
 className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 text-gray-600" 
 placeholder="Email"
name="email"/>
  </div>
  <div className="grid grid-cols-1 gap-4 mb-4">
    
  </div>
  </div>


    );
};

export default CommentsForm;
