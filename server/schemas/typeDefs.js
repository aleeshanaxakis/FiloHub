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
    challenges(creator: String): [Challenge]
    challenges(challengeId: ID!): Challenge
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addChallenge(thoughtText: String!): Thought
    editChallenge(thoughtId: ID!, commentText: String!): Thought
    joinChallenge(thoughtId: ID!): Thought
    leaveChallenge(thoughtId: ID!, commentId: ID!): Thought
    deleteChallenge
  }
`;
module.exports = typeDefs;