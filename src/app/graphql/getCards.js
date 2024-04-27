import { gql } from "@apollo/client";

export const GET_CARDS = gql`
  query GetCards {
    siteCollection {
      items {
        slug
        filter {
          sys {
            id
          }
          ... on Filter {
            title
            category {
              ... on Category {
                title
              }
            }
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
            category {
              ... on Category {
                title
              }
            }
          }
        }
      }
    }
  }
`;
