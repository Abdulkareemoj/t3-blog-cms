import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comment(res: any, req: any){
    const graphQLClient = new GraphQLClient(graphqlAPI, {

    }
}