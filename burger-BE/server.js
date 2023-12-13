const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mysql = require('mysql2')

//Configuring the express
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Data connection
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Luc!el123',
  database:'burger_web'
})

// connection.query(`SELECT * FROM Reservations`,(err,result,fields)=>{
//   console.log(result)
// })

app.post('/reservation',async(req,res)=>{
  try{
    //Get the data from req
    const {name,email,phoneNumber,date,time,people} = req.body
    
    //Connection query
    // connection.query(`SELECT * WHERE reservedDate = ?`,(err,result,fields)=>{

    // })

    connection.query(`SELECT * FROM Reservations`,(err,result,fields)=>{
      console.log(result)
      console.log(result[0].reservedDate)
      console.log(new Date.parse(reservedDate))
    })

    res.status(200).send(JSON.stringify('Backend have received'))
    
  }catch(err){
    res.status(404).send(`Here is the error: ${err}`)
  }
  
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})