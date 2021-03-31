const app = require('./Application')



require('dotenv').config()

//morgan only work on development environment
process.env.ENV === 'DEV' && app.use(require('morgan')('dev'))

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('App is running in port : ', port)
})

