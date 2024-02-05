import { gql } from '@apollo/client';

export const GET_CHALLENGES = gql`
  query getChallenges {
    challenges {
      _id
      creator
      createdAt
      title
      challengeBody
    }
  }
`;

export const GET_CHALLENGE = gql`
  query getSingleChallenge($challengeId: ID!) {
    challenge(challengeId: $challengeId) {
      _id
      creator
      createdAt
      title
      challengeBody
      participants {
        _id
        name
        createdAt
      }
    }
  }
`;