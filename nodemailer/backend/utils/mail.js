const nodemailer = require("nodemailer");
require('dotenv').config();


async function Mail({ to, subject, text }){
    console.log(process.env.USER,process.env.PASS)
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: 'brr9096005866@gmail.com',
                pass: process.env.PASS
            }
        });
    
        const mailOptions = {
          from: "brr9096005866@gmail.com",
          to,
          subject,
          text,
        };
    
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        return { error: false, message: "Email sent: " + info.response };
      } catch (error) {
        console.error("Error sending email:", error);
        return { error: true, message: error.message };
      }
}


module.exports=Mail