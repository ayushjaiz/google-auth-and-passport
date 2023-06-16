const express = require('express')
const router = express.Router()

// @desc Login/Landing page
// @routes GET /
router.get('/', (req, res) => {
    res.send('Login')
})

// @desc DESC
// @routes GET /dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})


module.exports = router