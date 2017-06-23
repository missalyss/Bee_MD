const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX CAUSES
router.get('/', function(req, res, next) {
  knex('causes').then(allCauses => {
    res.json(allCauses)
  })
})

// SHOW CAUSE
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  knex('causes').where({id}).then(thisCause => {
    res.json(thisCause)
  })
})

// CREATE CAUSE
router.post('/', function(req, res, next) {
  knex('causes').insert(req.body, '*').then(newCause => {
    res.json(newCause)
  })
})

// UPDATE CAUSE
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('causes').where({id}).update(req.body, '*').then(updatedCause => {
    res.json(updatedCause)
  })
})

// DESTROY CAUSE
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('causes').where({id}).del().then(() => {
    res.send()
  })
})

module.exports = router