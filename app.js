const cool = require('cool-ascii-faces')
const express = require('express')
const fs = require('fs')
const app = express()


const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

const IP = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '0.0.0.0';

app.get('/', (req, res) => {

    fs.readFile('/tmp/file.txt', (err, data) => {
        if (err) throw err
        res.send(data.toString())
    })


    //res.send(cool())
})

app.listen(PORT, () => {
    console.log(`Server listen on ${IP}:${PORT}`)
})
