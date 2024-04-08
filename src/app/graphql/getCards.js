import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query GetCards {
    siteCollection {
      items {
        slug
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
      }
    }
  }
`;
