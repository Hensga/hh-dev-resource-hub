import { gql } from "@apollo/client";

export const GET_FILTERS = gql`
  query GetFilters {
    siteCollection {
      items {
        slug
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
