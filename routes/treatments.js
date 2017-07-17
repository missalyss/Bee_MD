const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX TREATMENTS
router.get('/', function(req, res, next) {
  knex('treatments').then(allTreatments => {
    res.json(allTreatments)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// SHOW TREATMENT
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  knex('treatments').where({id}).then(thisTreatment => {
    res.json(thisTreatment)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// CREATE TREATMENT
router.post('/', function(req, res, next) {
  knex('treatments').insert(req.body, '*').then(newTreatment => {
    res.json(newTreatment)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// UPDATE TREATMENT
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('treatments').where({id}).update(req.body, '*').then(updatedTreatment => {
    res.json(updatedTreatment)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// DESTROY TREATMENT
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('treatments').where({id}).del().then(() => {
    res.send()
  })
  .catch(err => {
    console.error('error ', err)
  })
})

module.exports = router
