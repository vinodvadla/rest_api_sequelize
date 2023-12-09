const express = require('express')
const router = express.Router()
const { getAllcategorys, addCategory } = require('../controllers/category.controller')

router.post('/', addCategory)
router.get('/', getAllcategorys)

module.exports = router
