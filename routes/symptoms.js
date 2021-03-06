const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX SYMPTOMS
router.get('/', function(req, res, next) {
  knex.select('symptoms.id as symptoms_id', 'glossary.id as glossary_pk_id', 'symptoms.symptom', 'symptoms.details', 'glossary.word', 'glossary.meaning').from('symptoms').leftOuterJoin('glossary', 'glossary.id', 'symptoms.glossary_id').then(allSymptoms => {
    res.json(allSymptoms)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// SHOW SYMPTOM
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  knex.select('*', 'causes.glossary_id as cause_gloss_id', 'symptoms.glossary_id as symptom_gloss_id', 'symptoms_causes.id as sc_id').from('symptoms')
  .where('symptoms.id', id)
  .innerJoin('symptoms_causes', 'symptoms_causes.symptom_id', 'symptoms.id')
  .innerJoin('causes', 'symptoms_causes.cause_id', 'causes.id')
  .then(symptomCause => {
      res.json(symptomCause)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// CREATE SYMPTOM
router.post('/', function(req, res, next) {
  knex('symptoms').insert(req.body, '*').then(newSymptom => {
    res.json(newSymptom)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// UPDATE SYMPTOM
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('symptoms').where({id}).update(req.body, '*').then(updatedSymptom => {
    res.json(updatedSymptom)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// DESTROY SYMPTOM
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('symptoms').where({id}).del().then(() => {
    res.send()
  })
  .catch(err => {
    console.error('error ', err)
  })
})

module.exports = router
