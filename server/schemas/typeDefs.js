const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    challenges: [Challenge]!
  }

  type Challenge {
    _id: ID
    creator: String
    title: String
    createdAt: String
    challengeBody: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    challenge(creator: String): [Challenge]
    challenge(challengeId: ID!): Challenge
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(challengeId: ID!, title: String!, challengeBody: String!): Challenge
    editChallenge(challengeId: ID!): Challenge
    deleteChallenge(challengeId: ID!): Challenge
    joinChallenge(challengeId: ID!): Challenge
    leaveChallenge(challengeId: ID!): Challenge
    
  }
`;
module.exports = typeDefs;