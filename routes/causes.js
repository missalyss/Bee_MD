const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX CAUSES
router.get('/', function(req, res, next) {
  knex('causes')
  // .select('causes.id as causes_id', 'glossary.id as glossary_pk_id', 'causes.cause', 'causes.why', 'glossary.word', 'glossary.meaning').from('causes').leftOuterJoin('glossary', 'glossary.id', 'causes.glossary_id')
  .then(totalResult => {
    res.json(totalResult);
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// SHOW CAUSE
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  let causeJoins = {}
  knex.select('*', 'causes.glossary_id as cause_gloss_id', 'symptoms.glossary_id as symptom_gloss_id', 'symptoms_causes.id as sc_id').from('causes')
  .where('causes.id', id)
  .innerJoin('symptoms_causes', 'symptoms_causes.cause_id', 'causes.id')
  .innerJoin('symptoms', 'symptoms_causes.symptom_id', 'symptoms.id')
  .then(causeAndSymptom => {
    causeJoins.causeSympt = causeAndSymptom
    return knex.select('*', 'causes_treatments.id as ct_id').from('causes')
    .where('causes.id', id)
    .innerJoin('causes_treatments', 'causes_treatments.cause_id', 'causes.id')
    .innerJoin('treatments', 'causes_treatments.treatment_id', 'treatments.id')
    .then(causeAndTreatment => {
      causeJoins.causeTreat = causeAndTreatment
      res.json(causeJoins)
    })
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// CREATE CAUSE
router.post('/', function(req, res, next) {
  knex('causes').insert(req.body, '*').then(newCause => {
    res.json(newCause)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// UPDATE CAUSE
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('causes').where({id}).update(req.body, '*').then(updatedCause => {
    res.json(updatedCause)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// DESTROY CAUSE
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('causes').where({id}).del().then(() => {
    res.send()
  })
  .catch(err => {
    console.error('error ', err)
  })
})

module.exports = router
