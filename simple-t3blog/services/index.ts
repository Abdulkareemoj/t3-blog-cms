import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async ()  => {
    const query = gql`
    query MyQuery{       
        postsConnection {
            edges {
                node {
                    authors {
                        id
                        description
                        name
                        image {
                                url
                            }
                        }
                    createdAt
                    slug
                    title
                    description
                    featuredImage {
                        url
                        }
                    categories {
                        slug
                        categoryName
                        }
                    }
                }
            }
}

;

`

const result = await request(graphqlAPI, query)

return result.postsConnection.edges
}

export const getRecentPosts = async ()  => {
    const query = gql`
    query getPostDetails() {
        posts(
            orderBy: createdAt_ASC,
            last: 3) {
            
                    createdAt
                    slug
                    title
                    featuredImage {
                        url
                    }
        }
    }
` 
    const result = await request(graphqlAPI, query)
    return result.posts

}
    


export const getSimilarPosts = async ()  => {
    const query = gql`
    query getPostDetails ($slug: String! $categories: [String!]){
       posts(
        where: { slug_not: $slug, AND {categories_some {slug+in: $categories}}}
        last: 3
       ){
        createdAt
                    slug
                    title
                    featuredImage {
                        url
                    }
       }
         }
` 
    const result = await request(graphqlAPI, query)
    return result.posts
}