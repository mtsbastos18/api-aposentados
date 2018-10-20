'use strict'

const Schema = use('Schema')

class AssociateSchema extends Schema {
  up () {
    this.create('associates', (table) => {
      table.increments()
      table.string('nome')
      table.string('cpf')
      table.integer("status")
      table.timestamps()
    })
  }

  down () {
    this.drop('associates')
  }
}

module.exports = AssociateSchema
