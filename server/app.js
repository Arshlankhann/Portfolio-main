require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const { sendMail } = require("./helper/SendMail");
const PORT = 5000;
app.use(cors({
  origin:['https://arshlanportfolio.netlify.app',"https://arshlanportfolio.netlify.app"],
  credentials: true,
}));
app.options('*', cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newUser = new User({ name, email, subject, message });
    await newUser.save();
    res.json({ success: true, message: "Message saved successfully!" });
    sendMail(
      email,
        `Thank you for visit on my Portfolio`,
        `Hi ${name}!
        Thank you for checking out my portfolio. I hope you enjoyed exploring my work.
        If you have any questions or would like to get in touch, feel free to respond to this email or reach me at my contact form.
        Best regards,
        Arshlan Khan`
    );
  } catch (error) {
    res.json({ success: false, message: "Error saving message"});
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
