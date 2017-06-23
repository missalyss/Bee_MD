'use strict'

exports.seed = function(knex, Promise) {
  return knex('causes').del()
    .then(function () {
      return knex('causes').insert([
        {
          id: 1, cause: 'swarming', glossary_id: 12,
          why: "you're going to lose half your hive unless you give them a reason to stay. This could cause problems between you and your neighbors, or, if your bees aren't as strong as they think they are, the entire hive could die."
        },
        {
          id: 2, cause: 'varroa mites', glossary_id: 13,
          why: "mites are sucking the blood of bees; it causes a weak hive and deformed bees"
        },
        {
          id: 3, cause: 'not enough ventilation',
          why: "bees need ventilation to not get overheated in the hive"
        }
      ]);
    }).then(function () {
      return knex.raw(
        "SELECT setval('causes_id_seq', (SELECT MAX (id) FROM causes))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
