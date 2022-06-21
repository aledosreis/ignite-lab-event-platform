import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oiquhr068m01yw0upu8b5e/master',
  cache: new InMemoryCache()
})