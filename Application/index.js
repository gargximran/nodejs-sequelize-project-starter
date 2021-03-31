const express = require('express')
const bodyParser = require('body-parser')


// import all router
const registerRouters = require('./Router')



const app = express()

// init body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// init all routes
registerRouters(app)

module.exports = app