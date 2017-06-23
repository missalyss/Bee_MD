'use strict'

exports.seed = function(knex, Promise) {
  return knex('symptoms_causes').del()
    .then(function () {
      return knex('symptoms_causes').insert([
        {
          symptom_id: 1, cause_id: 2, votes: 8
        },
        {
          symptom_id: 2, cause_id: 1, votes: 7
        },
        {
          symptom_id: 2, cause_id: 3, votes: 11
        },
        {
          symptom_id: 3, cause_id: 1, votes: 6
        }
      ])
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
