const express = require('express')
const router = express.Router()

const {addClientTalent,getClientTalents,getClient} = require('../controllers/clientTalent.js')

router.get('/getAll', getClientTalents)
router.get('/getAllTalent',getClient)
router.post('/add', addClientTalent)

module.exports = router