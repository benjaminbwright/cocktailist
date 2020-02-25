const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/home", (req, res) => {
  res.render("index", {})
})

// router.get("/addingredient", (req, res) => {
//   res.render("index")
// })
module.exports = router