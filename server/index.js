const express = require('express')
const renderer = require('./renderer')

const app = express()

app.use(renderer)

app.listen(8000, () => {
    console.log('ready')
})