'use strict'

exports.seed = function(knex, Promise) {
  return knex('symptoms').del()
    .then(function () {
      return knex('symptoms').insert([
        {
            id: 1, symptom: 'Deformed Wings',
          details: "Worker bees and drones' wings look crumped. They likely cannot fly with these wings."
        },
        {
            id: 2, symptom: 'Bearding', glossary_id: 10,
          details: "Usually occurs mid to late summer, and late in the afternoon into the evening. Generally, bearding bees don’t do back inside until the temperature drops—which may be quite late in the day. They are relatively quiet, and generally crawl out of the hive without becoming airborn. Can be confused with swarming."
        },
        {
            id: 3, symptom: 'Swarm Cell', glossary_id: 11,
          details: "A queen cell located at the bottom of the hive, which indicates raising a queen so that the colony can swarm."
        },
        {
            id: 4, symptom: 'Backfilling',
          details: "A term coined by Walt Wright to describe the process of the bees creating a honey bound brood nest. The process where the bees put honey in the brood nest to prevent the queen from laying and to prepare for swarming."
        },
        {
          id: 5, symptom: 'K Wings',
          details: "Paralized wings held at an unusual angle that resembles the letter 'K'. Bees are unable to fly. "
        },
        {
          id: 6, symptom: 'Flying at Night',
          details: "Once out of the hive, they fly towards a light source as many insects do. But unlike other insects at a light source, the infected honey bees become disoriented and lose their balance; eventually they die. What causes them to leave their hive at night is not known."
        },
        {
          id: 7, symptom: 'Supercedure Cell', glossary_id: 11,
          details: "A queen cell hanging off the middle of the frame somewhere is usually a supersedure or 'emergency' queen cell. Supersedure cells are often begun after the eggs are laid. The bees, knowing they need to replace the queen, begin feeding royal jelly to a young larva they have selected. They build a supersedure cell around this larva (or several larvae) and it hangs down from the face of the comb."
        },
        {
          id: 8, symptom: 'Double Egg-Laying',
          details: "Sometimes a queen, when she starts laying after a time of not laying, will lay a few double eggs but she usually stops after a day or two. The laying workers will lay three or four to a cell in almost every cell. The difficulty is that the bees think they have a queen (the laying workers) and will not accept one. The laying workers are virtually impossible to find. I have found one in a two frame nuc by studying every bee until I saw one lay, but this is impractical in a full sized hive since there would be too many bees and too many laying workers."
        },
        {
          id: 9, symptom: 'Wax Moths',
          details: "They take advantage of a weak hive and live on pollen, honey and burrow through the wax. They leave a trail of webs and feces. Sometimes they are hard to spot because they try to hide from the bees. They burrow down the mid rib (mostly in the brood chamber but sometimes in the supers) and they burrow in the grooves in the frames."
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('symptoms_id_seq', (SELECT MAX (id) FROM symptoms))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
