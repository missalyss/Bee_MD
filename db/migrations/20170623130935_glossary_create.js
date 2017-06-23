'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('glossary', function(t){
    t.increments()
    t.string('word').notNullable()
    t.text('meaning').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('glossary')
}
