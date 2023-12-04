const express = require('express')
const app = express()
const port = 3000


app.post('http://localhost:5173/reservation',(req,res)=>{
  res.send(req)
  console.log(req)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})