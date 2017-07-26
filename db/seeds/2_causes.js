'use strict'

exports.seed = function(knex, Promise) {
  return knex('causes').del()
    .then(function () {
      return knex('causes').insert([
        {
          id: 1, cause: 'Swarming', glossary_id: 12,
          why: "Swarming usually occurs in mid to late spring, mid-morning to mid-afternoon. Makes a loud roar and may cover the hive, and cloud around it."
        },
        {
          id: 2, cause: 'Varroa Mite Infestation', glossary_id: 13,
          why: "mites are sucking the blood of bees; it causes a weak hive and deformed bees"
        },
        {
          id: 3, cause: 'Poor Ventilation',
          why: "The hive is poorly ventilated and the bees are too hot or humid. Especially occurs in the summer."
        },
        {
          id: 4, cause: 'Chronic Paralysis Virus',
          why: "Because the healthy workers in a colony will quickly get rid of the infected bees, Chronic Bee Paralysis Virus rarely takes out a whole colony and is considered only a “minor” honey bee disease. However, if you find large numbers of such bees, the colony can be fortified by  Usually, an infected hive will recover on its own."
        },
        {
          id: 5, cause: 'Zombee Infestation', glossary_id: 17,
          why: "The parasitic adult fly lands on a honey bee abdomen and pierces the exoskeleton with her ovipositor. The fly’s eggs pass through the ovipositor and into the body of the honey bee in just a few seconds. When the eggs hatch, the larvae munch on bee innards. Eventually the honey bee dies and the larvae chew their way to the outside, exiting the bee between the head and thorax."
        },
        {
          id: 6, cause: 'Queen Rejection',
          why: "If your queen has just been introduced, your hive may have rejected her and killed her. If she has been around for a while, but is getting old, or is laying poorly, the nurse bees may be deciding to replace her with someone more fit to be queen."
        },
        {
          id: 7, cause: 'Worker Queen',
          why: "When the hive is queenless, and therefore broodless, for several weeks sometimes some workers develop the ability to lay eggs. It's not actually the lack of a queen, but the lack of brood. But the lack of brood is caused by the lack of a queen. These are usually haploid (infertile with a half set of chromosomes) and will all develop into drones."
        },
        {
          id: 8, cause: 'Wax Moth Infestation',
          why: "Galleria mellonella (greater wax moth) and Achroia grisella (lesser wax moth). Both will invade unguarded comb during the season when they are active. They prefer comb with pollen in it and as a second choice comb with cocoons in it, but they will even live on pure wax with nothing in it."
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('causes_id_seq', (SELECT MAX (id) FROM causes))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
