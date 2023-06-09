import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function comment(res: any, req: any){
const graphQLClient = new GraphQLClient(graphqlAPI, {
headers:{
authorization: `Bearer ${graphcmsToken}`
}
})

const query = gql`
mutation CreateComment($comment: String!, $email: String!, $name: String!, $slug: String!){
createComment(data: {comment: $comment, email: $email, name: $name, post:{connect: {slug: $slug}}}){
id
}
}   `
const result = await graphQLClient.request(query, req.body){
return res.status(200).send(result)
}