const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//Configuring the express
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/reservation',async(req,res)=>{
  try{
    
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