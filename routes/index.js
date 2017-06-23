const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

// RENDER INDEX
router.get('/', function(req, res, next) {
    res.render('index')
})

module.exports = router
