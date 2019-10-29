const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "188.131.244.76",
    database: "EvanTest",
    user: "evan",
    password: "Evan123=-"
  }
})

module.exports = db;