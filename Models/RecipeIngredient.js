const db = require('../Database/connection')
const {DataTypes} = require('sequelize')
const ingredient = require('../Models/Ingredients')
const Recipe = require('../Models/Recipe')


const RecipeIngredient = db.define('RecipeIngredient',{
  amount:{
    type: DataTypes.STRING,
    allowNull: false
  },
  unit:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})
ingredient.belongsToMany(Recipe, { through: RecipeIngredient, foreignKey:{allowNull:false, name:'ingredientID'}})
Recipe.belongsToMany(ingredient, { through: RecipeIngredient, foreignKey:{allowNull:false, name:'recipeID'}})


module.exports = RecipeIngredient