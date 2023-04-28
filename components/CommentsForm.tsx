import {useState, useEffect, useRef} from "react";
import { submitComment } from "services";

const CommentsForm = () => {
   const [error, setError] = useState(false)
   const [localStorage, setLocalStorage] = useState(false)
   const [showSuccessMessage, setShowSuccessMessage] = useState(false)

   const commentEl = useRef()
   const usernameEl = useRef()
   const emailEl = useRef()
   const storeDataEl= useRef()

   useEffect(() => {
usernameEl.current.value = window.localStorage.getItem('username')
emailEl.current.value = window.localStorage.getItem('email')

   },[])

const handleCommentSubmit = () = > {
    setError(false);

    const {value: comment} = commentEl.current
    const {value: username} = usernameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current


     if (!comment || !username || !email )   {
       setError(true);
       return
  } 
// incase of use case of typed/infered finction
    // if (!commentEl.current.value || !usernameEl.current.value  || !emailEl.current.value )   {
    //   setError(true)
// }

const commentObj = { username, email, comment, slug };

if(storeData){
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('email', email)
}else{
  window.localStorage.removeItem('username', username)
  window.localStorage.removeItem('email', email)
}

submitComment(commentObj)
.then((res)=>{
  setShowSuccessMessage(true)
  setTimeout(()=>{
  setShowSuccessMessage(false)
  }, 5000) 
 } )
    } 
  

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
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
<input type="text" ref={usernameEl}
 className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 text-gray-600" 
 placeholder="Name"
name="name"/>

<input type="text" ref={emailEl}
 className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 text-gray-600" 
 placeholder="Email"
name="email"/>
  <div className="grid grid-cols-1 gap-4 mb-4">
    <input ref={storeData.el} type="checkbox" name="storeData" id="storeData" value="true"/>
    <label  className="text-gray-500 cursor-pointer" htmlFor="storeData">Save my details</label>
  </div>
  </div>
  {error && <p className="text-xs text-red-500">All fields are required</p>}
  <div className="mt-8">
    <button type="button" onClick={handleCommentSubmit} className="transition duration-500 ease hover:bg-red-700 text-lg rounded-full text-white cursor-pointer px-8 py-3">Submit</button>
    {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500 ">Comment Submitted</span>}
  </div>
  </div>


    );
};

export default CommentsForm;
