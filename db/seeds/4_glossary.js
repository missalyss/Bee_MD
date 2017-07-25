'use strict'

exports.seed = function(knex, Promise) {
  return knex('glossary').del()
    .then(function () {
      return knex('glossary').insert([
        {
          id: 1, word: 'Abdomen',
          meaning: "The third region of the body of a bee enclosing the honey stomach, true stomach, intestine, sting, and reproductive organs."
        },
        {
          id: 2, word: 'Absconding Swarm',
          meaning: "An entire colony of bees that abandons the hive because of disease, wax moth, excessive heat or water, lack of resources, or other reasons."
        },
        {
          id: 3, word: 'Acarine Disease',
          meaning: "The name of the disease caused by the tracheal mite (Acarapis woodi). See Tracheal mite."
        },
        {
          id: 4, word: 'Afterswarm',
          meaning: "A small swarm which may leave the hive after the first or primary swarm has departed. These afterswarms usually have less bees associated with them than the primary swarm."
        },
        {
          id: 5, word: 'American Foulbroud',
          meaning: "A brood disease of honey bees caused by the spore-forming bacterium, Paenibacillus larvae. The spore stage of the bacterium can remain viable for many years, making is difficult to eliminate the disease."
        },
        {
          id: 6, word: 'Apiary',
          meaning: "Colonies, hives, and other equipment assembled in one location for beekeeping operations; also known as a bee yard."
        },
        {
          id: 7, word: 'Apiculture',
          meaning: "The science and art of raising honey bees."
        },
        {
          id: 8, word: 'Apis Mellifera',
          meaning: "Scientific name of the honey bee found in the United States."
        },
        {
          id: 9, word: 'Bee Blower',
          meaning: "An engine with attached blower used to dislodge bees from combs in a honey super by creating a high-velocity, high-volume wind."
        },
        {
          id: 10, word: 'Bearding',
          meaning: "When bees congregate on the front of the hive, clinging onto eachother in the shape of a beard."
        },
        {
          id: 11, word: 'Queen Cups',
          meaning: "A cup-shaped cell hanging vertically from the comb, but containing no egg; also made artificially of wax or plastic to raise queens. Called a Queen Cell once a bee is pupating inside it. When completed, it looks like a peanut shell—rough-textured, elongated, perhaps an inch overall (2.5 cm), and it hangs vertically off the frame."
        },
        {
          id: 12, word: 'Swarm',
          meaning: "The natural method of propagation of the honey bee colony. A young queen is raised, and the old queen leaves with half of the hive to create a new hive of their own. The swarm itself usually refers to the huge collection of bees as they leave their previous hive. Swarms are typically very gentle, looking to protect themselves and their queen as they look for a new home."
        },
        {
          id: 13, word: 'Varroa Mites',
          meaning: "A tic-looking insect, they attach to the bees and suck the hemolymph from the adult bees and then get into cells before they are capped and reproduce there during the capped stage of the larvae development."
        },
        {
          id: 14, word: 'Balling',
          meaning: "Worker bees surrounding a queen either to confine her because they reject her or to confine her to protect her. Can be a very aggressive move, intended to smother the queen."
        },
        {
          id: 15, word: 'Bee Space',
          meaning: "A space between 1/4 and 3/8 inch (6mm and 10mm) which permits free passage for a bee but too small to encourage comb building, and too large to induce propolizing."
        },
        {
          id: 16, word: 'Beeswax',
          meaning: "A substance that is secreted by bees by special glands on the underside of the abdomen, deposited as thin scales, and used after mastication and mixture with the secretion of the salivary glands for constructing the honeycomb. Beeswax melts at approximately 145°F (63°C). The flashpoint is 400°F (204.4°C)."
        },
        {
          id: 17, word: 'Zombee',
          meaning: "A zombee is a honey bee that has become a host for the phorid fly, Apocephalus borealis."
        },
        {
          id: 18, word: 'Colongy Collapse Disorder',
          meaning: "A recently named problem where most of the bees in most of the hives in an apiary disappear leaving a queen, healthy brood and only a few bees in the hive with plenty of stores."
        },
        {
          id: 19, word: 'Brood',
          meaning: "Immature bees not yet emerged from their cells; in other words, egg, larvae or pupae. "
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
