'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('treatments', function(t){
    t.increments()
    t.string('title').notNullable()
    t.text('instructions').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('treatments')
}
