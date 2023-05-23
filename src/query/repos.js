import { gql } from "@apollo/client";

export const SEARCH_REPOSITORY = gql`
  query searchRep($query: String!) {
    search(query: $query, type: REPOSITORY, first: 21) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              avatarUrl
              login
            }

            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;
