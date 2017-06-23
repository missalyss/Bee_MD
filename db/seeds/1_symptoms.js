'use strict'

exports.seed = function(knex, Promise) {
  return knex('symptoms').del()
    .then(function () {
      return knex('symptoms').insert([
        {
          id: 1, symptom: 'deformed wings',
        details: 'on worker bees and drones'
      },
        {
          id: 2, symptom: 'bearding', glossary_id: 10,
        details: 'did an orientation flight and has been bearding for days now'
      },
        {
          id: 3, symptom: 'queen cups', glossary_id: 11,
        details: 'located on the bottom of the frame'
      }
      ]);
    }).then(function () {
      return knex.raw(
        "SELECT setval('symptoms_id_seq', (SELECT MAX (id) FROM symptoms))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
