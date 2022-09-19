const resolvers = {
  Query: {
    persons: (_, __, { dataSources }) => {
      return dataSources.personsDB.getPersons()
    },
    personsWithEmail: (_, __, {dataSources}) => {
      return dataSources.personsDB.getPersonsWithEmail()
    }
  }
}

module.exports = resolvers