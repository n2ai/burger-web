const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mysql = require('mysql2')
const appRoute = require('./routes/route.js')

//Configuring the express
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Data connection
//Consider the mysql reserve table
// const connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'Luc!el123',
//   database:'burger_web'
// })

// connection.query(`SELECT * FROM Reservations`,(err,result,fields)=>{
//   console.log(result)
// })

app.use('/api',appRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})