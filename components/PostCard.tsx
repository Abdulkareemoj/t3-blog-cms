import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <Image
          src="{post.featuredImage.url}"
          alt="{post.title}"
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-yellow-500">
        <Link rel="stylesheet" href={`/post/${post.slug}`} />
        {post.title}
      </h1>

      <div className="lg-flex jsutify-center mb-8 block w-full items-center text-center">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <Image
            alt="post.author.name"
            height="30"
            width="30"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
          <div className="font-medium text-gray-700">
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
          {" "}
          {post.Description}
        </p>
      </div>
      <div className=" text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="text-lgpx-8 transform cursor-pointer py-3 font-medium text-white transition duration-500 hover:-translate-y-1 ">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
