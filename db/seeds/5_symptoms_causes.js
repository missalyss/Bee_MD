'use strict'

exports.seed = function(knex, Promise) {
  return knex('symptoms_causes').del()
    .then(function () {
      return knex('symptoms_causes').insert([
        {
          id: 1, symptom_id: 1, cause_id: 2, votes: 8
        },
        {
          id: 2, symptom_id: 2, cause_id: 1, votes: 7
        },
        {
          id: 3, symptom_id: 2, cause_id: 3, votes: 11
        },
        {
          id: 4, symptom_id: 3, cause_id: 1, votes: 6
        },
        {
          id: 5, symptom_id: 5, cause_id: 4, votes: 4
        },
        {
          id: 6, symptom_id: 6, cause_id: 5, votes: 15
        },
        {
          id: 7, symptom_id: 4, cause_id: 1, votes: 13
        },
        {
          id: 8, symptom_id: 7, cause_id: 6, votes: 7
        },
        {
          id: 9, symptom_id: 8, cause_id: 7, votes: 11
        },
        {
          id: 10, symptom_id: 9, cause_id: 8, votes: 9
        }
      ])
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
