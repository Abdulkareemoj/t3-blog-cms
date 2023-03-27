import Head from "next/head";


const posts = [
  {
    title: 'Testing',
    description: 'Testpost'
  },
  {
    title: 'Testing1',
    description: 'Testpost1'
  },
];

  
export default function Home(){
  return (
    <div className="container mx-auto px-10 mb-8">
          <Head>
        <title>Simple Blog</title>
        <meta name="description" content="Simple Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{posts.map((post, _index)=>(
  <div>
    {post.title}
    {post.description}
    </div>
))}
      </div>
      </div>
       
  )
  }

