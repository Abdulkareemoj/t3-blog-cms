import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect  } from "react"
import { getRecentPosts, getSimilarPosts } from "services"

const PostWidget = ( {category, slug} ) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(()=>{
    if (slug) {
      getSimilarPosts(category, slug)
      .then((result) => setRelatedPosts(result))
    }
    else{
      getRecentPosts(category, slug)
      .then((result) => setRelatedPosts(result))
  

//   useEffect(()=>{
//     slug ? getSimilarPosts(category, slug)
//     .then((result) => setRelatedPosts(result)) : getRecentPosts(category, slug)
//     .then((result) => setRelatedPosts(result));
// }

  }
  }, [slug]


  )
  return (
    <div className=" bg-white shadow-lg rounded-lg p-8 mb-8">
<h3>
 {slug ? "Related Posts" : "Recent Posts"}
</h3>
{relatedPosts.map((post)=>(
<div key = {post.title} className="flex items-center w-full">
  <div className="w-16 flex-none">
    <Image 
    alt = {post.title}
    height = "60"
    width = "60"
    className = "align-middle rounded-full"
    src = {post.featuredImage.url}

    />

  </div>
<div className="flex-grow ml-4">
 <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}
  </p> 
  <Link rel="stylesheet" href={`/post/${post.slug}`} key={post.title} className="text-md"/> {post.title}
</div>
</div>
))}
    </div>
  )
}

export default PostWidget