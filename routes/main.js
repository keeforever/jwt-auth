const express = require('express')
const router = express.Router()

// login
// dashboard
const {login, dashboard} = require('../controllers/main')
const authentication = require('../middleware/auth')

router.route('/login').post(login)
router.route('/dashboard').get(authentication,dashboard)

module.exports = router