import { gql } from "@apollo/client";

export const GET_SITES = gql`
  query GetSites($slug: String!) {
    siteCollection(where: { slug: $slug }) {
      items {
        title
        slug
        description
        ressource
        image {
          url
        }
        filter {
          sys {
            id
          }
          ... on Filter {
            title
          }
        }
      }
    }
  }
`;
