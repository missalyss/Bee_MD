'use strict'

exports.seed = function(knex, Promise) {
  return knex('causes_treatments').del()
    .then(function () {
      return knex('causes_treatments').insert([
        {
          cause_id: 1, treatment_id: 3, votes: 8
        },
        {
          cause_id: 2, treatment_id: 4, votes: 11
        },
        {
          cause_id: 3, treatment_id: 2, votes: 13
        }
      ])
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
