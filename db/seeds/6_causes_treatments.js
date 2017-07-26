'use strict'

exports.seed = function(knex, Promise) {
  return knex('causes_treatments').del()
    .then(function () {
      return knex('causes_treatments').insert([
        {
          id: 1, cause_id: 1, treatment_id: 3, votes: 8
        },
        {
          id: 2, cause_id: 2, treatment_id: 4, votes: 11
        },
        {
          id: 3, cause_id: 3, treatment_id: 2, votes: 13
        },
        {
          id: 4, cause_id: 1, treatment_id: 1, votes: 6
        },
        {
          id: 5, cause_id: 4, treatment_id: 6, votes: 8
        },
        {
          id: 6, cause_id: 5, treatment_id: 7, votes: 12
        },
        {
          id: 7, cause_id: 6, treatment_id: 3, votes: 2
        },
        {
          id: 8, cause_id: 1, treatment_id: 5, votes: 8
        },
        {
          id: 9, cause_id: 7, treatment_id: 8, votes: 5
        },
        {
          id: 10, cause_id: 6, treatment_id: 8, votes: 7
        },
        {
          id: 11, cause_id: 8, treatment_id: 9, votes: 9
        }
      ])
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
