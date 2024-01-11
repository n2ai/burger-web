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

//Get data for the burger homepage
//Use for response
let burgerMenu = []

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Luc!el123',
  database:'burger_web'
})

connection.query(
  'SELECT * FROM Menu', (err,results,fields)=>{
    burgerMenu = results
  }
)

app.get('/', async (req, res) => {

  res.send(burgerMenu)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


