require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.CONNECTION_STRING}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333)