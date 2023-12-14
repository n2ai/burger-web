const nodemailer = require('nodemailer')

const reservation = async (req,res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'longhai2511@gmail.com',
          pass: 'mhna xxvd qzko wjmv'
        }
    });
      
    var mailOptions = {
        from: 'longhai2511@gmail.com',
        to: 'longhai2511@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    
}

module.exports = {reservation}