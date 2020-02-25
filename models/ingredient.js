'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
    // belongs to many cocktails
    Ingredient.belongsToMany(models.Cocktail, {
      through: 'CocktailIngredients'
    });
  };
  
  return Ingredient;
};