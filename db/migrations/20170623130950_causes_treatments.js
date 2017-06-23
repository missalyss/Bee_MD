'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('causes_treatments', function(t){
    t.integer('cause_id').notNullable()
    t.integer('treatment_id').notNullable()
    t.integer('votes')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('causes_treatments')
}
