'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('symptoms', function(t){
    t.increments()
    t.string('symptom').notNullable()
    t.integer('glossary_id')
    t.text('details')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('symptoms')
}
