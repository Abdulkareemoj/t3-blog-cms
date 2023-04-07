import moment from "moment"
import Link from "next/link"
import { useState, useEffect  } from "react"
import { getRecentPosts, getSimilarPosts } from "services"

const PostWidget = () => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(()=>{
    if (slug) {
      getSimilarPosts(category, slug)
      .then((result) => setRelatedPosts(result))
    }
    else{
      getRecentPosts(category, slug)
      .then((result) => setRelatedPosts(result))
    }
  }


//   useEffect(()=>{
//     slug ? getSimilarPosts(category, slug)
//     .then((result) => setRelatedPosts(result)) : getRecentPosts(category, slug)
//     .then((result) => setRelatedPosts(result));
// }



  )
  return (
    <div>PostWidget</div>
  )
}

export default PostWidget