const cool = require('cool-ascii-faces')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(cool())
})

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
})