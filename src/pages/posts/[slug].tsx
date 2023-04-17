import { getPosts, getPostDetails } from "services";
import Categories from '../../../types/Categories';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "components";
const PostDetails = () => {
  return (
    <div className="container mx-auto mb-10 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post}/>
          <Author author={post.author}/>
          <CommentsForm slug={post.slug}/>
          <Comments slug={post.slug}/>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget category={post.Categories.map((category)=> category.slug)} slug={post.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { posts: data },
  };
}


export async function getStaticPaths() {
  const data = await getPostDetails(params.slug);
  return {
    props: { posts: data },
  };
}