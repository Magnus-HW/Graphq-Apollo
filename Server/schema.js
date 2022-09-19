const { gql } = require( "apollo-server");

const typeDefs = gql`
  type Query{
    persons: [Person]
    personsWithEmail: [Person]
  }

  type Person {
    id: ID!
    first_name: String!
    last_name: String!
    gender: String!
    age: Int!
    email: String
  }
`
module.exports = typeDefs