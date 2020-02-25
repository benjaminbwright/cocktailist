const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/home", async (req, res) => {

  const ingredients = await db.Ingredient.findAll({
    raw: true
  });

  res.render("index", {
    ingredients: ingredients
  })
})

// router.get("/addingredient", (req, res) => {
//   res.render("index")
// })
module.exports = router