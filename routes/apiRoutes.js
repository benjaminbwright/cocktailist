const router = require('express').Router();
const db = require('../models')

// Ingredient Routes ======================================

// Create Ingredients
router.post("/ingredients", async ({body}, res) => {
  // create the new ingredient
  const addedIngredient = await db.Ingredient.create(body);
  res.json(addedIngredient)
});
// Read Ingredients
router.get("/ingredients", async (req, res) => {
  const ingredients = await db.Ingredient.findAll();
  res.json(ingredients);
});
// Update Ingredients
router.put("/ingredients/:id", async ({body, params}, res) => {
  const numUpdated = await db.Ingredient.update(body, {
    where: {
      id: params.id
    }
  });
  res.json(numUpdated);
});
// Delete Ingredients
router.delete("/ingredients/:id", async ({params}, res) => {
  const numDeleted = await db.Ingredient.destroy({
    where: {
      id: params.id
    }
  })
  res.json(numDeleted);
})

// Cocktail Routes ========================================
router.get('/cocktails', (req, res) => {
  res.send('This will be all the cocktials in json format')
})

module.exports = router;
