import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_CLIENT = gql`
//   # mutation addClient($clientId: ID!, $name: String!, $address: String, $town: String) {
//   mutation addClient($name: String!, $address: String, $town: String!) {
//     addClient(name: $name, address: $address, town: $town) {
//       _id
//       name
//       address
//       createdAt
//       town
//     }
//   }
// `;
export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $address: String!, $town: String!) {
    addClient(name: $name, address: $address, town: $town) {
      address
      _id
      name
      town
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($updateClientId: ID!, $name: String!, $address: String!, $town: String!) {
    updateClient(id: $updateClientId, name: $name, address: $address, town: $town) {
      address
      name
      town
      _id
    }
  }
`;

export const REMOVE_CLIENT = gql`
  mutation RemoveClient($removeClientId: ID!) {
    removeClient(id: $removeClientId) {
      _id
    }
  }
`;
// OLD CODE

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
