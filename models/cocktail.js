'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    glassware: DataTypes.STRING,
    name: DataTypes.STRING,
    mixingMethod: DataTypes.STRING,
    garnish: DataTypes.STRING
  }, {});
  Cocktail.associate = function(models) {
    // associations can be defined here
  };
  return Cocktail;
};