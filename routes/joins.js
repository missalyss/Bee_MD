const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// CREATE SYMPTOMS-CAUSES CONNECTIONS
router.post('/sc', (req, res, next) => {
  let newJoin = {symptom_id: req.body.symptom_id, cause_id: req.body.cause_id, votes: 0}
  knex('symptoms_causes').insert(newJoin, '*')
  .then(newConnection => {
    res.json(newConnection)
  })
})



// UPDATE SYMPTOMS-CAUSES VOTES
router.put('/sc/:id', (req, res, next) => {
  knex('symptoms_causes')
  .where('symptoms_causes.id', req.params.id)
  .update('votes', req.body.votes, '*')
  .then(updatedJoin => {
    res.json(updatedJoin)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// UPDATE CAUSES-TREATMENTS VOTES
router.put('/ct/:id', (req, res, next) => {
  knex('causes_treatments')
  .where('causes_treatments.id', req.params.id)
  .update('votes', req.body.votes, '*')
  .then(updatedJoin => {
    res.json(updatedJoin)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

module.exports = router
