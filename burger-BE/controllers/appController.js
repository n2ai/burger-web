const nodemailer = require('nodemailer')
const mysql = require('mysql2/promise')

const reservation = async (req,res)=>{
  //Get customer information
  const {name,email,phoneNumber,date,time,people} = req.body
  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        user: 'longhai2511@gmail.com',
        pass: 'mhna xxvd qzko wjmv'
      }
  });
  
  //Mail Content for the customer
  var mailToCustomer = {
      from: 'longhai2511@gmail.com',
      to: `${email}`,
      subject: 'Reservation notice from The Burger',
      text: `Thank you customer: ${name}, this is the email from The Burger about your reservation at ${date} ${time} with ${people} people
      The restaurant will call you back if the reservation is valid. Thank you!`
  };
      
  transporter.sendMail(mailToCustomer, function(error, info){
    if (error) {
    } else {
      res.send('Email has been received').status(200)
    }
  });

  //Mail content for the restaurant
  var mailToRestaurant = {
    form: 'longhai2511@gmail.com',
    to: 'longhai2511@gmail.com',
    subject: 'New reservation!',
    text: `We receive a new reservation from customer: ${name}
           Phone number: ${phoneNumber}
           Email: ${email}
           People: ${people}
           Time: ${time}
           Date: ${date}
           Please contact them back ASAP`
  }

  transporter.sendMail(mailToRestaurant, function(error,info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

/**Get online shop details */

const getOnlineShop = async(req,res)=>{

  const connection = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Luc!el123',
    database:'burger_web'
  })
  
  const [results, fields] = await connection.execute(
    'SELECT * FROM OnlineShop')
    
  res.send(results)
  

}

/**Add order details */
const addOrder = async(req,res)=>{
  var totalBill = req.body
  

  const connection = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Luc!el123',
    database:'burger_web'
  })
  
  
  /**Create Orders */
  for(let i=1;i<totalBill.length;i++){
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const [results,fields] = await connection.execute(
      'INSERT INTO Orders VALUES(?,?,?,?,?)',[id,totalBill[i].name,totalBill[i].price,totalBill[i].count,totalBill[0].customerName]
    )
  }
  
  res.send('receive').status(202)
}

module.exports = {reservation,getOnlineShop,addOrder}