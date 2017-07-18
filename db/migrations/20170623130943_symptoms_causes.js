'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('symptoms_causes', function(t){
    t.increments()
    t.integer('symptom_id').notNullable()
    t.integer('cause_id').notNullable()
    t.integer('votes')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('symptoms_causes')
}
