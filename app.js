const cool = require('cool-ascii-faces')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(cool())
})

app.listen(5000, () => {
    console.log('Server listen at: 5000')
})