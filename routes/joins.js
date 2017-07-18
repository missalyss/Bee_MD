const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

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
