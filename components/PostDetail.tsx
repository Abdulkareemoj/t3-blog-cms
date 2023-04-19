import moment from 'moment';
import Image from 'next/image';

const PostDetail = ( {post} ) => {
  const getContentFragment = (index, text, obj, type) =>{
let modifiedText: string = text

if (obj){
  if(obj.bold){
    modifiedText = (<b key={index}>{text}</b>)
  }
  if(obj.italic){
    modifiedText = (<em key={index}>{text}</em>)
  }
  if(obj.underline){
    modifiedText = (<u key={index}>{text}</u>)
  }
}

switch(type){
  case 'heading-three':
return <h3 key={index} className='text-xl font-semibold mb-4'></h3>

case 'paragraph':
  return <p key={index} className='mb-8'>{modifiedText.map((item))}</p>
  
  case 'heading-four':
return <h4 key={index} className='text-xl font-semibold mb-4'></h4>

case 'image':
  return (
  <Image 
  key={index}
  alt={obj.title}
  height={obj.height}
  width={obj.width}
  src={obj.src}
  />
  )
  default:
  return modifiedText
}

  }


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
<h1 className='mb-8 text-3xl font-semibold'>
  {post.title}

</h1>
{post.content.raw.children.map((typeObj, index => {
  const children =typeObj.childres.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item)) 
  return getContentFragment(index, children, typeObj, typeObj.type)
}))}

  </div>
</div>
    </div>
  );
};

export default PostDetail;
