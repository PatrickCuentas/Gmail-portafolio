const nodemailer = require("nodemailer")
const express = require("express")
const cors = require("cors");
const {
  SMTP_MAIL_HOST,
  SMTP_MAIL_PASS,
  SMTP_MAIL_RECEIVER,
  SMTP_MAIL_SENDER,
} = require("./config/index");

const app = express()

app.use(express.json(), cors())

const transporter = nodemailer.createTransport({
  host: SMTP_MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_MAIL_SENDER,
    pass: SMTP_MAIL_PASS,
  },
});


app
  .post("/api/contact", async (req, res) => {

    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).send("Please fill all the fields");
    }

    await transporter

      .sendMail({
        from: `'"${name}" <${SMTP_MAIL_SENDER}>'`,
        to: SMTP_MAIL_RECEIVER,
        subject: "Portfolio Contact Form",
        html: `<p>Email: ${email}</p> <br>  <p>${message}</p>`,
      })
      .then(() => res.status(200).send("Success"))
      .catch((e) => res.status(400).send(e));
  })


app.listen(5000)