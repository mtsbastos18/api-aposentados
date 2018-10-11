'use strict'

const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string("service_name", 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.table('services', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ServiceSchema
