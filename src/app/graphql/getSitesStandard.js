import { gql } from "@apollo/client";

export const GET_SITES_STANDARD = gql`
  query GetSitesStandard {
    siteCollection {
      items {
        title
        slug
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
