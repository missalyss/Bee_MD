const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// INDEX GLOSSARY
router.get('/', function(req, res, next) {
  knex('glossary').then(allWords => {
    res.json(allWords)
  })
})

// SHOW WORD
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  knex('glossary').where({id}).then(thisWord => {
    res.json(thisWord)
  })
})

// CREATE WORD
router.post('/', function(req, res, next) {
  knex('glossary').insert(req.body, '*').then(newWord => {
    res.json(newWord)
  })
})

// UPDATE WORD
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  knex('glossary').where({id}).update(req.body, '*').then(updatedWord => {
    res.json(updatedWord)
  })
})

// DESTROY WORD
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  knex('glossary').where({id}).del().then(() => {
    res.send()
  })
})

module.exports = router
