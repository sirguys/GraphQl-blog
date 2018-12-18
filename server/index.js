const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const paths = require('../config/paths')

const renderer = require('./renderer')

const app = express()

app.use(favicon(path.resolve(paths.public, 'favicon.ico')))

app.use(express.static(paths.public))

app.use(renderer)

app.listen(8000, () => {
    console.log('ready')
})