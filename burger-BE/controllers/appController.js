const nodemailer = require('nodemailer')

const reservation = async (req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
          user: "longhai2511@gmail.com",
          pass: "Luc!el123",
        },
    });
    
    let message = await transporter.sendMail({
        from: 'longhai2511@gmail.com', // sender address
        to: "longhai2511@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    
    console.log(message.messageId)
    
}

module.exports = {reservation}