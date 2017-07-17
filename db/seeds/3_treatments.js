'use strict'

exports.seed = function(knex, Promise) {
  return knex('treatments').del()
    .then(function () {
      return knex('treatments').insert([
        {
          id: 1, title: 'checkerboarding',
          instructions: "It indicates a synchronic distortion in the areas emanating triolic waves. The cerebellum, the cerebral cortex, the brain stem,  the entire nervous system has been depleted of electrochemical energy. Any device like that would produce high levels of triolic waves. These walls have undergone some kind of selective molecular polarization. I haven't determined if our phaser energy can generate a stable field. We could alter the photons with phase discriminators."
        },
        {
          id: 2, title: 'ventilation',
          instructions: "Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways. Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. I read an ion trail characteristic of a freighter escape pod. The bomb had a molecular-decay detonator. Detecting some unusual fluctuations in subspace frequencies."
        },
        {
          id: 3, title: 'destroy queen cups',
          instructions: "I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers."
        },
        {
          id: 4, title: 'one form of mite management',
          instructions: "We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers."
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
