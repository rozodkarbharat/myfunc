const nodemailer = require("nodemailer");
require('dotenv').config();

async function MailSender({ to, subject, text }) {
  try {

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'allan.satterfield@ethereal.email',
          pass: 'agxzv1NfCRgXuwGPxb'
      }
  });

    const mailOptions = {
      // from: "brr9096005866@gmail.com",
      from: '"Bharat Rozodkar 👻" <brr9096005866@gmail.com>',
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);

    
    console.log("Email sent:", info);
    return { error: false, message: "Email sent: " + info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: true, message: error.message };
  }
}

module.exports = MailSender;
