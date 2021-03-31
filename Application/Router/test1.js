const express = require('express')
const router = express.Router()

const {getProducts} = require('../Controllers/product/getProduct')


router.get('/', getProducts)

router.get('/hello', (req, res) => {
  res.send('hello')
})

module.exports = router
