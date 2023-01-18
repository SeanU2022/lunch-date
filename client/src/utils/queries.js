import { gql } from '@apollo/client';

// TODO align this to meet our backend
export const GET_MEALS = gql`
{
    meals {
        _id
        name
        vegetarian
        servings
    }
}
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_CLIENT = gql`
  query Client($clientId: ID!) {
    client(clientId: $clientId) {
      _id
      name
      address
      town
    }
  }
`;

export const QUERY_CLIENTS = gql`
  query Clients {
    clients {
      _id
      name
      address
      town
    }
  }
`;



export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

