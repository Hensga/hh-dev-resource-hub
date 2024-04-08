import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
require('dotenv').config();

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;


const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,    
    headers: {
      Authorization: `Bearer ${accessToken}`
    },    
  }),
  cache: new InMemoryCache()
});

export default client;