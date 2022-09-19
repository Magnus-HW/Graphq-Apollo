const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PersonsDB = require('./datasourses/psql-api.js')

const knexConfig = {
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    database: "test",
    host: "localhost",
    port: 5001
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      personsDB: new PersonsDB(knexConfig)
    }
  }
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
})