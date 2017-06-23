const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX SYMPTOMS
router.get('/', function(req, res, next) {
  knex('symptoms').then(allSymptoms => {
    res.json(allSymptoms)
  })
})

// SHOW SYMPTOM
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  knex('symptoms').where({id}).then(thisSymptom => {
    res.json(thisSymptom)
  })
})

// CREATE SYMPTOM
router.post('/', function(req, res, next) {
  knex('symptoms').insert(req.body, '*').then(newSymptom => {
    res.json(newSymptom)
  })
})

// UPDATE SYMPTOM
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('symptoms').where({id}).update(req.body, '*').then(updatedSymptom => {
    res.json(updatedSymptom)
  })
})

// DESTROY SYMPTOM
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('symptoms').where({id}).del().then(() => {
    res.send()
  })
})

module.exports = router
