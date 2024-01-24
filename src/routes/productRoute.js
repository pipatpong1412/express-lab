const express = require('express')
const { getAllProduct, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')
const router = express.Router()

router.get('/', getAllProduct)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router