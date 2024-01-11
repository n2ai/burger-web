const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mysql = require('mysql2')
const appRoute = require('./routes/route.js')

//Configure CORS
const corsOption = {
  origin: ['http://localhost:5173'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}

//Configuring the express
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',appRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Practice
