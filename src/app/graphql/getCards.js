import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query GetCards {
    siteCollection {
      items {
        slug
        sys {
          id
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
    cardCollection {
      items {
        cardImage {
          url
        }
        cardTitle
        linkToPage {
          sys {
            id
          }
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
