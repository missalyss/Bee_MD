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
  knex.select('*').from('treatments').where('treatments.id', id)
  .leftOuterJoin('causes_treatments', 'causes_treatments.treatment_id', 'treatments.id')
  .leftOuterJoin('causes', 'causes_treatments.cause_id', 'causes.id')
  .then(thisTreatment => {
    res.json(thisTreatment)
  })
  .catch(err => {
    console.error('error ', err)
  })
})

// router.get('/:id', function(req, res, next) {
//   const id = req.params.id
//   knex.select('*', 'causes.glossary_id as cause_gloss_id', 'symptoms.glossary_id as symptom_gloss_id').from('symptoms')
//   .where('symptoms.id', id)
//   .innerJoin('causes_symptoms', 'symptoms_causes.symptom_id', 'symptoms.id')
//   .innerJoin('causes', 'symptoms_causes.cause_id', 'causes.id')
//   .then(symptomCause => {
//       res.json(symptomCause)
//   })
//   .catch(err => {
//     console.error('error ', err)
//   })
// })

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
