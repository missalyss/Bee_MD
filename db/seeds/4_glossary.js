'use strict'

exports.seed = function(knex, Promise) {
  return knex('glossary').del()
    .then(function () {
      return knex('glossary').insert([
        {
          id: 1, word: 'abdomen',
          meaning: "the third region of the body of a bee enclosing the honey stomach, true stomach, intestine, sting, and reproductive organs."
        },
        {
          id: 2, word: 'absconding swarm',
          meaning: "an entire colony of bees that abandons the hive because of disease, wax moth, excessive heat or water, lack of resources, or other reasons."
        },
        {
          id: 3, word: 'acarine disease',
          meaning: "The name of the disease caused by the tracheal mite (Acarapis woodi). See Tracheal mite."
        },
        {
          id: 4, word: 'afterswarm',
          meaning: " a small swarm which may leave the hive after the first or primary swarm has departed. These afterswarms usually have less bees associated with them than the primary swarm."
        },
        {
          id: 5, word: 'American foulbroud',
          meaning: "a brood disease of honey bees caused by the spore-forming bacterium, Paenibacillus larvae. The spore stage of the bacterium can remain viable for many years, making is difficult to eliminate the disease."
        },
        {
          id: 6, word: 'apiary',
          meaning: "colonies, hives, and other equipment assembled in one location for beekeeping operations; also known as a bee yard."
        },
        {
          id: 7, word: 'apiculture',
          meaning: "the science and art of raising honey bees"
        },
        {
          id: 8, word: 'Apis mellifera',
          meaning: "scientific name of the honey bee found in the United States."
        },
        {
          id: 9, word: 'bee blower',
          meaning: "an engine with attached blower used to dislodge bees from combs in a honey super by creating a high-velocity, high-volume wind."
        },
        {
          id: 10, word: 'bearding',
          meaning: "when bees congregate on the front of the hive, clinging onto eachother in the shape of a beard."
        },
        {
          id: 11, word: 'queen cups',
          meaning: "a cup-shaped cell hanging vertically from the comb, but containing no egg; also made artificially of wax or plastic to raise queens"
        },
        {
          id: 12, word: 'swarming',
          meaning: "the natural method of propagation of the honey bee colony."
        },
        {
          id: 13, word: 'varroa mites',
          meaning: "a tic-looking insect, they attach to the bees and suck the hemolymph from the adult bees and then get into cells before they are capped and reproduce there during the capped stage of the larvae development."
        }

      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('glossary_id_seq', (SELECT MAX (id) FROM glossary))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}

// http://www.bushfarms.com/beesterms.htm
// https://www.betterbee.com/glossary/
