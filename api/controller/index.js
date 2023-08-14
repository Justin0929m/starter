const express = require('express');
const bodyParser = require('body-parser')
const routes = express.Router()
const { products } = require('../model')

routes.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

module.exports = {
    express,
    routes
}
