const nodemailer = require('nodemailer')
const mysql = require('mysql2')

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

  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Luc!el123',
    database:'burger_web'
  })
  
  connection.query(
    'SELECT * FROM OnlineShop', (err,results,fields)=>{
      res.send(results)
    }
  )

}

/**Add order details */
const addOrder = async(req,res)=>{
  res.send('receive')

  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Luc!el123',
    database:'burger_web'
  })
  
  connection.query(
    'INSERT INTO ',[] ,(err,results,fields)=>{
      res.send(results)
    }
  )

  console.log(req.body)
}

module.exports = {reservation,getOnlineShop,addOrder}