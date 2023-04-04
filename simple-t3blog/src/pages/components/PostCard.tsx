import moment from "moment"
import Image from "next/image"
import Link  from "next/link"

const PostCard = ( {post} ) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
       <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <Image src="{post.featuredImage.url}" alt="{post.title}" className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-yellow-500 text-3xl font-semibold">
        <link rel="stylesheet" href={`/post/${post.slug}`} />{post.title}
      </h1>

      <div className="block lg-flex text-center items-center jsutify-center mb-8 w-full">
<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
<Image alt="post.author.name" height="30px"  width="30px" className="align-middle rounded-full" src={post.author.photo.url}/>
</div>
      </div>
    </div>
  )
}

export default PostCard