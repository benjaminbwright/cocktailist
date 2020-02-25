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

// Create Cocktails
router.post("/cocktails", async ({body}, res) => {
  // create the new cocktail
  const addedCocktail = await db.Cocktail.create(body);
  addedCocktail.addIngredients(body.ingredients);
  res.json(addedCocktail);
});
// Read Cocktails
router.get("/cocktails", async (req, res) => {
  const cocktails = await db.Cocktail.findAll({
    include: [db.Ingredient]
  });
  res.json(cocktails);
});
// Update Cocktails
router.put("/cocktails/:id", async ({body, params}, res) => {
  const numUpdated = await db.Cocktail.update(body, {
    where: {
      id: params.id
    }
  });
  const cocktail = await db.Cocktail.findOne({
    where: {
      id: params.id
    }
  });
  cocktail.setIngredients(body.ingredients);

  res.json(numUpdated);
});
// Delete Cocktails
router.delete("/cocktails/:id", async ({params}, res) => {
  const numDeleted = await db.Cocktail.destroy({
    where: {
      id: params.id
    }
  })
  res.json(numDeleted);
})

module.exports = router;
