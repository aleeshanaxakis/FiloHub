import { gql } from '@apollo/client';

export const  ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`

export const ADD_CHALLENGE = gql`
  mutation addChallenge($title: String!, $challengeBody: String!) {
    addChallenge(title: $title, challengeBody: $challengeBody) {
      _id
      creator
      title
      challengeBody
      createdAt 
    }
  }
`;

export const EDIT_CHALLENGE = gql`
  mutation editChallenge($challengeId: ID!, $title: String!, $challengeBody: String!) {
    editChallenge(challengeId: $challengeId, title: $title, challengeBody: $challengeBody) {
      _id
      creator
      title
      challengeBody
      createdAt
    }
  }
`;

export const DELETE_CHALLENGE = gql`
  mutation deleteChallenge($challengeId: ID!) {
    deleteChallenge(challengeId: $challengeId) {
      _id
      creator
      title
      challengeBody
      createdAt
    }
  }
`;

export const JOIN_CHALLENGE = gql`
  mutation joinChallenge($challengeId: ID!) {
    joinChallenge(challengeId: $challengeId) {
      _id
      creator
      title
      challengeBody
      createdAt
    }
  }
`;

export const LEAVE_CHALLENGE = gql`
  mutation leaveChallenge($challengeId: ID!) {
    leaveChallenge(challengeId: $challengeId) {
      _id
      creator
      title
      challengeBody
      createdAt
    }
  }
`;