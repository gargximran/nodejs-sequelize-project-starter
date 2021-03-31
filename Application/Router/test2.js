const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('home2')
})

router.get('/hello', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router