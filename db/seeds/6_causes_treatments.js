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
      ])
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
