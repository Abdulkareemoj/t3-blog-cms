import moment from 'moment';
import Image from 'next/image';

const PostDetail = ( {post} ) => {
  return (
    <div>
<div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
  <div className="relative overflow-hidden shadow-md mb-6">
    <Image 
    src = {post.featuredImage.url}
    alt = {post.title}
    className='w-full object-top rounded-t-lg h-full'
    />

  </div>
  <div className='flex flex-items mb-8 w-full'>
<div>
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
</div>
  </div>
</div>
    </div>
  );
};

export default PostDetail;
