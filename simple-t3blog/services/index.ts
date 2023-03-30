import { graphql } from 'graphql'
import {request, gql} from 'graphql-request'

export const getPosts = async ()  =>{
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
          createdAt
        }
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
    }`
}

const results = await request(graphqlAPI, query)

return result.postsConnection.edges