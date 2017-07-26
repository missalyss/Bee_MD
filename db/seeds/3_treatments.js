'use strict'

exports.seed = function(knex, Promise) {
  return knex('treatments').del()
    .then(function () {
      return knex('treatments').insert([
        {
          id: 1, title: 'Checker-boarding',
          instructions: "The goal of Checkboarding is to keep them in the build-up phase until after Reproductive swarm cut-off by making them think they don't have enough stores and giving the brood nest room to expand. If you look at your bees and your blooms and your climate, this Reproductive cut-off is usually the peak of the apple blossoms or a week after the apples START to bloom. The time to do Checkboarding is 9 weeks before that. That's about when the Elm blooms or four weeks before the Maples bloom or five weeks before the Redbud blooms or eight weeks before the apples start blooming or ten weeks before the black locust starts blooming. Hopefully you have some idea when one of those blooms in your location. NOTE: in theory these are all ways of pinpointing the same stage of vegetative development, they are just different reference points to figure it out for your location, I'm just listing all the different blooms in case you know when one of them is to calculate from. At that time (9 weeks before Reproductive cut-off/the peak of the apple blossoms) you checkerboard. You put alternating frames of capped honey and empty drawn comb above the brood nest."
        },
        {
          id: 2, title: 'Ventilation',
          instructions: "1. In summer, the lower (main) entrance should be fully open in a strong and healthy hive. This not only allows for vast amounts of traffic but increases air flow as well. Weak colonies—especially those in areas prone to yellow jacket attacks—should have their entrances reduced to a size they can easily defend. 2. Upper entrances increase air circulation and often aid in reducing congestion. Many of the returning foragers will use an upper entrance if it is available. Upper entrances range in size from a tiny slot about ?-inch high by ¾-inch wide (1 x 2 cm) to the equivalent of a full main entrance."
        },
        {
          id: 3, title: 'Destroy Queen Cups',
          instructions: "If With the use of your hive tool, carefully destroy the queen cup so that an egg cannot be laid in it. Destroying queen cells (meaning that there is already an egg forming in the cell), it can only postpone the inevitable and most likely leave the hive queenless."
        },
        {
          id: 4, title: 'Sugar Shake',
          instructions: "1. Remove 1 or 2 frames of bees from the brood nest. Ideally, these frames will contain open brood and nurse bees. Make sure the frames you shake do not include the queen. 2. Shake the frames over your bucket. Don’t bang the frames, just shake. 3. Take your bucket of bees, tap it so the bees collect on the bottom, and then pour them into your mason jar up to the 1/2-cup line. This will give you approximately 400* bees. 4. Quickly screw on the modified lid. 5. Pour the rest of the bees back in the hive. 6. Spoon some confectioners sugar onto the mesh screen and work it through with your fingers. 7. Shake the bees in the jar for about a minute to completely coat both bees and mites, using as much sugar as necessary. 8. Invert the jar and shake it into your light-colored dish. Keep shaking until mites and sugar stop falling out. 9. Add a small amount of water to your dish of mites. This dissolves the sugar and makes the mites easier to see. 10. Count the mites."
        },
        {
          id: 5, title: 'Bottom Supering',
          instructions: "Place honey supers under all the existing supers, directly on top of the brood box. The theory is the bees will work it better when it's directly above the brood chamber; as opposed to TOP supering which would be just putting the supers on top of the existing supers."
        },
        {
          id: 6, title: 'Re-Brood',
          instructions: "To supplement the population with brood from another colony, pull frames out of the stronger colony and put it into the hurting hive."
        },
        {
          id: 7, title: 'Light Trap',
          instructions: "A light trap is just a lamp that you place outside at night. Beneath the light is a container  to capture honey bees that die at the light source. You collect your dead honey bees from the container and place them into a different resealable container, something like a mason jar works well. You wait 5 to 14 days, then look for any larvae that crawl out from the necks of the bees—right between the head and the thorax. You also look for pupae and then wait to see if they hatch into adult flies."
        },
        {
          id: 8, title: 'Re-Queen',
          instructions: "Purchase a new queen in a queen cage, where she will have some attendants and a candy plug separating her from the hive. Rubber-band her to one frame that doesn't have drawn comb, and within two to three days, the bees outside and inside the cage will consume the candy plug. If they don't reject her and kill her, they will accept her as their new queen. If your hive is ready to abscond, you may have to push the queen right in there, hoping that the hive will not reject her."
        },
        {
          id: 9, title: 'Wax Moth Control',
          instructions: "The reason a colony gets infested is that it is weak. Prevention is not to give them more territory than they can guard, in other words, don't leave a lot of drawn comb on a hive that is small and struggling. Once they are infested, the solution is to reduce them down to just the space the cluster of bees can cover. Remove all the rest of the comb. If you have a freezer, freeze it to kill the moths, or if it's too far gone, let the moths finish cleaning it up. If they get to go to the logical end they will turn all the comb into webs that just fall out of the frames or off of plastic foundation. If it's only got a tunnel or two in it, freezing is a way to save the comb. "
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('treatments_id_seq', (SELECT MAX (id) FROM treatments))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error)
    })
}
