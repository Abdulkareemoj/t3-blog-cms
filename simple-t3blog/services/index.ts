
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