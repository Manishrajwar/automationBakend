// Import the required modules
const express = require("express")
const router = express.Router()
const {start} = require("../controllers/auth")

 router.post("/start" , start);

module.exports = router