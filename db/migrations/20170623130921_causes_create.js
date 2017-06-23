'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('causes', function(t){
    t.increments()
    t.string('cause').notNullable()
    t.integer('glossary_id')
    t.text('why')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('causes')
}
