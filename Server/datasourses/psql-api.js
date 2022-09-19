const { SQLDataSource } = require( "datasource-sql");

// const MINUTE = 60

class PersonsDB extends SQLDataSource {

  getPersons() {
    return this.knex
      .select("*")
      .from("persons")
  }
  getPersonsWithEmail() {
    return this.knex
      .select("*")
      .from("persons")
      .where('email', '!=', 'null')
  }
}

module.exports = PersonsDB