'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    glassware: DataTypes.STRING,
    name: DataTypes.STRING,
    mixingMethod: DataTypes.STRING,
    garnish: DataTypes.STRING,
    flavorProfile: DataTypes.STRING
  }, {});
  Cocktail.associate = function(models) {
    // associations can be defined here
    // Cocktail has many ingredients
    Cocktail.belongsToMany(models.Ingredient, {
      through: 'CocktailIngredients'
    })
  };
  return Cocktail;
};