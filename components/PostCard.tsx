import moment from "moment"
import Image from "next/image"
import Link  from "next/link"

const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
       <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <Image src="{post.featuredImage.url}" alt="{post.title}" className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-yellow-500 text-3xl font-semibold">
        <Link rel="stylesheet" href={`/post/${post.slug}`} />{post.title}
      </h1>

      <div className="block lg-flex text-center items-center jsutify-center mb-8 w-full">
<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
<Image alt="post.author.name" height="30"  width="30" className="align-middle rounded-full" src={post.author.photo.url}/>
<p className="inline align-middle text-gray-700 ml-2 text-lg">
{post.author.name}
</p>
<div className="font-medium text-gray-700">
<span>
  {moment(post.createdAt).format('MMM DD, YYYY')}
</span>
</div>

</div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8"> {post.Description}</p>
      </div>
	  <div className=" text-center">
<Link href={`/post/${post.slug}`}>
<span className="text-white transition duration-500 transform hover:-translate-y-1 font-medium text-lgpx-8 py-3 cursor-pointer ">
	Continue Reading
</span>
</Link>
	  </div>
    </div>
  )
}

export default PostCard