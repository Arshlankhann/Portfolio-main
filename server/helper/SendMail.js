const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



// async..await is not allowed in global scope, must use a wrapper
async function sendMail( to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to,
    subject,
    text,
    html,
  });

  console.log("Message sent: %s", info.messageId);
}



module.exports={sendMail};