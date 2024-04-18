const express = require('express')
const userController = require('../Controllers/testsController')
const router = new express.Router()
const displayController = require('../Controllers/displayController')
// router.post('')
router.post('/register',userController.register)
router.get('/registeredUsers', displayController.getAllDetails);



module.exports = router