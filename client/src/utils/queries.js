import { gql } from '@apollo/client';

export const QUERY_CHALLENGES = gql`
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

export const QUERY_SINGLE_CHALLENGE = gql`
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