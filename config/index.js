const { config } = require("dotenv")

config();

const SMTP_MAIL_SENDER = process.env.SMTP_MAIL_SENDER
const SMTP_MAIL_PASS = process.env.SMTP_MAIL_PASS
const SMTP_MAIL_RECEIVER = process.env.SMTP_MAIL_RECEIVER
const SMTP_MAIL_HOST = process.env.SMTP_MAIL_HOST

module.exports = { SMTP_MAIL_HOST, SMTP_MAIL_PASS, SMTP_MAIL_RECEIVER, SMTP_MAIL_SENDER }