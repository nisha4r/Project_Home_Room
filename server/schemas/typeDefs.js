const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    subjects: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Student {
    studentID: ID!
    studentName: String
    onTheWay: Boolean
    arrived: Boolean,
    requested: Boolean
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth   

    addSubject(profileId: ID!, subject: String!): Profile
    removeProfile: Profile
    removeSubject(subject: String!): Profile

    studentGoing(studentID: ID!, leavingStatus: Boolean!): Student
    
  }
`;

module.exports = typeDefs;
