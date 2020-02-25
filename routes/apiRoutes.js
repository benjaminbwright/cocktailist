const router = require('express').Router();
const db = require('../models');

router.get('/cocktails', async (req, res) => {
  const cocktails = await db.Cocktail.findAll({
    include: [db.Ingredient]
  })
  res.json(cocktails);
})

router.post('/cocktails', async ({ body }, res) => {
  const cocktail = await db.Cocktail.create(body);
  const ingredient = await db.Ingredient.findOne({
      where: {
        name: 'tequila'
      }
    })
  const ingredientsAdded = await cocktail.addIngredient(ingredient);
  res.json(ingredientsAdded);
});

module.exports = router;
